"use client";

import { client } from '@libs/sanity';
import Link from 'next/link';
import React, {useState,useEffect } from 'react';
import AgentCard from './AgentCard';

const Agents = () => {
    const [agents, setAgents] = useState([])

    useEffect(() => {

        const query = `*[_type == 'agent'][0...3]|
        order(_createdAt desc){
        _id,
        name,
        email,
        phone,
        tagename,
        description,
        "slug": slug.current,
        "profileImgUrl": image,
        facebook,
        twitter,
        linkedin
        }`;
        client.fetch(query).then((data)=>{
            setAgents(data)
        });
      
    }, [])
    
  return (
    <section className="section-agents section-t8">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="title-wrap d-flex justify-content-between">
                        <div className="title-box">
                            <h2 className="title-a">Best Agents</h2>
                        </div>
                        <div className="title-link">
                            <Link href="/agents">
                            All Agents
                            <span className="bi bi-chevron-right"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                {agents && agents.length > 0 && agents.map(data=>(
                    <div className="col-md-4" key={data._id}>
                        <AgentCard agent={data}/>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Agents