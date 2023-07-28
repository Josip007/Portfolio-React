import { HomeNav } from './HomeNav';

export function Home() {
    const dropdownContent = {
        about: 'Click here to learn more about me and my path!',
        education: 'Click here to learn more about my education!',
        experience: 'Click here to learn more about my work experience!',
        projects: 'Click here to see some of my projects!'
    }

    return(
        <div className='home-container'>
        <div className='home'>
            <nav>
                <ul className='nav-ul'>
                   <HomeNav item="About me" content={dropdownContent.about} />
                   <HomeNav item="Education" content={dropdownContent.education} />
                   <HomeNav item="Experience" content={dropdownContent.experience} />
                   <HomeNav item="Projects" content={dropdownContent.projects} />
                </ul>
            </nav>
        </div>
        </div>
    );
}

