import { Link } from 'react-router-dom';
import '../css/Experience.css';

export function WorkExperience() {
    return (
        <div className="experience-container">
            <div className="experience-banner">
                <h2>Work Experience</h2>
            </div>
            <div className='line'></div>
            <div className='experience-grid'>
                <div>
                    <h2>Stribor Oprema d.o.o.</h2>
                    <ul>
                        <li>12.2020. - 8. 2021.</li>
                        <li>Inženjer u tehničkoj pripremi</li>
                        <li>svakodnevno korištenje Solidworks i AutoCAD programa pri projektiranju proizvoda kojim se tvrtka bavi, poput dječjih ljuljački, klupa za parkove, većih konstrukcija za zabavne parkove i slično. Razrada tehničkih nacrta za proizvodnju.</li>
                        <li>Prvih tri mjeseca rad u proizvodnji a zatim prelazim u ured.</li>
                    </ul>
                </div>
                <div>
                    <h2>Eurometal d.o.o.</h2>
                    <ul>
                        <li>09.2021. - 11.2021.</li>
                        <li>Kontrolor kvalitete</li>
                        <li>-završna provjera pri proizvodnji proizvoda, npr. Pri tokarenju, varenju, bušenju i slično, provjera završne obrade pri toplinskoj obradi proizvoda te slični poslovi koji uključuju preciznu provjeru tolerancija.</li>
                        <li> Modeliranje različitih proizvoda u Solidworksu, primjerice osovine, zupčanici itd.</li>
                    </ul>
                </div>
                <div>
                    <h2>Euroreflex d.o.o.</h2>
                    <ul>
                        <li>11.2021. - 01.2022.</li>
                        <li>Isto kao u Eurometalu</li>
                    </ul>
                </div>
                <div>
                    <h2>Digital Data Hub d.o.o.</h2>
                    <ul>
                        <li>04.2022. - </li>
                        <li>Strojarski projektant</li>
                        <li>-svakodnevno korištenje alata: Solidworks, AutoCAD, Revit, Microsoft Office(Word, Excel).</li>
                        <li>Projektiranje različitih proizvoda ovisno o potrebi posla. Rad za američko tržište, rad s njihovim mjernim jedinicama.</li>
                    </ul>
                </div>
            </div>
            <footer>
                <div className='experience-footer'>
                <Link to='/home'>Home</Link>
                <Link to='/About me'>About</Link>
                <Link to='/Education'>Education</Link>
                <Link to='/'>Welcome Page</Link>
                </div>
            </footer>

        </div>
    );
}