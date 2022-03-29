import './style/style.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import BlogForm from "./components/BlogForm";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <div className="content">
                    <Routes>
                        <Route path={'/'} element={<Home/>}/>
                        <Route path={'/add'} element={<BlogForm/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
