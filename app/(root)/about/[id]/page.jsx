"use client";


import React,{useState, useEffect} from 'react';
import BreadCrumb from '@components/BreadCrumb';
import { usePathname } from '@node_modules/next/navigation';
import { client, urlFor } from '@libs/sanity';
import LoadingSpinner from '@app/loading';
import { format } from 'date-fns';
import Link from '@node_modules/next/link';

const BlogPost = () => {

    const [blog, setBlog] = useState(null);
    const path = usePathname();
    const blogId = path.split('/').pop();
    

    //function to get single blog post
    const getBlogPost = async()=>{
        try {
            const query = `*[_type == "about" && _id =="${blogId}"][0]{
            _id,
            image,
            name,
            fheading,
            sheading,
            theading,
            fparagraph,
            sparagraph,
            tparagraph,
            _createdAt
            }`;
            const data = await client.fetch(query);
            setBlog(data);
            
        } catch (error) {
            console.log('failed to get agent', error)
            
        }
    }
    useEffect(() => {
        getBlogPost();
    }, []);

    if(!blog){
        return(
          <LoadingSpinner/>
        )
      }
    console.log('this is the blog',blog)
    const formattedDate = format(new Date(blog._createdAt), 'PPpp');

  return (
    <main id="main">
        <BreadCrumb
        title={blog.name}
        subtitle=""
        page="Blog Post"
        />
        <section className="section-about blog-section">
            <div className="container">
                <div className="row">
                    <div class="col-12 mb-4 mt-4">
                        <img
                        src={urlFor(blog.image).url()}
                        alt='Blog Image'
                        className='img-fluid'
                        
                        />
                    </div>

                    <div className="col-12">
                        <h3 className="title-d">
                            {blog.fheading}
                            <span className="color-d"> {blog.sheading}</span>
                            </h3>
                            <p class="text-muted">Published on {formattedDate}</p>

                            <div className="blog-post">
                                <p className="color-text-a">
                                    {blog.fparagraph}
                                </p>
                                <br/>
                                <p className="color-text-a">
                                    {blog.sparagraph}
                                </p>
                                <br/>
                                <p className="color-text-a">
                                    {blog.tparagraph}
                                </p>
                            </div>
                    </div>
                    <div className="col-md-12">
                        <Link href="#" className="btn btn-a">Sign Up</Link>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default BlogPost