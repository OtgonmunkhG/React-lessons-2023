
import { Outlet } from "react-router-dom"
export default function About() {
    return (
        <div>
            about page
            <a href="/about/usukhuu">Usukhuu</a>
            <a href="/about/khangai">Khangai</a>
            <Outlet/>
        </div>
    )
}