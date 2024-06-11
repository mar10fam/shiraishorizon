import { Link } from "react-router-dom"
import '../styles/Navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
    const twitterLink = "https://x.com/shiraishorizon";
    const igLink = "https://www.instagram.com/shiraishorizon";

    return (
        <div className="navbar nav-container ">
            <div className="navbar-start">
                {/* filler for left side of navbar */}
            </div>
            <div className="navbar-center flex gap-10 h-[5vh]">
                <Link to="/" className="text-white">Portfolio</Link>
                <Link to="/about" className="text-white">About</Link>
                <a href={twitterLink} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faXTwitter} size="2xl" className="text-white"/>
                </a>
                <a href={igLink} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2xl" className="text-white"/>
                </a>
            </div>
            <div className="navbar-end">
                {/* filler for right side of navbar */}
            </div>
        </div>
    )
}

export default Navbar