import React from "react";
import PropTypes from "prop-types";
import "./filter.scss";

const Filters = (props) => {
  let years = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
  ];

  return (<div className='filterSections'>
    <div className='filterLabel'>Filters</div>
    <section className='filter'>
      <label>Launch Year</label>
      <div className='options'>
        {
          years.map((year, i) => <div onClick={() => props.setYear(year)} key={`year${i}`}>
            <span className={props.initialValue.year === year ? 'active' : ''}>{year}</span>
          </div>)
        }
      </div>

      <label>Successful Launch</label>
      <div className='options'>
        <div onClick={() => props.setLaunching('true')}>
          <span className={props.initialValue.launching === 'true' ? 'active' : ''} >True </span>
        </div>
        <div onClick={() => props.setLaunching('false')}>
          <span className={props.initialValue.launching === 'false' ? 'active' : ''} >False</span>
        </div>
      </div>

      <label>Successful Landing</label>
      <div className='options'>
        <div onClick={() => props.setLanding('true')}>
          <span className={props.initialValue.landing === 'true' ? 'active' : ''} >True </span>
        </div>
        <div onClick={() => props.setLanding('false')}>
          <span className={props.initialValue.landing === 'false' ? 'active' : ''} >False</span>
        </div>
      </div>
    </section>
  </div>)
}

Filters.propTypes = {
  setYear: PropTypes.func.isRequired,
  setLaunching: PropTypes.func.isRequired,
  initialValue: PropTypes.object.isRequired,
  setLanding: PropTypes.func.isRequired,
};

// Defaults
Filters.defaultProps = {
  initialValue: {}
};

export default Filters;