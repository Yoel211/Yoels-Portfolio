import React from 'react';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <p>
        Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
        Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
        dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
        sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc,
        sed pretium risus rutrum eget. Nam consequat, ligula in faucibus
        vestibulum, nisi justo laoreet risus, luctus luctus mi lacus sit amet
        libero. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Mauris pretium condimentum tellus eget
        lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Donec placerat accumsan mi, ut congue neque placerat eu. Donec nec ipsum
        in velit pellentesque vehicula sit amet at augue. Maecenas aliquam
        bibendum congue. Pellentesque semper, lectus non ullamcorper iaculis,
        est ligula suscipit velit, sed bibendum turpis dui in sapien.
      </p>
      <a href="https://github.com/Yoel211/Stock-Watchers-" target="_blank">
      <img src={require("../../Assets/images/hydra.png")} alt="Cinque Terre"></img>
      </a>

      <a href="https://github.com/Diamante710/how_to_make_your_kids_hate_you" target="_blank">
      <img src={require("../../Assets/images/flying-dragon.png")} alt="Cinque Terre"></img>
      </a>

      <a href="https://github.com/Yoel211/Challenge-1" target="_blank">
      <img src={require("../../Assets/images/dragon-head.png")} alt="Cinque Terre"></img>
      </a>

      <a href="https://github.com/Yoel211/redesigned-octo-funicular" target="_blank">
      <img src={require("../../Assets/images/hydra.png")} alt="Cinque Terre"></img>
      </a>

      <a href="https://github.com/Yoel211/BookFace" target="_blank">
      <img src={require("../../Assets/images/hydra.png")} alt="Cinque Terre"></img>
      </a>

      <a href="https://github.com/Yoel211/yoels-employee-tracker" target="_blank">
      <img src={require("../../Assets/images/hydra.png")} alt="Cinque Terre"></img>
      </a>

    </div>
  );
}


