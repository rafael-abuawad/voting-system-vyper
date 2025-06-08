import { useAccount, useReadContract } from "wagmi";
import { ConnectKitButton } from "connectkit";
import {
  votingContractAbi,
  votingContractAddress,
} from "@/lib/voting-contract";
import Proposal from "./proposal";
import { Header } from "./Header";

export function Voting() {
  const { isConnected } = useAccount();
  const { data: counter, isLoading: isLoadingCounter } = useReadContract({
    address: votingContractAddress,
    abi: votingContractAbi,
    functionName: "counter",
  });

  console.log({ counter, votingContractAddress });
  if (!isConnected) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <ConnectKitButton />
      </div>
    );
  }

  if (isLoadingCounter) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900" />
      </div>
    );
  }

  if (!counter) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl">No proposals available</p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: Number(counter) }).map((_, index) => (
            <Proposal key={index} proposalId={BigInt(index)} />
          ))}
        </div>
      </div>
    </>
  );
}
