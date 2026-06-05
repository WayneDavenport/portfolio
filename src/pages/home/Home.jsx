import { Link } from 'react-router-dom';
import Scene from '../../components/layout/Scene';
import { Canvas } from '@react-three/fiber';
import './home.css'


export function Home() {

    return (
        <>
            <div className='home-body'>
                <h1><span>Wayne</span><br></br> Davenport</h1>

                <nav className='home-nav'>
                    <ul>
                        <li>
                            <Link to='/about-me'>About Me</Link>
                        </li>
                        <li>
                            <Link to='/skills'>Skills</Link>
                        </li>
                        <li>
                            <Link to='/projects'>Projects</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>




        </>


    )
}

