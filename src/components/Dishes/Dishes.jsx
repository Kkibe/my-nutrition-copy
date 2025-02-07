import React, { useEffect, useState } from 'react';
import './Dishes.css';
import Image1 from '../../assets/pizza.jpg';
import Image2 from '../../assets/chickenPiece.jpg';
import Image3 from '../../assets/dish.jpg';
import { FaEye, FaHeart, FaShareAlt, FaShoppingBasket, FaStar, FaStarHalf } from 'react-icons/fa';
import ShareModal from '../ShareModal/ShareModal';

export default function Dishes({data}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    console.log(data);
  }, []);
  const toggleSingle = () => {
    document.querySelector('.single').classList.toggle('active');
  }

  const returnRatings = (item)=> {
    let arrays = [];
      for(let i = 0; i < item; i++) {
        arrays.push(<FaStar className='star' key={i}/>);
      }
      return arrays;
  }
  const Dish = ({item}) => {
    return (
    <div className="dish">
      {
        visible && <ShareModal visible={visible} setVisible={setVisible}/>
      }
      <a className="icon heart" onClick={() => setVisible(true)}><FaShareAlt /></a>
      <a className="icon eye" onClick={toggleSingle}><FaEye /></a> 
      <img src={""/*item.imageUrl*/} alt="" />
      <h3>{item.name}</h3>
      <div className="stars">
          {
            item.ratings && returnRatings(item.ratings)
          }
      </div>
      <span>KSH {item.price}</span>
      <a className='btn'>Add Cart</a>
    </div>
    )
  }
  return (
    <section className='dishes' id='dishes'>
        <h3 className="sub-heading">Explore Our Store</h3>
        <h1>popular products</h1>

        <div className="container">
          {
            data && data.map(item => {
              return <Dish item={item} key={item.id} />
            })
          }
        </div>
    </section>
  )
}
