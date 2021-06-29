import React, { Fragment, useState, useContext, useEffect } from 'react';
import Userprojects from './Userprojects';
import Requireduserprojects from './Requireduserprojects';
import ProjectContext from '../../context/project/projectContext';
import AuthContext from '../../context/auth/authContext';
import './Profilepage.css';
import Profile from './Profile';
const Profilepage = () => {
  const projectContext = useContext(ProjectContext);

  const authContext = useContext(AuthContext);

  const { getUser, profile } = projectContext;

  const { loadUser } = authContext;

  useEffect(() => {
    getUser();
    //loadUser();
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div className='empty'></div>
      <div
        className='user-profile'
        style={{ display: 'flex', flexWrap: 'wrap' }}
      >
        <div className='card-container'>
          <Profile profile={profile} />
        </div>
        {/* projects */}
        <div className='project-main'>
          <div className='user-projects'>
            <Userprojects />
            <h3>PROJECT IN REQUIREMENT </h3>
            <Requireduserprojects />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profilepage;
