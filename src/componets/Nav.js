import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for
          //*  This is a ternary operator that is checking if the currentPage is equal to 'Home' and if it is, it will set the className to 'nav-link active' and if it is not, it will set the className to 'nav-link'

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          //  TODO: Add a comment explaining what this logic is doing
          

          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#profolio"
          onClick={() => handlePageChange('Profolio')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'Porfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          //  TODO: Add a comment explaining what this logic is doing

          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
