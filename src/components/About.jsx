import { useState } from 'react';
import '../css/About.css';
import { FaBars } from 'react-icons/fa';
import { useLoading } from '../App';
import { Link } from 'react-router-dom';

export function About() {
    const [hamburgerMenu, setHamburgerMenu] = useState(false);
    const { setIsLoading } = useLoading();

    const handleMouseMove = () => {
        setHamburgerMenu(!hamburgerMenu);
    }

    const handleLickClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }

    return (
        <div className='about-container'>
            <div className='pillar pillar1'>
                    <FaBars className='fabars' onMouseEnter={handleMouseMove} />
                    {hamburgerMenu && 
                        <div className='hamburger-list' onMouseLeave={handleMouseMove}>
                            <ul>
                                <li><Link onClick={handleLickClick} to='/'>Welcome</Link></li>
                                <li><Link to='/home'>Home</Link></li>
                                <li><Link to='/Education'>Education</Link></li>
                                <li><Link to='/Projects'>Projects</Link></li>                             
                                <li><Link to='/Experience'>Experience</Link></li>                             
                            </ul>
                        </div>}         
            </div>          

            <div className='pillar pillar2'>
                <h2>Hello and welcome to my <em>About me</em> Page!</h2>
                <p>My name is Josip Bošnjaković. I was born in Našice, small city in Slavonija, but lived most of my life in Vukojevci, village near Našice. Since the early age, i loved everything about technology, as soon as i got my first PC i was always exploring what I can do on it. That is how i learned in early age to boot windows, download and install video games etc.</p>
                    <div className='about-hr'></div>
                <p>By playing on my computer i started learning a lot and also learning english. Because of that I am now fluent in english.
                Then i started to go to school. I was great student until fifth grade, when I started to go down with grades. <br />After elementary school i started high school for <em>gas installer</em> for three years. Than when i finished second year with average grades something just clicked for me. And with that click i decided to go on again on being the best in class. <br /> I finished third year with all 5. I then signed up for fourth year for <em>salesperson</em> in Zagreb, because i needed fourth year for collage.
                And then i started on <em>Osijek University for Mechanical Engineering</em> in duration of five years.
                While on collage i made my own 3D printer. <br />
                My education in details is here: <a href='/Education' >"Education"</a> page. And finally after graduating in tenth month, i started my first job two months later, in Stribor Oprema company.
                More on my work experience here: <a href='/Work experience'>work experience.</a>
                </p> <div className='about-hr'></div>
                <p className='footer'>Thank you and please enjoy the rest of the site.</p>
            </div>

            <div className='pillar pillar3'>
                
            </div>
        </div>
    );
}