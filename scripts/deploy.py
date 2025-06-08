from ape import project, accounts


def main():
    sender = accounts.load("voting-system")
    proposal_names = [
        "🚀 Vyper is the Best",
        "💎 Solidity is the Best",
        "🐍 Support Python",
        "Web3 Development",
        "Security First",
        "Layer 2 Solutions",
        "🤖 AI Integration",
        "Fast Blockchain",
    ]
    project.voting.deploy(proposal_names, sender=sender)
