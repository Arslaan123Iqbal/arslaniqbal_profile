import Navbar from "../components/Navabr/Navbar";
import Wrapper from "../components/atomic/Wrapper/Wrapper";
import "../styles/globals.css";
import { Russo_One } from 'next/font/google'
const inter = Russo_One({weight:'400', subsets: ['latin'] })
function MyApp({ Component, pageProps }) {
  return  <div className={inter.className}> 
  <Wrapper>
  <Navbar/>
  </Wrapper>
   <Component {...pageProps} /> </div>;
}

export default MyApp;
