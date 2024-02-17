
import Player from "./Player";
import driverData from "./driver";
import './index.css'

const PlayerList = () => {
    
  return (
    <div className="container">
      {driverData.map((driver) => (
        <Player key={driver.nom} {...driver} />
      ))}
    </div>
  );
};

export default PlayerList;