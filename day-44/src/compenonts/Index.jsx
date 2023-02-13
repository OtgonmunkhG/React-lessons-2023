import {Link} from 'react-router-dom';

export default function Index() {

    const aboutPageData = {
        from: 'Index',
        message: "Welcome to about page",
        timestamp: Date.now()

    }
    const HomePageData = {
        from: 'Index',
        message: "Welcome to Home page",
        timestamp: Date.now()

    }
  
    return (
        <div>
            <h1>Day-44 Dynamic routing</h1>
            <div className='nav'>
            <Link to={'/about'} state={aboutPageData}>About Page</Link>
            <Link to={'/Home'} state={HomePageData}>Home Page</Link>
            <Link to={'/accordion'}>Accordion Page</Link>
            <Link to={"/index"}>Index</Link>
            <Link to={"/movies"}>Movies page</Link>
            <Link to={"/gallery"}>Image gallery  page</Link>
            <Link to={"/toast"}>Toastiry page</Link>
            </div>
        </div>
    )
}