import "../styles/Header.css";

const Header = () => {
    return (
        <div className="header-container w-screen h-[30vh] flex flex-col items-center justify-center bg-cover bg-center text-center">
            <div className="header-pfp mb-2 rounded-full bg-white w-36 h-36 bg-cover bg-center"></div>
            <div className="text-white">@shiraishorizon</div>
            <div className="text-white font-extralight">shiraishorizon.art@gmail.com</div>
        </div>
    )
}

export default Header;