
import Nav from '@components/Nav';
import SearchFrom from '@components/SearchFrom';
import Footer from '@components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@styles/globals.css';


const RootLayout= ({children})=>{
    return(
        <main id='main'>
        <SearchFrom/>
        <Nav/>
        {children}
        <Footer/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        </main>
    )
                

}

export default RootLayout;