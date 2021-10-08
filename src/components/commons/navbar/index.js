import {
    logo
} from 'images';

import ConnectButton from 'components/connect-btn';

import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {set_section} from 'redux/actions/navbarActions';
import {opensea} from 'images';

import './navbar.scss';

const Navbar = props => {

    const onBurgerClicked= e => {
        e.preventDefault();

        const target = e.currentTarget.dataset.target;
        const $target = document.getElementById(target);
        e.currentTarget.classList.toggle('is-active');
        $target.classList.toggle('is-active');
    }

    const onBurgerIClicked = e => {
        // e.preventDefault();
        const navbar = document.getElementById("navbar");
        navbar.classList.toggle('is-active');
        const navbarBurger = document.getElementById("navbar-burger");
        navbarBurger.classList.toggle('is-active');
    }


    return(
        <nav class="navbar has-background-black is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="container">
                <div class="navbar-brand">
                    <Link to="/home" class="navbar-item" onClick={e => {props.set_section("HOME")}}>
                      <img src={logo} alt="" width="32" />
                    </Link>

                    <a  id="navbar-burger" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar" onClick={onBurgerClicked}>
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbar" class="navbar-menu">
                <div class="navbar-start">
                    <Link to="/home" className="has-text-white navbar-item has-text-centered-mobile" onClick={e => {props.set_section("HOME"); onBurgerIClicked(e)}}>
                        Home
                    </Link>

                    {/*}<Link to="/faq" className="has-text-white navbar-item has-text-centered-mobile" onClick={e => {onBurgerIClicked(e)}}>
                        FAQ
                    </Link>*/}

                    <Link to="/home" className="has-text-white navbar-item has-text-centered-mobile" onClick={e => {props.set_section("ROADMAP"); onBurgerIClicked(e)}}>
                        Roadmap
                    </Link>

                    <Link to="/team" className="has-text-white navbar-item has-text-centered-mobile" onClick={ e => {onBurgerIClicked(e)}}>
                        Team
                    </Link>

                    <Link to="/stream" className="has-text-white navbar-item has-text-centered-mobile" onClick={ e => {onBurgerIClicked(e)}}>
                        Stream
                    </Link>


                </div>

                <div class="navbar-end">
                    <div class="navbar-item has-text-centered-mobile">
                        <a class="is-size-4 " href="https://twitter.com/TheRedApeFamily" target="_blank" onClick={onBurgerIClicked}>
                            <span className="icon has-text-white" >
                                <i class="fab fa-twitter"></i>
                            </span>
                        </a>
                    </div>
                    <div class="navbar-item has-text-centered-mobile">
                        <a class="is-size-4 " href="https://www.youtube.com/channel/UCLCsACZQEeKOzjfbK2kIo9A" target="_blank" onClick={onBurgerIClicked}>
                            <span className="icon has-text-white">
                                <i class="fab fa-youtube"></i>
                            </span>
                        </a>
                    </div>
                    <div class="navbar-item has-text-centered-mobile">
                        <a class="is-size-4 " href="https://discord.gg/76n76gXSTg" target="_blank" onClick={onBurgerIClicked}>
                            <span className="icon has-text-white">
                                <i class="fab fa-discord"></i>
                            </span>
                        </a>
                    </div>
                    <div class="navbar-item has-text-centered-mobile">
                        <a class="is-size-4 " href="https://opensea.io/collection/theredapefamily" target="_blank" onClick={onBurgerIClicked}>
                            <span className="icon has-text-white">
                                <img src={opensea} alt=""/>
                            </span>
                        </a>
                    </div>


                    <div className="navbar-item has-text-centered-mobile">
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
