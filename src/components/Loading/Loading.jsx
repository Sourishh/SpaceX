import Loader from "react-loader-spinner";

import notFound from "../../assets/No-Result.webp";

// Styled Components
import * as Styled from "./Loading.styled";

const loader = (
  <Loader
    type="Puff"
    color="#000"
    height={100}
    width={100}
    timeout={2000} //2 secs
  />
);

const Loading = ({ type }) => {
  return (
    <Styled.Loading>
      {type === 'Loading' ? (
        loader
      ) : (
        <img src={notFound} alt="no-result" />
      )}
      <Styled.Text>
        {type === 'Loading' ? 'Loading...' : 'No Result Found'}
      </Styled.Text>
    </Styled.Loading>
  );
};

export default Loading;
