import React from 'react';

const Announcement = ({ message, name, date }) => {
  return (
    <div>
      <h2>{message}</h2>
      <p>
        Announced by {name} on {date}
      </p>
    </div>
  );
};

export default Announcement;