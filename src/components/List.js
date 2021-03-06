import React from 'react';
import { Link } from 'react-router-dom';
const List = ({ remote }) => {
  return (
    <>
      {remote.map((job) => {
        const { id, companyName, jobTitle, Location, image } = job;
        return (
          <Link to={`/JobDescription/${id}`}>
            <ul key={id} className='job'>
              <li className='features'>
                <span className='new'>New</span>
                <div className='highlight-bar'></div>
                <div className='tooltip'>
                    <a href="/JobDescription">
                        <img src={image} alt="" className="flag-logo" />
                    </a>
                </div>
                <a href="/JobDescription" className="job-cate">
                    <span className="company-name">{companyName}</span>
                    <br />
                    <span ClassName="job-title">{jobTitle}</span>
                    <br />
                    <span className="region-company">{Location}</span>
                </a>
              </li>
          </ul>
          </Link>
          
        );
      })}
    </>
  );
};

export default List;
