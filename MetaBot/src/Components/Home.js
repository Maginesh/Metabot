import React from "react";
import NavBar from "./Navbar";
function Home() {
    return (
        <div className="container-fluid min-h-screen bg-pink-100">
            <NavBar />
            <h1>
                <img src="https://i.pinimg.com/736x/fd/ae/9b/fdae9baf8232e90545149102c22cab42.jpg" width="100%"></img>
            </h1>
        </div>
    );
}

export default Home;