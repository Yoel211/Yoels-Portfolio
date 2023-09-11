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
        I am a Full Stack Web Developer with a background in the medical field. I have a passion for learning and problem solving. I am a team player and I am always looking for ways to improve my skills. I am a graduate of the University of Denver Coding Bootcamp. I am currently looking for a position as a Full Stack Web Developer.
        </p>

        <h2>Skills</h2>
        <p>
        HTML, CSS, JavaScript, jQuery, Bootstrap, React.js, Node.js, Express.js, SQL, MongoDB, Mongoose, Git, GitHub, Heroku, and Terminal.
        </p>

        <h2>Education</h2>
        <p>
        University of Denver Coding Bootcamp
        </p>
        <p>
            Metropolitain State University of Denver
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
