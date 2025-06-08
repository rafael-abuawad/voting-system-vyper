import {
  votingContractAbi,
  votingContractAddress,
} from "@/lib/voting-contract";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Skeleton } from "./ui/skeleton";
import {
  useAccount,
  useReadContract,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import type { Proposal } from "@/lib/types";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";

export default function Proposal({ proposalId }: { proposalId: bigint }) {
  const { address } = useAccount();
  const {
    data: proposal,
    isLoading: isLoadingProposal,
    refetch: refetchProposal,
  } = useReadContract({
    address: votingContractAddress,
    abi: votingContractAbi,
    functionName: "proposals",
    args: [proposalId],
  });
  const {
    data: hasVoted,
    isLoading: isLoadingHasVoted,
    refetch: refetchHasVoted,
  } = useReadContract({
    address: votingContractAddress,
    abi: votingContractAbi,
    functionName: "has_voted",
    args: [address!, proposalId],
    query: {
      enabled: !!address,
    },
  });
  const {
    writeContractAsync: vote,
    isPending: isVoting,
    data: voteData,
  } = useWriteContract();
  const { isLoading: isLoadingVoteReceipt, isSuccess: isVoteSuccess } =
    useWaitForTransactionReceipt({
      hash: voteData,
    });

  useEffect(() => {
    if (isVoteSuccess) {
      refetch();
    }
  }, [isVoteSuccess]);

  const refetch = async () => {
    await refetchProposal();
    await refetchHasVoted();
  };

  const handleVote = async (proposalId: bigint) => {
    if (!address) return;
    await vote({
      address: votingContractAddress,
      abi: votingContractAbi,
      functionName: "vote",

      args: [proposalId],
    });
    await refetch();
  };

  if (isLoadingProposal) {
    return (
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2 mt-2" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-10 w-full" />
        </CardContent>
      </Card>
    );
  }

  if (!proposal) {
    return (
      <Card className="hover:shadow-lg transition-shadow border-dashed">
        <CardHeader>
          <CardTitle className="text-muted-foreground">
            No Proposal Found
          </CardTitle>
          <CardDescription>
            The requested proposal could not be found or may have been removed.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="hover:shadow-lg transition-shadow relative">
      {isLoadingVoteReceipt && (
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-10">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-sm text-muted-foreground">
              Processing your vote...
            </p>
          </div>
        </div>
      )}
      <CardHeader>
        <CardTitle>{(proposal as Proposal).name}</CardTitle>
        <CardDescription className="text-2xl">
          Votes: {(proposal as Proposal).vote_count.toString()}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          onClick={() => handleVote((proposal as Proposal).id)}
          disabled={
            hasVoted ||
            !address ||
            isVoting ||
            isLoadingHasVoted ||
            isLoadingVoteReceipt
          }
          className="w-full"
        >
          {isVoting
            ? "Voting..."
            : isLoadingHasVoted
              ? "Vote"
              : hasVoted
                ? "Already Voted"
                : "Vote"}
        </Button>
      </CardContent>
    </Card>
  );
}
