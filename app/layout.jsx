import { Poppins } from 'next/font/google';
import {ClerkProvider,} from '@clerk/nextjs'
import { Toaster } from "sonner";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@styles/globals.css';

const poppins = Poppins({
    subsets:['latin'],
    variable: '--font-poppins',
    weight: ['100','200','300','400','500','600','700','800','900']
});

export const metadata={
    title: 'Digo',
    description: 'Real Estate Adversting Platforms',
    icons:{
        icon:'/assets/digo_estate.png'
    }
}

const RootLayout= ({children})=>{
    return(
        <ClerkProvider>
        <html lang='en'>
            <body className={poppins.variable}>
                <div className='app'>
                <Toaster position="top-right" />
                    {children}
                </div>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
            </body>
        </html>
        </ClerkProvider>
    )

}

export default RootLayout;