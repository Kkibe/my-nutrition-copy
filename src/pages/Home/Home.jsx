import React, { useEffect, useState } from 'react'
import './Home.css'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Dishes from '../../components/Dishes/Dishes'
import { getBlogs, getProducts } from '../../../firebase'
import BlogItem from '../Blogs/BlogItem';
import { categories } from '../../data'
import { NavLink } from 'react-router-dom'
import Flyer from '../../components/Flyer/Flyer'

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [dishes, setDishes] = useState([]);
  const [blogs, setBlogs] = useState([]);
  useEffect(() =>{
    getBlogs(3, setBlogs);
    getProducts(4, setDishes);
  }, []);

  
  const handleClick = (direction) => {
      if(direction === "left") {
          setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
      } else {
          setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
      }
  }

  function truncateTitle(input) {
    if (input.length > 42) {
       return input.substring(0, 42) + '...';
    }
    return input;
 };

function truncateDescription(myInput) {
    if (myInput.length > 78) {
       return myInput.substring(0, 78) + '...';
    }
    return myInput;
 };
  return (
    <div>Content was commented
    {/*
    <section className='home'>
      <Flyer />
    <div className="slide container" key={dishes[0].id} data={dishes[0]}>
      <div className="image">
        <img src={dishes[0].imageUrl} alt="" />
      </div>
      <div className='slide-container'>
        <span>KSH {dishes[0].price}</span>
        <hr />
        <h2 className='sub-heading'>{dishes[0].name}</h2>
        <p>{dishes[0].description}</p>
        <a href={`/shop/${dishes[0].id}`} className='btn'>Shop Now</a>
      </div>
    </div>
    <div className="container">
        {
          categories && categories.map((category) => {
            return(
              <NavLink to={category.link} key={1}>
              <div className="card" key={category.id}>
                <div className="image">
                  <img src={category.image} alt="" />
                </div>
                <div className="content">
                  <h3 >{category.title}</h3>
                </div>
              </div>
              </NavLink>
            )
          })
        }
      </div>
      {
        dishes.length > 0 && <Dishes data={dishes}/>
      }
      {
        !dishes.length > 0 && <div><h1 className='heading' >Oops!</h1><p>
        No Internet connection! Connect to Internet and try again
        </p>
        <a className='btn' onClick={() => {
        window.location.reload();
      }}>Reload</a>
        </div>
      }
      <h3 className="sub-heading">Explore Our Blog</h3>
      <h1 className="heading">Trending Posts</h1>
      <div className="container">
          {
            blogs.length > 0 && blogs.map((blog) => {
              return <BlogItem key={blog.id} data={blog}/>
            })
          }
          {
            !blogs.length > 0 && <h2 className='sub-heading'>Connect to Internet and try again!</h2>
          }
      </div>
    </section>*/}</div>
  )
}
