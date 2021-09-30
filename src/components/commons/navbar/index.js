import {
    logo
} from 'images';

import ConnectButton from 'components/connect-btn';

import {connect} from 'react-redux';
import {set_section} from 'redux/actions/navbarActions';

const Navbar = props => {
    return(
        <nav class="navbar has-background-black is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="container">
                <div class="navbar-brand">
                    <a class="navbar-item" href="">
                      <img src={logo} alt="" width="32" />
                    </a>

                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a className="has-text-white navbar-item" onClick={e => props.set_section("HOME")}>
                        Home
                    </a>

                    <a className="has-text-white navbar-item" onClick={e => props.set_section("FAQ")}>
                        FAQ
                    </a>

                    <a className="has-text-white navbar-item" onClick={e => props.set_section("ROADMAP")}>
                        Roadmap
                    </a>

                    <a className="has-text-white navbar-item" onClick={ e => props.set_section("TEAM")}>
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

                    <div className="navbar-item">
                        <ConnectButton/>
                    </div>
                </div>
                </div>
            </div>
        </nav>
    );
}

export default connect(
    null,
    {
        set_section
    }
)(Navbar);
