import type { Address } from "viem";

export const votingContractAddress =
  "0xB370C58e9C0538500e455925Fb0502a718CB4843" as Address;

export const votingContractAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "voter",
        type: "address",
      },
      {
        indexed: false,
        name: "proposal",
        type: "uint256",
      },
    ],
    name: "Voted",
    type: "event",
  },
  {
    inputs: [
      {
        name: "proposal_id",
        type: "uint256",
      },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        name: "proposal_id",
        type: "uint256",
      },
    ],
    name: "get_proposal_info",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
      {
        name: "",
        type: "string",
      },
      {
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        name: "voter",
        type: "address",
      },
      {
        name: "proposal_id",
        type: "uint256",
      },
    ],
    name: "has_voted",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "counter",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        name: "arg0",
        type: "uint256",
      },
    ],
    name: "proposals",
    outputs: [
      {
        components: [
          {
            name: "id",
            type: "uint256",
          },
          {
            name: "name",
            type: "string",
          },
          {
            name: "vote_count",
            type: "uint256",
          },
        ],
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        name: "arg0",
        type: "address",
      },
      {
        name: "arg1",
        type: "uint256",
      },
    ],
    name: "votes",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        name: "_proposal_names",
        type: "string[]",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
] as const;
