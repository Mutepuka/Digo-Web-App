"use client";

import LoadingSpinner from '@app/loading';
import { client, urlFor } from '@libs/sanity';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React,{useState, useEffect} from 'react'
import './styles.css';

const SingalAgent = () => {

  const [agent, setAgent] = useState(null);
  const path = usePathname();
  const slug = path.split('/').pop();

  const getSinglaAgent = async()=>{
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
      console.log('failed to get agent', error)
      
    }
  }

  useEffect(() => {
    getSinglaAgent();

  }, []);

  console.log('agent fetched data', agent)

  if(!agent){
    return(
      <LoadingSpinner/>
    )
  }
  
  return (
    <main id='main'>
      <section className='intro-single'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-lg-8'>
              <div className='title-single-box'>
                <h1 className='title-single'>{agent.name}</h1>
                <span className='title-color-a'>Real Estate Agent</span>
              </div>
            </div>
            <div className='col-md-12 col-lg-4'>
              <nav
              aria-label='breadcrumb'
              className='breadcrum-box d-flex justify-content-lg-end'
              >
                <ol className='breadcrumb'>
                  <li className='breadcrumb-item'>
                    <Link href="/">
                    <i className='bi bi-house-door-fill'></i>
                    </Link>
                  </li>
                  <li className='breadcrumb-item'>
                    <Link href='/agents'>Agents</Link>
                  </li>
                  <li className='breadcrumb-item active' aria-current="page">{agent.name}</li>
                </ol>

              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className='agent-single'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='row'>
                <div className='col-md-4'>
                  <div className='agent-avatar-box'>
                    <img
                    src={urlFor(agent.profileImgUrl)} 
                    alt='agent image'
                    className='agent-avatar img-fluid'
                   
                    />
                  </div>
                </div>

                <div className='col-md-5 section-md-t3'>
                  <div className='agent-info-box'>
                    <div className='agent-title'>
                      <div className='title-box-d'>
                        <h3 className='title-d'>{agent.name}</h3>
                      </div>
                    </div>

                    <div className="agent-content mb-3">
                      <p className="content-d color-text-a">
                        {agent.description}
                      </p>
                      <div className="info-agents color-a">
                        <p>
                          <strong>Phone: </strong>
                          <span className="color-text-a">{agent.phone}</span>
                        </p>
                        <p>
                          <strong>Email: </strong>
                          <span className="color-text-a">{agent.email}</span>
                        </p>
                      </div>
                    </div>
                    <div className="socails-footer">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <Link href="/agents" className='link-one'>
                          <i className="bi bi-facebook" aria-hidden="true"></i>
                          </Link>
                        </li>

                        <li className="list-inline-item">
                          <Link href="/agents" className='link-one'>
                          <i className="bi bi-twitter" aria-hidden="true"></i>
                          </Link>
                        </li>

                        <li className="list-inline-item">
                          <Link href="/agents" className='link-one'>
                          <i className="bi bi-linkedin" aria-hidden="true"></i>
                          </Link>
                        </li>


                      </ul>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  )
}

export default SingalAgent