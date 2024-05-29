import React from 'react';

const PopularDishCard = ({ dish }) => {
  return (
    <div className="popular-dish-card" style={{backgroundImage:`url(${dish.image})`, borderRadius:"50%", width:"57px", height:"57px",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div style={{color:"#FFFFFF",textAlign:"center",font:"normal normal 600 10px/14px Open Sans"}}>{dish.name}</div>
    </div>
  );
}

export default PopularDishCard;
