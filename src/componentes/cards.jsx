const Card = ({ character }) => {
  return (
    <div className="card hover-effect" style={{ padding: '10px' }}>
      <img style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} src={character.image} alt={character.name} />
      <h1 style={{ fontSize: '25px', marginTop: '10px', marginBottom: '5px' }}>{character.name}</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2 style={{ marginTop: '0', marginBottom: '0' }}>{character.species}</h2>
        <h2 style={{ color: character.status === 'Alive' ? '#51fc72' : 'red', marginTop: '0', marginBottom: '0' }}>{character.status}</h2>
      </div>
    </div>
  );
};

export default Card;
