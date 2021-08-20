import MissionDetails from "../MissionDetails/MissionDetails.jsx";
import Loading from "../Loading/Loading";

// Styled Components
import * as Styled from "./LaunchData.styled";

const LaunchList = ({ list }) => {
  return (
    <Styled.List>
      {list ? (
        list.length ? (
          list.map((launchDetails, i) => (
            <MissionDetails launch={launchDetails} key={`MissionDetails-${i}`} />
          ))
        ) : (
          <Loading type="Notfound" />
        )
      ) : (
        <Loading type="Loading" />
      )}
    </Styled.List>
  );
};

export default LaunchList;
