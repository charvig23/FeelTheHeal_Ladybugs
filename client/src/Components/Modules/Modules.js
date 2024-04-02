import React from 'react';
import ModuleCard from './ModuleCard.js'; 
import './Modules.css';

function Modules() {
  // Sample data for modules with YouTube video IDs
  const modulesData = [
    {
      id: 1,
      title: 'Managing Stress and Anxiety',
      description: 'Learn techniques to manage stress and anxiety in your daily life.',
      videoId: 'ABC123', // YouTube video ID for the first module
    },
    {
      id: 2,
      title: 'Improving Sleep Quality',
      description: 'Discover tips for getting better sleep and improving your sleep quality.',
      videoId: 'DEF456', // YouTube video ID for the second module
    },
    {
        id: 3,
        title: 'Building Personal Resilience: Managing Anxiety and Mental Health',
        description: 'Become your most resilient self with Building Personal Resilience.',
        videoId: 'IoAr2nJ-I1Q?si=cNqbvL3BloRkmd4o', // YouTube video ID for the second module
      },
      {
        id: 4,
        title: 'Mental Health Wellness Tips',
        description: 'Ways to achieve better mental health and balance in your life',
        videoId: 'NQcYZplTXnQ?si=AVDooczMVnIHWbeY', // YouTube video ID for the second module
      },
      {
        id: 2,
        title: 'Improving Sleep Quality',
        description: 'Discover tips for getting better sleep and improving your sleep quality.',
        videoId: 'DEF456', // YouTube video ID for the second module
      },
      {
        id: 2,
        title: 'Improving Sleep Quality',
        description: 'Discover tips for getting better sleep and improving your sleep quality.',
        videoId: 'DEF456', // YouTube video ID for the second module
      },
      {
        id: 2,
        title: 'Improving Sleep Quality',
        description: 'Discover tips for getting better sleep and improving your sleep quality.',
        videoId: 'DEF456', // YouTube video ID for the second module
      },
    // Add more module objects as needed
  ];

  return (
    <div className="Modules">
      <h1> FEATURED MODULES</h1>
      <div className="Modules-container">
        
        {modulesData.map(module => (
          <ModuleCard
            key={module.id}
            title={module.title}
            description={module.description}
            videoId={module.videoId}
          />
        ))}
      </div>
    </div>
  );
}

export default Modules;
