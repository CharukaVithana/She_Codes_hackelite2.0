import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios.get('/api/notifications')
      .then(res => setNotifications(res.data))
      .catch(err => console.error(err));
  }, []);

  const markAsRead = (id: string) => {
    axios.post(`/api/notifications/${id}/read`)
      .then(() => {
        setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
      });
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <ul>
        {notifications.map(n => (
          <li key={n.id} className={`p-3 mb-2 rounded shadow ${n.read ? 'bg-gray-100' : 'bg-white'}`}>
            <div className="flex justify-between items-center">
              <span>{n.message}</span>
              {!n.read && <button className="text-blue-500" onClick={() => markAsRead(n.id)}>Mark as Read</button>}
            </div>
            <div className="text-xs text-gray-500">{new Date(n.createdAt).toLocaleString()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
