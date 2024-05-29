import React, { useEffect, useState } from 'react';
import { useParams ,useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Great from "../images/great.jpg";
import Star from "../images/star.jpg"
import Time from "../images/time.jpg";
import Fruit from "../images/f2.png";
import Basket from "../images/f1.png";
import Down from "../images/down.jpg"
import "../styles/dishdetailpage.css";
import Refri from "../images/refri.jpg";
const DishDetailPage = () => {
  const { id } = useParams();
  const [dish, setDish] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
const navigate=useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const descriptionFromQuery = queryParams.get('description');
  const ratingFromQuery = queryParams.get('rating');
  useEffect(() => {
    const fetchDish = async () => {
      try {
        const response = await axios.get(`https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/${id}`);
        if (response.data && response.data.name) {
          setDish(response.data);
        } else {
          setDish(null);
        }
      } catch (error) {
        console.error('Error fetching the dish details', error);
        setDish(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDish();
  }, [id]);

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '20%' }}>Loading...</div>;
  }

  if (!dish) {
    return <div style={{ textAlign: 'center', marginTop: '20%' }}>No data available for this dish.</div>;
  }

  return (
    <div>
      <div style={{margin:"12px",padding:"24px"}} onClick={()=>{navigate("/")}}><img src={Great}/></div>
  <div className="dish-detail-page" style={{ display: 'flex', flexDirection: 'column', marginLeft:"25%", minHeight: '100vh'}}>
      
      <div style={{display:"flex",flexDirection:"row",gap:"12px"}}>
      <div>
      <div style={{display:"flex",flexDirection:"row",marginBottom:"12px",gap:"12px",alignItems:"center"}}>
          <div style={{font: "normal normal 800 32px/36px Open Sans"}}>{dish.name}</div>
  
  <div style={{
  width:"50px",
  height:"20px",
   
    background: "#51C452 0% 0% no-repeat padding-box",
    borderRadius: "8px",
display:"flex",alignItems:"center",justifyContent:"center",gap:"2px"}}
 >
<div style={{
  font: "normal normal 600 12px/16px Open Sans",color: "#FFFFFF"
}}>{ratingFromQuery}</div>
<img src={Star}/>
  </div>
  
      </div>
      <div style={{color: "#707070"}}>
  {descriptionFromQuery}
</div>
<div style={{display:"flex",flexDirection:"row",gap:"4px",alignItems:"center",marginTop:"30px",marginBottom:"40px"}}>
  <div style={{background:`url(${Time}) no-repeat`,width:"15px",height:"15px",display:"flex",alignItems:"center",justifyContent:"center"}}></div>
<div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>{dish.timeToPrepare}</div>

</div>
<div className='border'></div>
      </div>
      <div style={{display:"flex",justifyContent:"flex-end"}}>

<div style={{display:"flex",flexDirection:"row",background:"#FFF9F2",height:"200px",width:"200px",borderRadius:"50%"}}>

<div style={{width:"100px",display:"flex",alignItems:"flex-end",height:"200px"}}><img src={Fruit}/></div>
<div style={{padding:"0"}}><img src={Basket}/></div>
</div>
      </div>
      </div>
<div style={{borderBottom:"0.5px solid #D6D6D6CE",width:"650px"}}>
<h2>Ingredients</h2>
<div style={{color:"#8A8A8A",fontSize:"12px",marginBottom:"12px"}}>For 2 people</div>
</div>
      
     <div style={{marginTop:"24px"}}>
   

      <div style={{display:"flex",alignItems:"center",flexDirection:"row",gap:"12px"}}>
<div style={{font: "normal normal bold 16px/22px Open Sans"}}>Vegetables (05)</div>
<div><img src={Down}/></div>

          </div>

          <div style={{width:"650px"}}>
        {dish.ingredients.vegetables.map((veg, index) => (
          <div key={index} style={{display:"flex",justifyContent:"space-between",marginTop:"12px",fontSize:"14px",color:"#1C1C1C"}}>
            <div>{veg.name}</div>
            <div >{veg.quantity}</div>
          </div>
        ))}
      </div>
     </div>
    
     <div style={{marginTop:"24px"}}>
   

   <div style={{display:"flex",alignItems:"center",flexDirection:"row",gap:"12px"}}>
<div style={{font: "normal normal bold 16px/22px Open Sans"}}>Spices (10)</div>
<div><img src={Down}/></div>

       </div>

       <div style={{width:"650px"}}>
     {dish.ingredients.spices.map((spice, index) => (
       <div key={index} style={{display:"flex",justifyContent:"space-between",marginTop:"12px",fontSize:"14px",color:"#1C1C1C"}}>
         <div>{spice.name}</div>
         <div >{spice.quantity}</div>
       </div>
     ))}
   </div>
  </div>
  <div style={{marginTop:"24px",width:"300px",marginBottom:"100px"}}>
  <h2>Appliances</h2>
  <div style={{display:"flex",justifyContent:"space-between",gap:"12px"}}>
        {dish.ingredients.appliances.map((appliance, index) => (
          <div key={index} style={{background:"#F5F5F5 0% 0% no-repeat padding-box",borderRadius:"12px",width:"72px",height:"95px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>

           


  <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}><img src={Refri}/></div>
  <div style={{
font: "normal normal normal 12px/14px Open Sans",

color: "#242424"

  }}>{appliance.name}</div>
  
  

          </div>
        ))}
      </div>
   </div>
     
     
     
     
    </div>
    </div>
    
  
  );
}

export default DishDetailPage;
