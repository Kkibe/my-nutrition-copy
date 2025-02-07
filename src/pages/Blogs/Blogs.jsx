import React from 'react'
import BlogItem from './BlogItem'

export default function Blogs() {
  return (
    <section className='blogs'>
        <h1 className="heading">Read Our Blogs</h1>
        <div className="container">
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
        </div>
    </section>
  )
}
