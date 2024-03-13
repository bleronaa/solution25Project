import React,{useState} from 'react'
import image from './girl.jpeg'
import pink from './pinkandblue.jpeg'
import red from './redandorange.jpg'
import green from './greenpurple.avif'
import black from './redandblack.jpg'
import blue from './pinkblue.webp'
import './home.css';
import { SlBasketLoaded } from "react-icons/sl";
import { FaBoxArchive } from "react-icons/fa6";
import { HiSave } from "react-icons/hi";
import { IoCubeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

const Home = () => {
 

  const handleClick = () => {
    console.log("Button Clicked")
  };

  return (
  <div>
        <div className="banner">
            <div className="card">
                <div className="cardImage">
                  <img src={image} className='card-img' alt="girl programming"/>
                </div>
                <div className="cardText">
                  <h3>solution25 Academy</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. At ipsa provident quas <br></br>nostrum et itaque, repellat molestiae inventore magni assumenda<br></br> dignissimos quaerat enim dolor unde consectetur atque autem pariatur quae.
                  </p>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br></br> when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br></br>It has survived not only five centuries, but also the leap into electronic typesetting,<br></br> remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset<br></br> sheets containing Lorem Ipsum passages, and more recently with<br></br> desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                  <p>
                  It is a long established fact that a reader will be distracted by the readable content of a page when<br></br> looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution<br></br> of letters, as opposed to using 'Content here, content here', making it look like readable English.<br></br> Many desktop publishing packages and web page editors now use Lorem Ipsum <br></br>as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.<br></br> Various versions have evolved over the years sometimes by accident, sometimes on purpose <br></br>(injected humour and the like).
                  </p>
                </div>
            </div>
            {/* solution25 academy */}
            <div className="title">
              <h2 className='headerTitle'>
                This is a sign for the academy
              </h2>
              <div className="designs">
                <div className="design">
                  <img src={pink} alt="pink and blue"/>
                  <h4>Pink and blue color</h4>
                  <button onClick={handleClick} className="addbutton" >Zum Produkt</button>
                  <SlBasketLoaded />
                </div>
                <div className="design">
                <img src={red} alt="red and orange" />
                  <h4>Red and orange color</h4>
                  <button onClick={handleClick} className="addbutton">Zum Produkt</button>
                  <SlBasketLoaded />
                </div>
                <div className="design">
                <img src={green} alt="black and green"/>
                  <h4>Black and green color</h4>
                  <button onClick={handleClick} className="addbutton">Zum Produkt</button>
                  <SlBasketLoaded />
                </div>
                <div className="design">
                <img src={black} alt="black and red"/>
                  <h4>Black and red color</h4>
                  <button onClick={handleClick} className="addbutton">Zum Produkt</button>
                  <SlBasketLoaded />
                </div>
                <div className="design">
                <img src={blue} alt="Blue and Pink" />
                  <h4>Blue and pink color</h4>
                  <button onClick={handleClick} className="addbutton">Zum Produkt</button>
                  <SlBasketLoaded />
                </div>
              </div>
            </div>

      {/* Why our products */}
            <div className="products">
              <div className="question">
                <h1>Why Our Products?</h1>
              </div>
           <div className="icons">

              <div className="iconTextContainer">
                <div className="icon">
                  <div className="i"><FaBoxArchive /></div>
                </div>
                <div className="textIcon">
                  <p>Lorem ipsum dolor sit amet,<br></br> consectetur adipisicing elit.<br></br> Porro cumque culpa nisi maxime?</p>
                </div>
              </div>

              <div className="iconTextContainer">
                <div className="icon">
                  <div className="i"><HiSave /></div>
                </div>
                <div className="textIcon">
                  <p>Lorem ipsum dolor sit amet,<br></br> consectetur adipisicing elit.<br></br> Porro cumque culpa nisi maxime?</p>
                </div>
              </div>

              <div className="iconTextContainer">
                <div className="icon">
                  <div className="i"><IoCubeOutline /></div>
                </div>
                <div className="textIcon">
                  <p>Lorem ipsum dolor sit amet,<br></br> consectetur adipisicing elit. <br></br>Porro cumque culpa nisi maxime?</p>
                </div>
              </div>
            </div>
            </div>

        {/* Blog */}

        <div className="blogpart">
          <h1>Blog</h1>
          <div className="items">
            <div className="item">
          <img src={pink} alt="pink and blue"/>
            <h4>5 tips how to make User <br></br> Flow in a short time </h4>
            <p>Et vel ornare fucse bibendum cras et <br></br>odio crac.Nunc nullam ultricies</p>
            <div className="author">
            <div className="user">
              <CiUser />
              <h5>John Doe</h5>
            </div>
            </div>
          </div>
          <div className="item">
          <img src={pink} alt="pink and blue"/>
            <h4>5 tips how to make User <br></br> Flow in a short time </h4>
            <p>Et vel ornare fucse bibendum cras et <br></br>odio crac.Nunc nullam ultricies</p>
            <div className="author">
            <div className="user">
              <CiUser />
              <h5>John Doe</h5>
            </div>
            </div>
          </div>
          <div className="item">
          <img src={pink} alt="pink and blue"/>
            <h4>5 tips how to make User <br></br> Flow in a short time </h4>
            <p>Et vel ornare fucse bibendum cras et <br></br>odio crac.Nunc nullam ultricies</p>
            <div className="author">
            <div className="user">
              <CiUser />
              <h5>John Doe</h5>
            </div>
            </div>
          </div>
          <div className="item">
          <img src={pink} alt="pink and blue"/>
            <h4>5 tips how to make User <br></br> Flow in a short time </h4>
            <p>Et vel ornare fucse bibendum cras et <br></br>odio crac.Nunc nullam ultricies</p>
            <div className="author">
            <div className="user">
              <CiUser />
              <h5>John Doe</h5>
            </div>
            </div>
          </div>
          </div>
        </div>

        <div className="content">
            <h2 >solution25 academy</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, temporibus. Aliquam ullam ab sequi aut quidem corrupti repudiandae magnam,<br></br> quo doloribus doloremque alias quisquam odit in libero. Animi, quibusdam in.</p>
            <div className="imgs">
            <img src={green} alt="black and green"/> 
            <img src={black} alt="black and green"/> 
            </div>
        </div>
       

       {/* Footer */}
    <div className="footer">
       <div className="socials">
                <h1>solution25 Academy</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Dicta recusandae vero nihil explicabo atque aliquam, ab animi eius<br></br> aspernatur eligendi tenetur architecto error inventore assumenda tempore<br></br> illum quo nobis. Dolore.</p>
               <div className="socialMedia">
                <div className="social">
                <CiFacebook className='socialIcon' />
                <CiTwitter className='socialIcon'/>
                <CiLinkedin className='socialIcon'/>
                <CiYoutube className='socialIcon'/>
                <FaPhoneAlt className='socialIcon'/>
                </div>
                </div>
              </div>
           <div className="columns">
              <div className="headerColumn">
                <div className="position">
                  <div className="header"><h3>Products</h3></div>
                  </div>
                <div className="productName">
                  <p>Product 1</p>
                  <p>Product 2</p>
                  <p>Product 3</p>
                  <p>Product 4</p>
                </div>
              </div>
              <div className="headerColumn">
                <div className="position">
                  <div className="header"><h3>Services</h3></div>
                  </div>
                <div className="productName">
                  <p>Service 1</p>
                  <p>Service 2</p>
                  <p>Service 3</p>
                  <p>Service 4</p>
                </div>
              </div>
              <div className="headerColumn">
                <div className="position">
                  <div className="header"><h3>Resources</h3></div>
                  </div>
                <div className="productName">
                  <p>News</p>
                  <p>Blog</p>
                  <p>Videos</p>
                  <p>FAQs</p>
                </div>
              </div>
            </div>
       </div>
        </div>
</div>
  )
}

export default Home
