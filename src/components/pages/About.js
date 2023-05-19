// import React from 'react';

// export default function About() {
//   return (
//     <div>
//       <h1>About Me</h1>
//       <p>
//       This is my first attempt in making my Portfolio!
//       </p>
//     </div>
//   );
// }

import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow, FaTwitter } from 'react-icons/fa';

function About() {
  const githubUrl = 'https://github.com/your-github-profile';
  const linkedinUrl = 'https://linkedin.com/in/your-linkedin-profile';
  const thirdPlatformUrl = 'https://third-platform.com/your-profile';
  const twitterUrl = 'https://twitter.com/your-twitter-profile';

  return (
    <div>
        <h1>About Me</h1>
        <p> 
        I am a Full Stack Web Developer with a background in the medical field. I have a passion for learning and problem solving. I am a team player and I am always looking for ways to improve my skills. I am a graduate of the University of Central Florida Coding Bootcamp. I am currently looking for a position as a Full Stack Web Developer.
        </p>
      <footer>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href={thirdPlatformUrl} target="_blank" rel="noopener noreferrer">
          <FaStackOverflow />
        </a>
        <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </footer>
    </div>
  );
}

export default About;
