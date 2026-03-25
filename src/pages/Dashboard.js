import React, { useState, useEffect } from 'react';
import SearchSortBar from '../components/SearchSortBar';
import UserCard from '../components/UserCard';
import './Dashboard.css';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const filteredAndSortedUsers = users
    .filter(u => 
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      u.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      let aVal = sortConfig.key === 'company' ? a.company.name : a[sortConfig.key];
      let bVal = sortConfig.key === 'company' ? b.company.name : b[sortConfig.key];
      
      if (sortConfig.direction === 'asc') return aVal.localeCompare(bVal);
      return bVal.localeCompare(aVal);
    });

  if (loading) return <div className="loading">Fetching Users...</div>;

  return (
    <div className="container">
      <header className="page-header">
        <h1>User Directory</h1>
        <p>Manage and view your team members</p>
      </header>
      
      <SearchSortBar 
        onSearch={setSearchTerm} 
        onSort={handleSort} 
        sortConfig={sortConfig} 
      />

      <div className="grid">
        {filteredAndSortedUsers.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;