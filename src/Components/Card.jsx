import React from 'react';
//Destructuring the robots array as a prop
const Card = ({ id, name, email, username }) => {
  return (
    <div className="bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-5 tc">
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <div>
        <h2>{name}</h2>
        <h4>{username}</h4>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
