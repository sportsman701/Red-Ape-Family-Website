import Navbar from 'components/commons/navbar';

import {
    baseURL,
    cloudsBanner,
    titleImg,
    movie
}
from 'images';

import './home.scss';

const HomePage = props => {
    return (
        <div>
            <Navbar/>
            <section className="hero">
                <div className="hero-body banner-home">
                    <div className="container">
                        <div className="columns">
                            <div className="column">
                                <img src={baseURL+titleImg} alt="" width="350px"/>
                                <h1 className="subtitle">The Red Ape Family is a 2D animated sitcom that brings 4 bored apes to life an imaginary city and an imaginary world!</h1>
                                <button className="button is-info is-rounded">FAQ</button>&nbsp;&nbsp;&nbsp;
                                <button className="button is-info is-rounded">Roadmap</button>&nbsp;&nbsp;&nbsp;
                                <button className="button is-info is-rounded">Subscribe</button>
                            </div>
                            <div className="column">
                                <figure class="image is-16by9">
                                    <iframe class="has-ratio" width="640" height="360" src="https://www.youtube.com/embed/YE7VzlLtp-4" frameborder="0" allowfullscreen></iframe>
                                </figure>
                                <h1 className="subtitle">Teaser - coming soon!!</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* mint section*/}
            <section>

            </section>

            {/*roadmap*/}
            <section className="has-background-dark">
                <div className="container py-6">
                    <h1 className="subtitle has-text-white">ROADMAP 1.0</h1>

                    <ul className="roadmap-list">
                        <li className="has-text-white">
                            <div className="columns is-mobile is-vcentered">
                                <div className="column is-1" style={{maxWidth: '40px'}}>
                                    <figure className="image">
                                        <img src={baseURL+movie} alt=""/>
                                    </figure>
                                </div>
                                <div className="column">
                                    <span>After  Ep1: Poster NFTs can be claimed by NFT holders</span>
                                </div>
                            </div>


                        </li>
                    </ul>
                </div>

            </section>

            {/*tokenomics*/}
            <section>

            </section>

            {/*members*/}
            <section>

            </section>

        </div>
    );
}

export default HomePage;
