import React from 'react';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <a className= 'pic-1'
      href="https://github.com/Yoel211/Stock-Watchers-" target="_blank">
      <img src={require("../../Assets/images/hydra.png")} alt="Cinque Terre"></img>
      </a>

      <a className= 'pic-1'
      href="https://github.com/Diamante710/how_to_make_your_kids_hate_you" target="_blank">
      <img src={require("../../Assets/images/flying-dragon.png")} alt="Cinque Terre"></img>
      </a>

      <a className= 'pic-1'
      href="https://github.com/Yoel211/Challenge-1" target="_blank">
      <img src={require("../../Assets/images/dragon-head.png")} alt="Cinque Terre"></img>
      </a>

      <a className= 'pic-1'
       href="https://github.com/Yoel211/redesigned-octo-funicular" target="_blank">
      <img src={require("../../Assets/images/hydra.png")} alt="Cinque Terre"></img>
      </a>

      <a className= 'pic-1'
      href="https://github.com/Yoel211/BookFace" target="_blank">
      <img src={require("../../Assets/images/hydra.png")} alt="Cinque Terre"></img>
      </a>

      <a className= 'pic-1'
      href="https://github.com/Yoel211/yoels-employee-tracker" target="_blank">
      <img src={require("../../Assets/images/hydra.png")} alt="Cinque Terre"></img>
      </a>

    </div>
  );
}


