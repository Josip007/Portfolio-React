import { useNavigate } from 'react-router-dom';
import '../css/WelcomePage.css';

export function WelcomePage() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/home');
    }

    return (
        <div className='welcome-page-container'>
        <div className="welcome-page-div">
            <div>
                <p>Welcome to my website!</p>
                <p className='welcome-page-middle-div'>Please, enter.</p>
                <div className='welcome-page-button'>
                    <button onClick={handleClick}>Enter</button>
                </div>
            </div>
        </div>
        </div>
    );
}