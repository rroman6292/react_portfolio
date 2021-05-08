import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function NavTabs() {

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <span class="navbar-brand mb-1 h1">Richie Roman</span>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="nav navbar-nav navbar-flex">
                    <li class="nav-item">
                            <Link className="nav-link" to="/home">
                                Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/about">
                                About Me</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/portfolio">
                                Portfolio</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavTabs;