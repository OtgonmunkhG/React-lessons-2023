import {Link, useLocation} from 'react-router-dom'
export default function HomePage() {
    const location = useLocation();
    console.log(location);
    const state = location.state;
    console.log(state);
    return(
        <div>
            <h1>{state.message}</h1>
            <p>{state.timestamp}</p>
            <Link to={"/"}>Back</Link>
        </div>
    )
}