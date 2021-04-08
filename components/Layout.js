import Head from 'next/head';
import Nav from './Nav';
const Layout =({children})=>{
    return(
        <>
        <Head>
        <title>Boilerplate</title>
        </Head>
        <Nav/>
        <div >
            <main >
            {children}
            </main>
        </div>
        </>
    )
}
export default Layout;