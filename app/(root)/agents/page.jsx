"use client";


import React,{useState, useEffect} from 'react'
import BreadCrumb from '@components/BreadCrumb'
import { client } from '@libs/sanity';
import AgentCard from '@components/AgentCard';

const AgentList = () => {

    const [agents, setAgents] = useState([])

    useEffect(() => {

        const query = `*[_type == 'agent'][0...8]|
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
    <main id="main">
        <BreadCrumb
        title='Verified Agents'
        subtitle='Agents List'
        page='Agent List'
        />

        <section className="agent-grid grid">
            <div className="container">
                <div className="row">
                    {agents && agents.length > 0 && agents.map(data=>(
                        <div className="col-md-4" key={data._id}>
                            <AgentCard agent={data}/>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    </main>
  )
}

export default AgentList