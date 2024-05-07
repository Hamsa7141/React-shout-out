import React, { useState } from 'react';
import AnnouncementForm from './AnnouncementForm';
import Announcement from './Announcement';

const App = () => {
  const [announcements, setAnnouncements] = useState([]);

  const handleSubmit = (announcement) => {
    setAnnouncements([announcement, ...announcements]);
  };

  return (
    <div>
      {announcements.length > 0 && (
        <Announcement
          message={announcements[0].message}
          name={announcements[0].name}
          date={announcements[0].date}
        />
      )}
      <AnnouncementForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App; 