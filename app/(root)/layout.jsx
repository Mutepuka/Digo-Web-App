
import Nav from '@components/Nav';
import SearchFrom from '@components/SearchFrom';
import Footer from '@components/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import '@styles/globals.css';


const RootLayout= ({children})=>{
    return(
        <main id='main'>
            <SearchFrom/>
            <Nav/>
            {children}
            <Footer/>
        </main>
    )
                

}

export default RootLayout;