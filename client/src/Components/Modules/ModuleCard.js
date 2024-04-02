import React from 'react';
import './Modules.css';
function ModuleCard({ title, description, videoId }) {
  return (
    <div className="ModuleCard">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="video-container">
        {/* YouTube embed player */}
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default ModuleCard;
