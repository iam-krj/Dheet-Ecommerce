import React from 'react';
import Card from '../components/Card';

const FrontPage = ({ arts }) => {
    return (
      <div className="landing">
        <div className="front">
          <div className="left">
            <div className="content">
              <h1>
                Discover, collect, and
                <br /> sell extraordinary
                <br /> NFTs
              </h1>
              <p>
                on the world's first &<br /> largest NFT marketplace
                        </p>
                        <button id="explore">Explore</button>
            </div>
          </div>

          <div className="right">
            <div className="card"></div>
          </div>
        </div>
        <div className="div">
          <h1>Exclusive OpenSea drops</h1>
        </div>
        <div className="cards">
          {arts.map((art) => (
            <Card art={art}/>
          ))}
        </div>

        <div className="footer">
          <h2>To be continued</h2>
        </div>
      </div>
    );
}

export default FrontPage;
