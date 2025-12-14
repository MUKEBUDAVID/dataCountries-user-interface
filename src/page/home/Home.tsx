import { HeadProvider, Title, Link, Meta} from "react-head";
import Header from "../../components/layout/Header/Header";
import Main from "./layout/Main";


function Home() {
 

  return (
    <>
     <HeadProvider>
    <div className="Home">
      <Title>DC api</Title>
      <Link rel="canonical" href="http://jeremygayed.com/" />
      <Link rel="icon" type="image/svg+xml" href="/react.svg" />
      <Meta name="example" content="whatever" />
    </div>
  </HeadProvider>

<>
<Header/>
  <Main/>
  
  </>

  

    
    </>
  )
}

export default Home