import {Link} from 'react-router-dom';

export default function Index() {
  
    return (
        <div>
            <h1>Day-44 Dynamic routing</h1>
            <div className='nav'>
            <Link to={'/accordion'}>Accordion Page</Link>
            <Link to={"/index"}>Index</Link>
            </div>
        </div>
    )
}