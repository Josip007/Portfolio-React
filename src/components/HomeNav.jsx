import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/Home.css';

export function HomeNav({ item, content}) {
    const navigate = useNavigate();
    const [ isActive, setIsActive ] = useState(false);

    const handleClick = () => {
        navigate(`/${item}`);
        setIsActive(true);
      };
   
    const handleMouseEnter = () => {
        setIsActive(true);
      };
    
     const handleMouseLeave = () => {
        setIsActive(false);
      };
    return (
        <li
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        >
            {item}
            {isActive && <div className="dropdown">{content}</div>}
        </li>

    );
}