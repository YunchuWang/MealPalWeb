import React from 'react';
import '../css/style.css';
import '../css/bootstrap-theme.css';
import '../css/bootstrap.css';
import '../css/bootstrap.min.css';
import DevRequest from './DevRequest.jsx';
class DevBodyMainNav extends React.Component {
   
   createTasks() {
     
   };
   render() {
      return (
          <div className="devbodymainnavStyle"> 
              <div className="page-title">
                  <h4>
                      <i className="glyphicon glyphicon-hand-left"></i><span>Home </span>- Dashboard
                  </h4>
              </div>
              <div className="heading-elements">
                  <div className="heading-btn-group">
                      <button type="button" className="heading-button" data-toggle="modal" data-target="#myModal">
                          <i className="glyphicon glyphicon-edit headingicon"></i><span>Write</span></button>
                      <button type="button" className="heading-button"><i className="glyphicon glyphicon-file headingicon"></i><span>Draft</span></button>
                      <button type="button" className="heading-button"><i className="glyphicon glyphicon-tag headingicon"></i><span>Sent</span></button>
                      <button type="button" className="heading-button"><i className="glyphicon glyphicon-trash headingicon"></i><span>Remove</span></button>
                  </div>
              </div>
          </div>
      );
   }
}

export default DevBodyMainNav;
