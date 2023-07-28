import { Link } from 'react-router-dom';
import '../css/Education.css';

export function Education() {
    return (
        <div className='education-container'>
            <div className="education-div">
                <header className='education-header'>
                    <h2>Education</h2>
                </header>
            </div>
            <div className='line'></div>
            <div className='education-grid'>
                <div className='grid1'>
                    <h2>Primary School</h2>
                    <ul>
                        <li>Osnovna škola kralja Tomislava, Našice</li>
                    </ul>
                </div>
                <div className='grid2'>
                    <h2>High School</h2>
                    <ul>
                        <li>Srednja škola Isidora Kršnjavog Našice</li>
                        <li>Plinoinstalater, tri godine</li>
                        <li>Komercijalist 4. godina, Pučko Otvoreno Učilište Zagreb</li>
                    </ul>
                </div>
                <div className='grid3'>
                    <h2>College</h2>
                    <ul>
                        <li>2014./2015. - Sveučilište Josipa Jurja Strossmayera - Strojarski fakultet u Slavonskom Brodu</li>
                        <li>2016./2017. - Diplomski studij - konstruiranje i razvoj proizvoda</li>
                        <li>2019./2020. - <a href='https://imgur.com/xGT6XIg' target='_blank' rel="noopener noreferrer">Magisterij</a></li>
                    </ul>
                </div>
                <div>
                    <h2>Visoko Učilište Algebra & Online Courses</h2>
                    <ul>
                        <li>Modern React with Redux - Udemy</li>
                        <li>Codecademy, FreeCodeCamp etc.</li>
                        <li>2022./2023. - Frontend Developer(HTML,CSS, JAVASCRIPT, GIT & GITHUB, REACT)</li>
                    </ul>
                </div>
            </div>
            <div className='certifications'>
                <div>
                    <p>Certifications:</p>
                    <a href='https://www.codecademy.com/profiles/Josip007' target='_blank' rel='noopener noreferrer'>Codecademy profile</a>
                    <br />
                    <br />
                    <a href='https://imgur.com/JgDIpQM' target='_blank' rel="noopener noreferrer">React - udemy certificate</a>
                    <br />
                    <br />
                    <a href='https://imgur.com/o4Rvgzu' target='_blank' rel="noopener noreferrer">Algebra - Frontend Developer</a>
                </div>
                <div className='note'>Note: Only portion of online courses and certifications were listed.
                </div>
                
            </div>
            <div className='link-to-home'>
                <Link to='/'>Welcome Page</Link>
                <Link to='/home'>Home</Link>
                <Link to='/About me'>About</Link>
                <Link to='/experience'>Work Experience</Link>
                <Link to='/projects'>Projects</Link>
            </div>
        </div>
    );
}