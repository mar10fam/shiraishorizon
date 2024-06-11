import "../styles/Header.css";

const Header = () => {
    return (
        <div className="header-container w-screen flex flex-col items-center justify-center h-60 bg-cover bg-center text-center">
            <div className="header-pfp mb-2 rounded-full bg-white w-36 h-36 bg-cover bg-center"></div>
            <div className="text-white">@shiraishorizon</div>
        </div>
    )
}

export default Header;