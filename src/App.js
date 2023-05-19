import React, { useState } from 'react';
import NavTabs from './components/NavTabs';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './Assets/images/hydra.png';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About'); 
  
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };
  
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}



//  function App() {
  
//     return (
//       <div className="App">
//         <Header />
//         <pages />
//       </div>
      
//     );
  

//   // function one(){
//   //   alert("one clicked")
//   // }
//   // function two(){
//   //   alert("two clicked")
//   // }function three(){
//   //   alert("three clicked")
//   // }

//   // return (
//   //   <div className="App">
//   //     <header className="App-header">
//   //     <TestComponent onClick={one} text="peter parker"/>
//   //       <img src={logo} className="App-logo" alt="logo" />
//   //       <TestComponent onClick={two} text="Tony Stark"/>
//   //       <p>
//   //         Pizza with pineapple is a sin
//   //       </p>
//   //       <img src={require("./Assets/images/hydra.png")}></img>
//   //       <a
//   //         className="App-link"
//   //         href="https://reactjs.org"
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //       >
//   //         Learn React
//   //       </a>
//   //       <TestComponent onClick={three} text="Virgil Hawkins"/>
//   //     </header>
//   //   </div>
//   // );
// }}