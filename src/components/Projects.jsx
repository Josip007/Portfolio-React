import { Link } from 'react-router-dom';
import '../css/Projects.css';
import {FaArrowRight} from 'react-icons/fa';

export function Projects() {
    return (
        <div className="projects-container">
            <div className="banner">
                <h1><em>Projects</em></h1>
            </div>
            <div className='line'></div>
            <main className='projects-main'>
                <div>
                    <p className='github-paragraph'>Github page: &nbsp;<a href='https://github.com/Josip007' target='_blank' rel="noopener noreferrer">Josip Bošnjaković</a></p>
                    <p className='github-paragraph'>Some of my projects: <FaArrowRight className='arrow' /></p>
                </div>
                <div className='projects-div'>
                    <h4><a href='https://github.com/Josip007/JS-password-check' target='_blank' rel="noopener noreferrer">Javascript password check</a></h4>
                    <p>Three restrictions on password:
                    it has to contain only alphanumerical characters (a-z, A-Z, 0-9); there should be an even number of letters; there should be an odd number of digits. This projects show's the use of <em>Regex</em> in Javascript.
                    </p>
                </div>
                <div className='projects-div'>
                     <h4><a href='https://github.com/Josip007/Car-List-React/tree/main' target='_blank' rel="noopener noreferrer">Car-List -- React/Redux</a></h4>
                     <p>App where user can add, search and delete a car and car's price. In this projects i used Redux toolkit and Bulma CSS framework for styling. Click <a href='https://imgur.com/a/XAXsGZo' target='_blank' rel='noopener noreferrer'>here</a> for the pictures of an app.
                    </p>
                </div>
                <div className='projects-div'>
                <h4><a href='https://github.com/Josip007/React-movies-songs-app' target='_blank' rel="noopener noreferrer">Movies & Songs Playlist -- React/Redux</a></h4>
                     <p>App where user can add, delete and reset both playlist of movies and songs. In this projects i used Redux toolkit and Bulma CSS framework for styling. Click <a href='https://imgur.com/qDfpdAB' target='_blank' rel='noopener noreferrer'>here</a> for the pictures of an app.
                    </p>
                </div>
                <div className='projects-div'>
                <h4><a href='https://github.com/Josip007/React-Table-App' target='_blank' rel="noopener noreferrer">React - Table App</a></h4>
                     <p>App with all sort of functionality. We have modal view, sorting in table, dropdown etc.  Click <a href='https://imgur.com/a/LKIUGoN' target='_blank' rel='noopener noreferrer'>here</a> for the pictures of an app.
                    </p>
                </div>
                <div className='projects-div'>
                <h4><a href='https://github.com/Josip007/Reading-List-with-json-server-and-axios' target='_blank' rel="noopener noreferrer">React - Reading List</a></h4>
                     <p>App where user is fetching data using Axios from custom JSON - server. User can edit and delete books added toreading list. Click <a href='https://imgur.com/a/uqPzXQa' target='_blank' rel='noopener noreferrer'>here</a> for the pictures of an app.
                    </p>
                </div>
                <div className='projects-div'>
                <h4><a href='https://github.com/Josip007/Unsplash-API-search-term---React' target='_blank' rel="noopener noreferrer">React - Fetching pictures from Unsplash API</a></h4>
                     <p>Fetching data from Unsplash API. Click <a href='https://imgur.com/a/sKh5sf7' target='_blank' rel='noopener noreferrer'>here</a> for the pictures of an app.
                    </p>
                </div>
                <div className='projects-div'>
                <h4><a href='https://github.com/Josip007/Web---Chat---App' target='_blank' rel="noopener noreferrer">Web-Chat-App -- JS & Scaledrone service</a></h4>
                     <p>Web chat app using Javascript and Scaledrone service.Multiple users can connect to a room and than exchange messages. Click <a href='https://imgur.com/a/zwTdw2A' target='_blank' rel='noopener noreferrer'>here</a> for the pictures of an app.
                    </p>
                </div>
                <div className='projects-div'>
                <h4><a href='https://imgur.com/a/xIOaaUG' target='_blank' rel="noopener noreferrer">Node server and React Registration</a></h4>
                     <p>In this app I created a server using NodeJS, Registration and Login Page in React. When user register the data is sent to Node server and then user must login with same credentials to get access. If credentials are not the same, Error Page is loaded and user can not enter. Click <a href='https://imgur.com/a/xIOaaUG' target='_blank' rel='noopener noreferrer'>here</a> for the pictures of an app.
                    </p>
                </div>
                <div className='projects-div'>
                <h4><a href='https://github.com/Josip007/JS---Tic-Tac-Toe' target='_blank' rel="noopener noreferrer">Tic-Tac-Toe--Javascript</a></h4>
                     <p>Tic-tac-toe game using vanilla Javascript. Click <a href='https://imgur.com/a/sbNf7Re' target='_blank' rel='noopener noreferrer'>here</a> for the picture of a game.
                    </p>
                </div>
            </main>
            <div className='line'></div>
            <footer className='projects-footer'>
                <Link to='/home'>Home</Link>
                <Link to='/About me'>About</Link>
                <Link to='/Education'>Education</Link>
                <Link to='/Experience'>Experience</Link>
            </footer>
        </div>
    );
}