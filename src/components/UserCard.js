import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserCard.css';

const UserCard = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/user/${user.id}`)}>
      <div className="card-header">
        <div className="avatar">{user.name.charAt(0)}</div>
        <h3>{user.name}</h3>
        <p className="email">{user.email}</p>
      </div>
      <div className="card-body">
        <div className="info-row">
          <span className="label">Phone</span>
          <span className="value">{user.phone}</span>
        </div>
        <div className="info-row">
          <span className="label">Company</span>
          <span className="value">{user.company.name}</span>
        </div>
      </div>
      <button className="card-footer-btn">View Full Profile</button>
    </div>
  );
};

export default UserCard;