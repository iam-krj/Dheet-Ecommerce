import React from 'react';

const Card = ({art}) => {
    return (
      <div className="card-component">
        <div className="art-image">
          <img src={art.Image} alt="" />
        </div>
        <h5>{art.Owner}</h5>
      </div>
    );
}

export default Card;
