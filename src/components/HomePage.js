import React, { useEffect, useState } from 'react';

import axios from 'axios';
import DishCard from './DishCard';
import PopularDishCard from './PopularDishCard';
import "../styles/homepage.css";
import Great from "../images/great.jpg";
import Cal from "../images/cal.jpg";
import Clock from "../images/clock.jpg"
import Down from "../images/down.jpg";
const HomePage = () => {
  const [dishes, setDishes] = useState([]);
  const [popularDishes, setPopularDishes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/');
        setDishes(response.data.dishes);
        setPopularDishes(response.data.popularDishes);
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="homepage">
      
     <div style={{borderBottom:"3px solid #F2F2F2",paddingBottom:"24px"}}>
     <div style={{display:"flex",flexDirection:"row",gap:"100px",padding:"12px",alignItems:"center",margin:"24px"}}>

<div style={{width: "5px",
height:" 11px",

background: `transparent url(${Great}) 0% 0% no-repeat padding-box`,
opacity: 1}}></div>              
<div style={{textDecoration:"bold",font: "normal normal 600 30px/36px Open Sans"}}>Select Dishes</div>
</div>
<div style={{position:"absolute",height:"60px",width:"100vw",background:"black",boxShadow: "0px 4px 4px #FFFFFF46"}}>
<div className="date-time" style={{position:"relative",left:"35%",margin:"24px",display:"flex",justifyContent:"center",gap:"20px"}}>
<div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"10px"
}}>
<div style={{
width: "16px",
height: "16px",

background: `transparent url(${Cal}) 0% 0% no-repeat padding-box`,
opacity: 1
}}></div>
<div style={{
font: "normal normal bold 12px/17px Open Sans",
letterSpacing: "0.12px",
paddingTop:"4px",
paddingRight:"25px",
borderRight: "0.5px solid #D6D6D6CE"
}}>
21 May 2021
</div>
</div>
<div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"10px"}}>
<div style={{
width: "16px",
height: "16px",

background: `transparent url(${Clock}) 0% 0% no-repeat padding-box`,
opacity: 1
}}></div>
<div style={{
font: "normal normal bold 12px/17px Open Sans",
letterSpacing: "0.12px",
paddingTop:"4px"
}}>
10:30 Pm-12:30 Pm
</div>
</div>



</div>
</div>

<div className='box-category'>
<div>Italian</div>
<div>Indian</div>
<div>Indian</div>
<div>Indian</div>
<div>Indian</div>
<div>Indian</div>
<div>Indian</div>
<div>Indian</div>
<div>Indian</div>
<div>Indian</div>
<div>Indian</div>
<div>Indian</div>

</div>
<div className="popular-dishes">
<div style={{
font: "normal normal bold 22px/20px Open Sans",
letterSpacing: "0.14px",
color: "#1C1C1C",
opacity: 1,marginBottom:"12px"
}}>Popular Dishes</div>
<div className="popular-dishes-1" style={{display:"flex",gap:"24px",marginLeft:"35%"}}>


{popularDishes.map(dish => (
<div style={{width:"57px",height:"57px",borderRadius:"50%",border:"2px solid orange",padding:"2px"}}>
  <PopularDishCard key={dish.id} dish={dish} />
</div>
))}
</div>
</div>
     </div>
      <div style={{margin:"24px"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div style={{display:"flex",alignItems:"center",flexDirection:"row",gap:"4px"}}>
<div style={{font: "normal normal bold 22px/20px Open Sans"}}>Recommended</div>
<div><img src={Down}/></div>

          </div>
          <div style={{width: "90px",
height: "40px",
background: "#1C1C1C 0% 0% no-repeat padding-box",
boxShadow:" 0px 3px 4px #00000029",
borderRadius:"6px",
font: "normal normal bold 16px/16px Open Sans",
opacity: 1,color:"white",display:"flex",alignItems:"center",justifyContent:"center"}}>Menu</div>
        </div>
      <div className="dishes" style={{height:"180px",overflowY:"scroll",marginTop:"12px"}}>
        {dishes.map(dish => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
      </div>
      
      
    </div>
  );
}

export default HomePage;
