import {Link} from 'react-router-dom';
function Navbar(props) {
    return (
        <nav className="navbar">
            <h1>BloG</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/add" className={"button"}>New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;