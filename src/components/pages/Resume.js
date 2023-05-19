import React from 'react';

function Resume() {
  const proficiencies = [
    'JavaScript',
    'React',
    'HTML',
    'CSS',
    'Node.js',
    'MongoDB',
    // Add more proficiencies as needed
  ];

  return (
    <div>
      <h2>Resume</h2>
      <p>Download my resume:</p>
      <a href="/path/to/resume.pdf" download>Download Resume</a>

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



// import React from 'react';

// export default function Resume() {
//   return (
//     <div>
//       <h1>Resume Page</h1>
//       <p>
//       This is my resume! I hope your impressed with what I have so far!
//       </p>
//     </div>
//   );
// }