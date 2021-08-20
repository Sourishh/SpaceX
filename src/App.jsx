import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import axios from './Utility/AxiosInstance';
import './App.sass';

import Filters from './components/Filters/Filter';
import LaunchData from './components/LaunchData/LaunchData';

const App = ({
  spacexDetails
}) => {

  const [year, setYear] = useState('');
  const [launching, setLaunching] = useState('');
  const [landing, setLanding] = useState('');
  const [list, setList] = useState(null);

  useEffect(() => {
    axios
      .get()
      .then(({ data }) => setList(data))
      .catch((error) => console.log(error));
  }, []);

  const filterLaunchResult = async (year, launch, land) => {
    let res = await axios(
      `&launch_success=${launch}&land_success=${land}&launch_year=${year}`
    );
    setList(res.data);
  };

  const changeLaunchYearFilter = (year) => {
    setList(null);
    const clickedYear = year === spacexDetails.year ? "" : year;
    spacexDetails.year = clickedYear;
    setYear(clickedYear);
    filterLaunchResult(clickedYear, launching, landing);
  };

  const changeLaunchFilter = (launching) => {
    setList(null);
    const clickedLaunch = launching === spacexDetails.launching ? "" : launching;
    spacexDetails.launching = clickedLaunch;
    setLaunching(clickedLaunch);
    filterLaunchResult(year, clickedLaunch, landing);
  };

  const changeLandingFilter = (landing) => {
    setList(null);
    const clickedLand = landing === spacexDetails.landing ? "" : landing;
    spacexDetails.landing = clickedLand;
    setLanding(clickedLand);
    filterLaunchResult(year, launching, clickedLand);
  };

  return (
    <div className="App">
      <h1 className="title">SpaceX Launch Programs</h1>
      <div className="container">
        <Filters
          initialValue={spacexDetails}
          setYear={changeLaunchYearFilter}
          setLaunching={changeLaunchFilter}
          setLanding={changeLandingFilter}
        />
        <LaunchData list={list} />
      </div>
      <div className="text">
        <strong>Developed By: </strong> Sourish Barman
      </div>
    </div>
  );
};

App.propTypes = {
  spacexDetails: PropTypes.shape({
    year: PropTypes.string,
    launching: PropTypes.string,
    landing: PropTypes.string,
    list: PropTypes.string,
  }).isRequired
};

// Defaults
App.defaultProps = {
  spacexDetails: {
    year: '',
    launching: '',
    landing: '',
    list: null
  }
};

export default App;
