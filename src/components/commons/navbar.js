import {
    baseURL,
    logo
} from 'images';

const Navbar = props => {
    return(
        <nav class="navbar has-background-black" role="navigation" aria-label="main navigation">
            <div className="container">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                      <img src={baseURL+logo} alt="" width="32" />
                    </a>

                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a className="has-text-white navbar-item">
                        Home
                    </a>

                    <a className="has-text-white navbar-item">
                        FAQ
                    </a>

                    <a className="has-text-white navbar-item">
                        Roadmap
                    </a>

                    <a className="has-text-white navbar-item">
                        Team
                    </a>


                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <a class="is-size-4">
                            <span className="icon has-text-white">
                                <i class="fab fa-twitter"></i>
                            </span>
                        </a>
                    </div>
                    <div class="navbar-item">
                        <a class="is-size-4">
                            <span className="icon has-text-white">
                                <i class="fab fa-youtube"></i>
                            </span>
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
