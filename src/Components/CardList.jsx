import React from 'react';
import Card from './Card';
//calling the robot props with destructuring method
const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, index) => {
        //Mapping the array to display all the names
        return (
          <Card
            key={index}
            id={robots[index].id}
            name={robots[index].name}
            email={robots[index].email}
            username={robots[index].username}
          />
        );
      })}
    </div>
  );
};

export default CardList;
