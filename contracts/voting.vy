# pragma version ^0.4.2


# Evento para registrar un nuevo voto
event Voted:
    voter: indexed(address)
    proposal: uint256


# Estructura para almacenar la información de cada propuesta
struct Proposal:
    id: uint256
    name: String[100]
    vote_count: uint256


# contador de propuestas
counter: public(uint256)
# proposal_id -> Proposal
proposals: public(HashMap[uint256, Proposal])
# voter address -> proposal_id -> bool
votes: public(HashMap[address, HashMap[uint256, bool]])


@deploy
@payable
def __init__(_proposal_names: DynArray[String[100], 256]):
    """
    Constructor para inicializar las propuestas.
    """
    count: uint256 = self.counter
    for proposal: String[100] in _proposal_names:
        self.proposals[count] = Proposal(id=count, name=proposal, vote_count=0)
        count += 1
    
    self.counter = count


@external
def vote(proposal_id: uint256):
    """
    Permite a un usuario votar por una propuesta.
    """
    # Se asegura de que el votante no haya votado antes
    assert not self.votes[msg.sender][proposal_id], "Ya has votado."
    # Se asegura de que la propuesta exista
    assert proposal_id >= 0 and proposal_id < self.counter, "Propuesta invalida."

    # Registra el voto
    self.proposals[proposal_id].vote_count += 1
    self.votes[msg.sender][proposal_id] = True

    # Emite el evento
    log Voted(msg.sender, proposal_id)


@view
@external
def get_proposal_info(proposal_id: uint256) -> (uint256, String[100], uint256):
    """
    Devuelve el nombre y la cantidad de votos de una propuesta.
    """
    proposal: Proposal = self.proposals[proposal_id]
    return (proposal.id, proposal.name, proposal.vote_count)


@view
@external
def has_voted(voter: address, proposal_id: uint256) -> bool:
    """
    Verifica si un votante ha votado por una propuesta.
    """
    return self.votes[voter][proposal_id]