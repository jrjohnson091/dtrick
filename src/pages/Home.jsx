import orthLogo from '../assets/images/orth-logo.svg'
import { Link } from 'react-router-dom'
import './App.css'
export default function Home() {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <img src={orthLogo} />
            <h1>Home</h1>
        </>
    )
}