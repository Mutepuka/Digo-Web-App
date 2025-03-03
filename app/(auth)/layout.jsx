import { currentUser } from '@clerk/nextjs/server';
import Image from '@node_modules/next/image';
import { redirect } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./styles.css";

const PageLayout = async ({children}) => {
    const user = await currentUser();
    if(user) return redirect('/');
  return (
    <div className='container con-wrapper'>
      <div className="row con">
        <div className="col-md-4 d-flex flex-column branding">
          <div className="col-md-8 d-flex flex-row">
          <img
            src='assets/digo_estate.png'
            alt="Agent image"
            />
            <h1 className='home-logo'>igo Estate</h1>
          </div>
          <div className="col-md-8 ">
          <p>Effortless Sales, Exceptional Homes Real Estate Made Easy! 🏠✨</p>
          </div>
      </div>
      <div className="col-md-8 d-flex flex-column home-steps">
        <div className="col-md-4 home-bac-btn">
          <a href='/'><i className="bi bi-arrow-bar-left"></i>Home</a>
        </div>
        {children}
      </div>

      </div>
    </div>
  )
}

export default PageLayout