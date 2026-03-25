import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Phone, Mail, Globe, Briefcase, MapPin } from 'lucide-react';
import './UserDetail.css';

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);

  if (!user) return <div className="loading">Loading Profile...</div>;

  return (
    <div className="detail-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <ArrowLeft size={18} /> Back to Directory
      </button>

      <div className="profile-sheet">
        <div className="profile-top">
          <div className="profile-avatar">{user.name.charAt(0)}</div>
          <div className="profile-title">
            <h2>{user.name}</h2>
            <p>@{user.username}</p>
          </div>
        </div>

        <div className="profile-grid">
          <div className="profile-item">
            <Mail className="icon" />
            <div><label>Email</label><p>{user.email}</p></div>
          </div>
          <div className="profile-item">
            <Phone className="icon" />
            <div><label>Phone</label><p>{user.phone}</p></div>
          </div>
          <div className="profile-item">
            <Globe className="icon" />
            <div><label>Website</label><p>{user.website}</p></div>
          </div>
          <div className="profile-item">
            <Briefcase className="icon" />
            <div><label>Company</label><p>{user.company.name}</p></div>
          </div>
          <div className="profile-item full-width">
            <MapPin className="icon" />
            <div>
              <label>Address</label>
              <p>{user.address.suite}, {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;