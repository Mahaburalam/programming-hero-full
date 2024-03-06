import logo from "../../assets/images/profile.png"

const Header = () => {
    return (
        <header className="flex justify-between items-center mx-4 border-b-2">
            <h3 className="text-3xl font-bold">Knowledge Cafe</h3>
            <img src={logo}></img> 
        </header>
    );
};

export default Header;