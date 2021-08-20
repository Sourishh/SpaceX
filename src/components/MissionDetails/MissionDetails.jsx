import React from "react";
import PropTypes from "prop-types";

// Styled Components
import * as Styled from "./MissionDetails.styled.js";

const MissionDetails = ({ launch }) => {

  const landingFilter = () => {
    if (launch?.rocket.first_stage.cores[0].land_success === null)
      return " NA";
    else if (launch?.rocket.first_stage.cores[0].land_success === true)
      return " Yes"
    else
      return " No"
  }

  return (
    <Styled.Missioncard>
      <Styled.Missioncardbody>
        <Styled.Missioncardimg>
          <img src={launch?.links.mission_patch_small} alt="rocket" />
        </Styled.Missioncardimg>
        <Styled.Labeltag>
          {`${launch?.mission_name} #${launch.flight_number}`}
        </Styled.Labeltag>
        <Styled.Missions>
          <strong>Mission Ids: </strong>
          {launch?.mission_id.length ? (
            <ul>
              {launch?.mission_id.map((id, i) => (
                <li key={`mid-${i}`}> {id} </li>
              ))}
            </ul>
          ) : (
            <span> NA</span>
          )}
        </Styled.Missions>
        <Styled.Labelchange>
          <div>
            <strong>Launch Year: </strong>
            <span>{launch?.launch_year}</span>
          </div>
          <div>
            <strong>Successful Launch:</strong>
            <span>{launch?.launch_success ? " Yes" : " No"}</span>
          </div>
          <div>
            <strong>Successful Landing:</strong>
            <span>
              {landingFilter()}
            </span>
          </div>
        </Styled.Labelchange>
      </Styled.Missioncardbody>
    </Styled.Missioncard>
  );
};

MissionDetails.propTypes = {
  launch: PropTypes.shape({
    links: PropTypes.object.isRequired,
    mission_name: PropTypes.string.isRequired,
    flight_number: PropTypes.number.isRequired,
    mission_id: PropTypes.array,
    launch_year: PropTypes.string.isRequired,
    launch_success: PropTypes.bool.isRequired,
    rocket: PropTypes.object.isRequired,
  }).isRequired,
};

// Defaults
MissionDetails.defaultProps = {
  links: {},
  mission_name: "",
  flight_number: "",
  mission_id: [],
  launch_year: "",
  launch_success: "",
  rocket: ""
};
export default MissionDetails;
