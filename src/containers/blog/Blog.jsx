import React from 'react';
import './blog.css';
import { Article } from '../../components';
import {blog01, blog02, blog03, blog04, blog05}  from './imports.js';

const blogs = [blog01, blog02, blog03, blog04, blog05];
const blog_date = "Sem 26, 2021";
const blog_title = "GPT-3 and Open AI is the future. Let us explore how it is?";


const Blog = () => {
    return (
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article imgUrl={blog01} date={blog_date} title={blog_title}/>
                </div>
                <div className="gpt3__blog-container_groupB">
                <Article imgUrl={blog02} date={blog_date} title={blog_title}/>
                <Article imgUrl={blog03} date={blog_date} title={blog_title}/>
                <Article imgUrl={blog04} date={blog_date} title={blog_title}/>
                <Article imgUrl={blog05} date={blog_date} title={blog_title}/>
                </div>
            </div>
        </div>
    )
}

export default Blog
