"use client";
import React from 'react';
import {urlFor } from '@libs/sanity';
import '@styles/agents.css';
import Link from 'next/link';

const AgentCard = ({agent}) => {
  return (
    <div className='card-box-d'>
        <div className="card-img-d">
        <img src={urlFor(agent.profileImgUrl)} className='img-fluid' alt='agent image'/>
        </div>
        <div className="card-overlay card-overlay-hover">
            <div className="card-header-d">
                <div className="card-title-d align-self-center">
                    <h3 className="title-d">
                        <Link href='/agents' className='link-two'>{agent.name}</Link>
                    </h3>
                </div>
            </div>
            <div className="card-body-d">
                <p className="content-d text-color-a">{agent.description.length > 100
    ? `${agent.description.substring(0, 100)}...`
    : agent.description}</p>
                <div className="info-agents color-a">
                    <p>
                        <strong>Phone: </strong>{agent.phone}
                    </p>
                    <p>
                        <strong>Email: </strong>{agent.email}
                    </p>
                </div>
            </div>
            <div className="card-footer-d">
                <div className="socials-footer d-flex justify-content-center">
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a href={agent.facebook} className="link-one">
                            <i className="bi bi-facebook" aria-hidden="true"></i>
                            </a>
                            <a href={agent.twitter} className="link-one">
                            <i className="bi bi-twitter" aria-hidden="true"></i>
                            </a>
                            <a href={agent.linkedin} className="link-one">
                            <i className="bi bi-linkedin" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AgentCard