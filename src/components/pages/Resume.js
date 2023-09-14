import React from 'react';

function Resume() {
  const proficiencies = [
    'JavaScript',
    'React',
    'HTML',
    'CSS',
    'Node.js',
    'MongoDB',
  ];

  return (
    <div>
      <h2>Resume</h2>
      <p>Download my resume:</p>
      <a href="/Assets/_YRegalado- September(2) 2023.pdf" download>Download Resume</a>

      <h3>Proficiencies</h3>
      <ul>
        {proficiencies.map((proficiency, index) => (
          <li key={index}>{proficiency}</li>
        ))}
      </ul>
    </div>
  );
}

export default Resume;