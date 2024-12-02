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
            <body>{children}</body>
        </html>
    )

}

export default RootLayout;