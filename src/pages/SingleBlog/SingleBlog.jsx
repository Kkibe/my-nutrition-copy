import React, { useEffect, useState } from 'react'
import Image from '../../assets/chicken.jpg';
import ThanksModal from '../../components/ThanksModal/ThanksModal';
import { getBlogPost } from '../../../firebase';

export default  function SingleBlog() {
    const [blog, setBlog] = useState(null);
    const readingTime = (articleText) => {
        const wordsArray = articleText.split(' ');
        // Count the number of words in the array
        const wordCount = wordsArray.length;
        // Calculate the estimated reading time
        const wordsPerMinute = 200;
        return Math.ceil(wordCount / wordsPerMinute);
      }

    useEffect(() => {
        getBlogPost(window.location.pathname.split('/blogs/')[1], setBlog);
    }, []);

  
  
  return(
    <div className="card blog">
        <div className="image">
            <img src={""/*blog && blog.imageUrl*/}  alt="" />
        </div>
        <div className="content">
            <div className="stars">
                <span>{blog && new Date().toDateString()}</span>
                <div className="duration">{blog && readingTime( "Lorem ipsum dolo sit amet"/*blog.description*/)} min read</div>
            </div>
            <h3>{"Blog Title Goes Here" /*blog && blog.title*/ }</h3>
            <p>{ "description goes here"/*blog && blog.description*/}</p>
        </div>
    </div>)
}
