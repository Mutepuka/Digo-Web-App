
import { Poppins } from 'next/font/google';
import Nav from '@components/Nav';
import SearchFrom from '@components/SearchFrom';
import Footer from '@components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@styles/globals.css';

const poppins = Poppins({
    subsets:['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100','200','300','400','500','600','700','800','900']
});

export const metadata={
    title: 'Digo',
    description: 'Real Estate Adversting Platforms',
    icons:{
        icon:'/assets/images/slide-1.jpg'
    }
}

const RootLayout= ({children})=>{
    return(
        <html lang='en'>
            <body className={poppins.className}>
                <div className='app'>
                    <SearchFrom/>
                    <Nav/>
                    {children}
                    <Footer/>
                </div>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
            </body>
        </html>
    )

}

export default RootLayout;