import React from 'react';
import Card from '../components/Card';
import CategoryCard from '../components/CategoryCard';

const Category = [
  {
    Image: "https://opensea.io/static/images/categories/art.png",
    Category: "Art",
  },
  {
    Image: "https://opensea.io/static/images/categories/sports.png",
    Category: "Sports",
  },
  {
    Image: "https://opensea.io/static/images/categories/collectibles.png",
    Category: "Collectible",
  },
  {
    Image: "https://opensea.io/static/images/categories/trading-cards.png",
    Category: "Trading Cards",
  },
];

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
          {arts.slice(0, 4).map((art) => (
            <Card art={art} />
          ))}
        </div>

        <div className="div2">
          <h1>Browse by category</h1>
        </div>

        <div className="category">
          {Category.map((art) => (
            <CategoryCard art={art} />
          ))}
        </div>

        <div className="footer">
          <h2>To be continued</h2>
        </div>
      </div>
    );
}

export default FrontPage;
