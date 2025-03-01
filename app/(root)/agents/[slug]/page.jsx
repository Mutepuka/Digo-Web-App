"use client";

import LoadingSpinner from "@app/loading";
import { client, urlFor } from "@libs/sanity";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import "./styles.css";

const SingleAgent = () => {
  const [agent, setAgent] = useState(null);
  const [agentData, setAgentData] = useState([]);
  const [propertyCount, setPropertyCount] = useState(0);

  const path = usePathname();
  const slug = path.split("/").pop();

  const getSingleAgent = async () => {
    try {
      const query = `*[_type == "agent" && slug.current == "${slug}"][0]{
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
      const data = await client.fetch(query);
      setAgent(data);
    } catch (error) {
      console.log("Failed to get agent", error);
    }
  };

  /** get propeties that belongs to the agent */
  const getAgentProperties = async()=>{
    try {
      const query = `*[_type == "property" && agent->slug.current =="${slug}"]{
        _id,
        "slug": slug.current,
        "imageUrl": images[0].asset->url
      }`;
      const data = await client.fetch(query);
      setAgentData(data);
      setPropertyCount(data.length);
    } catch (error) {
      console.log("Failed to get agent properties", error); 
      
    }
  }

  useEffect(() => {
    getSingleAgent();
    getAgentProperties();
  }, []);

  if (!agent) {
    return <LoadingSpinner />;
  }
  
  console.log("agent", agentData);

  return (
    <main id="main">
      <section className="intro-single">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="title-single-box">
                <h1 className="title-single">{agent.name}</h1>
                <span className="title-color-a">Real Estate Agent</span>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <nav
                aria-label="breadcrumb"
                className="breadcrumb-box d-flex justify-content-lg-end"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <i className="bi bi-house-door-fill"></i>
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="/agents">Agents</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {agent.name}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="agent-single">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="agent-avatar-box">
                <img
                  src={urlFor(agent.profileImgUrl)}
                  alt="Agent image"
                  className="agent-avatar img-fluid"
                />
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="agent-info-box">
                <h3 className="title-d">{agent.name}</h3>
                <p className="content-d color-text-a">{agent.description}</p>
                <div className="info-agents color-a">
                  <p>
                    <strong>Phone:</strong> {agent.phone}
                  </p>
                  <p>
                    <strong>Email:</strong> {agent.email}
                  </p>
                </div>
              </div>
              <div className="socials-footer">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <Link href="/agents" className="link-one">
                      <i className="bi bi-facebook" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="/agents" className="link-one">
                      <i className="bi bi-twitter" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="/agents" className="link-one">
                      <i className="bi bi-linkedin" aria-hidden="true"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="agent-info-box">
              <h3 className="title-d">Extra Information: </h3>

              {agentData.length > 0 ? (
                <div className="row">
                  {agentData.map((property) => (
                    <div key={property._id} className="col-md-4 mb-4">
                      <a href={`/properties/${property.slug}`} className="text-decoration-none">
                        <img
                          src={property.imageUrl}
                          alt="Property Thumbnail"
                          className="img-fluid rounded"
                        />
                      </a>
                    </div>
                  ))}
                  <div className="col-md-12 text-center">
                    <h3 className="counter d-flex justify-content-center align-items-center"> 
                      <span className="me-2"><i class="bi bi-stopwatch"></i></span>
                      {propertyCount} Properties
                    </h3>
                  </div>
                </div>
              ) : (
                <div className="text-left">
                   <span className="text-muted">
                    <i className="bi bi-exclamation-circle me-2"></i> Nothing found
                  </span>
                  <div className="col-md-12 text-center">
                    <h3 className="counter d-flex justify-content-center align-items-center"> 
                      <span className="me-2"><i class="bi bi-stopwatch"></i></span>
                      {propertyCount} Properties
                    </h3>
                  </div>
                </div>
                
              )}



              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default SingleAgent;
