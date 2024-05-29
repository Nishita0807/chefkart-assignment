import React from 'react';
import { Link } from 'react-router-dom';
import Veg from "../images/ratedot.jpg"
import Star from "../images/star.jpg";
import Fridge from "../images/fridge.jpg";
import EastIcon from '@mui/icons-material/East';
import Lunch from "../images/lunch.jpg";
const DishCard = ({ dish }) => {
  return (
    <div className="dish-card" style={{display:"flex",borderBottom:"2px solid grey",marginBottom:"12px",gap:"80px",marginLeft:"30%",width:"500px"}}>
      <div style={{marginBottom:"12px"}}>
<div style={{display:"flex",marginBottom:"12px",flexDirection:"row",alignItems:"center",gap:"50px"}}>
  <div style={{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px"}}>{dish.name}</div>
  <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}><img src={Veg} width="15px" height="15px"/></div>
  <div style={{
    width: "50px",
    height: "30px",
   
    background: "#51C452 0% 0% no-repeat padding-box",
    borderRadius: "2px",
display:"flex",alignItems:"center",justifyContent:"center",gap:"2px"}}
 >
<div style={{
  font: "normal normal 600 12px/14px Open Sans",color: "#FFFFFF"
}}>{dish.rating}</div>
<img src={Star} width="15px" height="15px"/>
  </div>
</div>
<div style={{display:"flex",flexDirection:"row",marginBottom:"12px",gap:"60px",alignItems:"center"}}>
  <div style={{display:"flex",flexDirection:"row",gap:"12px"}}>
    <div>
      <div><img src={Fridge} width="20px"/></div>
      <div style={{color: "#1C1C1C"}}>Refrigerator</div>
    </div>
    <div>
      <div><img src={Fridge} width="20px"/></div>
      <div style={{color: "#1C1C1C"}}>Refrigerator</div>
    </div>
  </div>
  <Link to={`/dish/${dish.id}?description=${encodeURIComponent(dish.description)}&rating=${encodeURIComponent(dish.rating)}`} style={{textDecoration:"none"}}>        
  <div>

    <div style={{font: "normal normal bold 16px/18px Open Sans",color:"black"}}>Ingredients</div>
    <div style={{display:"flex",flexDirection:"row",
      font: "normal normal 600 12px/12px Open Sans",
      letterSpacing: "0.1px",
      color: "#FF8800",
      opacity: 1,gap:"4px"
    }}>
      <div>View list</div>
      <div>{`>`}</div>
    </div>
  </div>
  </Link>
</div>
<div style={{color: "#707070"}}>
  {dish.description}
</div>
      </div>
      <div style={{borderRadius:"12px",
    width: "150px",
    height: "100px",
    background: `url(${dish.image}) center center / cover no-repeat`
}}>
  <div style={{position:"relative",marginTop:"85px",marginLeft:"45px",
width: "58px",
height: "30px",

background:" #FFFFFF 0% 0% no-repeat padding-box",
boxShadow: "0px 3px 4px #00000029",
border:" 0.5px solid #FF9A26",
borderRadius: "3px",
opacity: 1,
color:"orange",
display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}

>
    <div style={{marginLeft:"30px",fontSize:"8px"}} >+</div><div style={{font: "normal normal 600 11px/15px Open Sans"}}>
    Add
    </div>
  </div>
</div>
<div style={{position:"fixed",bottom:"12px",padding:"12px" ,background:" #1C1C1C 0% 0% no-repeat padding-box",
boxShadow:" 0px 3px 9px #00000017",
borderRadius: "7px",color:"white",display:"flex",justifyContent:"space-between"}}>
<div style={{display:"flex",flexDirection:"row",gap:"10px",width:"500px",alignItems:"center"}}>
  <div><img src={Lunch}/></div>
  <div>3 food items selected</div>
</div>
<div><EastIcon/></div>
</div>
     
    </div>
  );
}

export default DishCard;
