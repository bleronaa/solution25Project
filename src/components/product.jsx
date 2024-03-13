import React, {useState} from 'react'
import pink from './pinkandblue.jpeg'
import './product.css';
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { FaCircle } from "react-icons/fa";

  


  const Product = () => {
    const [count,setCount]=useState(1);

    const increaseCount=()=>{
      setCount(count+1);
    }
    const decreaseCount=()=>{
      if(count>1){
        setCount(count-1)
      }
    }
    

   return (
    <div>
      <div className="container">
        <div className="imgContainer">
          <img src={pink} className="pinkimg" alt="pink image" height="450px"/>
            <img src={pink} className='tinyimgs' alt="imgs" width="80px" height="80px"/>
            <img src={pink} className='tinyimgs' alt="imgs"  width="80px" height="80px"/>
            <img src={pink} className='tinyimgs' alt="imgs"  width="80px" height="80px"/>
            <img src={pink} className='tinyimgs' alt="imgs"  width="80px" height="80px"/>
        </div>
        <div className="textContainer">
          <p className='firstP'> Pink and blue color</p>
          <h1 className='h1text'>Lorem ipsum dolor sit,amet, <br></br> adipiscing</h1>
          <h1 className='h1text'>45.00$</h1>
          <FaStar style={{ color: 'yellow' }} />
          <FaStar style={{ color: 'yellow' }} />
          <FaStar style={{ color: 'yellow' }} />
          <FaStar style={{ color: 'yellow' }} />
          <CiStar />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br></br> Culpa dignissimos fugit qui delectus porro perspiciatis perferendis repellat,<br></br> consequatur sint, modi quae saepe esse eius labore assumenda <br></br>adipisci commodi ipsum enim.</p>
          <FaCircle className='circleIcon1'  />
          <FaCircle className='circleIcon2' />
          <FaCircle className='circleIcon3'  />
          <p>Quantity</p>
          
          <div className='counter'>
              <button onClick={decreaseCount } className='quantityButton'>-</button>
              <span className='buttonCounter'>{count}</span>
              <button onClick={increaseCount} className='quantityButton'>+</button>
              <button className='addButton'>Add to Card</button>
           </div>
        </div>
        
      </div>
      <h2 className='title'>Related Products</h2>
      <div className="reviewProducts">

      <div className="imgreview">
        <div className="imageContainer" >
          <img src={pink} alt="img review" className='relatedImg' height="350px" />
          <button className='viewButton' >View Button</button>
         </div>
        <h3 className='h3product'>Product</h3>
        <FaStar style={{ color: 'yellow' }} />
        <FaStar style={{ color: 'yellow' }} />
        <FaStar style={{ color: 'yellow' }} />
        <FaStar style={{ color: 'yellow' }} />
        <CiStar />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br />elit.Vestibulum quis rhoncus ex.</p>
        <h2>6000$</h2>
      </div>

      <div className="imgreview">
         <div className="imageContainer" >
        <img src={pink} alt="img review" className='relatedImg' height="350px" />
        <button className='viewButton' >View Button</button>
          </div>
        <h3 className='h3product'>Product</h3>
        <FaStar style={{ color: 'yellow' }} />
        <FaStar style={{ color: 'yellow' }} />
        <FaStar style={{ color: 'yellow' }} />
        <FaStar style={{ color: 'yellow' }} />
        <CiStar />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br />elit.Vestibulum quis rhoncus ex.</p>
        <h2>6000$</h2>
      </div>

      <div className="imgreview">
        <div className="imageContainer" >
        <img src={pink} alt="img review" className='relatedImg' height="350px" />
        <button className='viewButton'>View Button</button>
        </div>
        <h3 className='h3product'>Product</h3>
        <FaStar style={{ color: 'yellow' }} />
        <FaStar style={{ color: 'yellow' }} />
        <FaStar style={{ color: 'yellow' }} />
        <FaStar style={{ color: 'yellow' }} />
        <CiStar />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br />elit.Vestibulum quis rhoncus ex.</p>
        <h2>6000$</h2>
      </div>
      </div>
    </div>
  )
}

export default Product
