// Modules
import styled from "styled-components";

// Styles
export const Missioncard = styled.div` 
  display: inline-block;
  margin: 0 8px;
  flex: 1 0 auto;
`;

export const Missioncardbody = styled.div` 
  padding: 20px;
  border-radius: 5px;
  font-size: 14px;
  background: #fff;
  height: 85%;
`;

export const Missioncardimg = styled.div` 
  background: #f2f2f2;
  height: 152px;
  margin: auto;
  display: block;

  img {
    height: 150px;
    margin: auto;
    display: block;
  }
`;

export const Labeltag = styled.label`
  color: #323a6a;
  font-weight: bold;
  margin: 13px 0;
  display: block;

  ~ div {
    margin: 10px 0;
    color: #4a4d91;
  }
`;

export const Missions = styled.div`
  strong {
    color: black;
  }
  ul {
    margin: 0;
    padding-left: 20px;
  }
`;

export const Labelchange = styled.div`
  strong {
    color: black;
  }
  > div {
    margin: 10px 0;
  }
`;    
