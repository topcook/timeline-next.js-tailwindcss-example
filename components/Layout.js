import Head from 'next/head';
import Nav from './Nav';
// import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Roadmap-Terrestrial Rock </title>
            </Head>
            <Nav />
            <div >
                <main >
                    {children}
                </main>
            </div>
            {/* <Footer /> */}
        </>
    )
}
export default Layout;