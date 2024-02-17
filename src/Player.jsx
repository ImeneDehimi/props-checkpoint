import Card from 'react-bootstrap/Card';

// eslint-disable-next-line react/prop-types
const Player = ({ nom, équipe, nationalité, numero_voiture, âge, image }) =>{

  return ( 
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{nom}</Card.Title>
        <Card.Text>
        Team : {équipe}
        </Card.Text>
        <Card.Text>
        Nationality : {nationalité}
        </Card.Text>
        <Card.Text>
        car number : {numero_voiture}
        </Card.Text>
        <Card.Text>
        age : {âge}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
Player.defaultProps = {
    nom: "driver",
    nationalité: "Unknown",
    équipe: "Unknown",
    image: "",
    numero_voiture: "0",
    âge: "",
  };
export default Player;