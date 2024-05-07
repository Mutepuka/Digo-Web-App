import '@styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Poppins } from 'next/font/google';
import Nav from '@components/Nav';

const poppins = Poppins({
    subsets:['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100','200','300','400','500','600','700','800','900']
});

export const metadata={
    title: 'Digo',
    description: 'Real Estate Adversting Platforms'
}

const RootLayout= ({children})=>{
    return(
        <html lang='en'>
            <body className={poppins.className}>
                <div className='main'>
                    <div className='gradient' />
                </div>
                <main className='app'>
                    <Nav/>
                    {children}
                </main>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
            </body>
        </html>
    )

}

export default RootLayout;