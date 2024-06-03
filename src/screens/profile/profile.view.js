import React from "react";
import { useLocation,useParams } from "react-router-dom";
import { GetProfileDetails } from "../../controller/profile.controller";
import { useState,useEffect } from "react";
import "./profile.view.css";
function Profile(){
    
    const {email} = useParams();
    const[user,setUser] = useState(null);

    useEffect(() => {
        GetProfileDetails(email).then((response) => {
            setUser(response.data);
        });
        
        
    },[]);
    return(
        <div className="profile-container">
        <h1 className="profile-title">Profile</h1>
        <h2 className="welcome-message">Welcome {email}</h2>
        {user ? (
          <div className="user-details">
            <label className="detail-label">Name :</label>
            <span className="detail">{user.name}</span>
            <br />
            <label className="detail-label">Email :</label>
            <span className="detail">{user.email}</span>
            <br />
            <label className="detail-label">Faculty :</label>
            <span className="detail">{user.faculty}</span>
            <br />
            <label className="detail-label">Department :</label>
            <span className="detail">{user.department}</span>
            <br />
            <label className="detail-label">Year :</label>
            <span className="detail">{user.contact_no}</span>
            <br />
            <label className="detail-label">Subjects Needs to learn :</label>
            <ul className="subject-list">
              {user.subjects_needs_tutor.map((subject, index) => (
                <li key={index} className="subject-item">{subject}</li>
              ))}
            </ul>
            <br />
            <label className="detail-label">Subjects knows :</label>
            <table className="subject-table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {user.subjects_student_knows.map((subject, index) => (
                  <tr key={index}>
                    <td>{subject.subject}</td>
                    <td>{subject.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    )
}

export default Profile;