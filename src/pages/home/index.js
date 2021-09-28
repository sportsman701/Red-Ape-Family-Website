import Navbar from 'components/commons/navbar';
import Footer from 'components/commons/footer';

import {

    cloudsBanner,
    titleImg,
    movie
}
from 'images';

import roadmapData from './data-roadmap';
import teamData from './data-team';
import castData from './data-cast';
import faqData from './data-faq';

import ReactHtml from 'raw-html-react';

import './home.scss';



const HomePage = props => {
    return (
        <div>
            <Navbar/>
            <section className="hero banner-home">
                <div className="hero-body bg-gradient">
                    <div className="container">
                        <div className="columns is-variable is-8">
                            <div className="column">
                                <img src={titleImg} alt="" width="350px" style={{transform: 'rotate(-15deg)'}}/>
                                <h1 className="subtitle has-text-white">The Red Ape Family is a 2D animated sitcom that brings 4 bored apes to life an imaginary city and an imaginary world!</h1>
                                <button className="button is-info is-rounded">FAQ</button>&nbsp;&nbsp;&nbsp;
                                <button className="button is-info is-rounded">Roadmap</button>&nbsp;&nbsp;&nbsp;
                                <button className="button is-info is-rounded">Subscribe</button>
                            </div>
                            <div className="column">
                                <figure class="image is-16by9">
                                    <iframe class="has-ratio" width="640" height="360" src="https://www.youtube.com/embed/YE7VzlLtp-4" frameborder="0" allowfullscreen></iframe>
                                </figure>
                                <h1 className="subtitle has-text-white">Teaser - coming soon!!</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* mint section*/}
            <section className="banner-banana py-6">
                <div className="container">
                    <h1 className="subtitle  has-text-centered-mobile"><strong className="has-text-info">Mint</strong></h1>
                    <div className="box mint-panel">
                        <h1 className="subtitle"></h1>
                        <form>
                            <div className="has-text-centered" >
                                <div class="control">
                                    <input class="input" type="text" placeholder="Text input"/>
                                </div>
                                <button className="button is-info is-rounded" type="submit">MINT</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/*roadmap*/}
            <section className="has-background-dark px-4">
                <div className="container py-6 px-4">
                    <h1 className="subtitle has-text-white">ROADMAP 1.0</h1>

                    <ul className="roadmap-list">
                        {
                            roadmapData.map( (rmap, i) =>
                                <li className="has-text-white" key={i}>
                                    <div className="columns is-mobile is-vcentered">
                                        <div className="column is-1" style={{maxWidth: '40px'}}>
                                            <figure className="image is-24x24">
                                                <img src={movie} alt=""/>
                                            </figure>
                                        </div>
                                        <div className="column">
                                            <span>{rmap}</span>
                                        </div>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                    <br/>
                    <h1 className="subtitle has-text-white">As soon as Season 1 is completed, we will roll-out the roadmap of Season 2.</h1>
                </div>
            </section>

            {/*tokenomics*/}
            <section className="banner-banana px-4">
                <div className="container py-6">
                    <h1 className="subtitle  has-text-centered-mobile"><strong className="has-text-info">NFTs, Tokenomics, and Tiers</strong></h1>
                    <div style={{width: '100%', display: 'grid', placeItems: 'center'}}>
                        <h1 className="title has-background-info has-text-white px-6 py-2" style={{"border-radius": '50px'}}>FAQ</h1>
                    </div>
                    <ul>
                        {
                            faqData.map( (f, i) =>
                                <li className="mb-6" key={i}>
                                    <h1 className="title is-4 mb-2">{f.question}</h1>
                                    <p><ReactHtml html={f.answer}/></p>
                                </li>
                            )
                        }
                    </ul>

                </div>
            </section>

            {/* team */}
            <section className="has-background-dark px-4">
                <div className="container py-6">
                    <h1 className="subtitle has-text-white">TRAF TEAM - Our Team if from all over the world!</h1>

                    <div className="columns">
                        {
                            teamData.map( (t, i) =>
                                <div className="column has-text-centered" key={i}>

                                    <img className="is-rounded" src={t.imageurl} alt="" width="256" style={{"border-radius": '50%'}}/>
                                    <br/>

                                    <h1 className="title has-text-white is-5 has-text-centered">{t.name}</h1>
                                    <h1 className="subtitle has-text-white is-5 has-text-centered mb-0">{t.charge}</h1>
                                    <h1 className="subtitle has-text-white is-5 has-text-centered">{t.socialMedia}</h1>
                                </div>
                            )
                        }
                    </div>

                    <br/>
                    <h1 className="has-text-white is-size-4">Script Writers: Chris Goward & Neils </h1>
                    <h1 className="has-text-white is-size-4">Musician: Matt Weocjomarts </h1>
                </div>
            </section>

            {/*tokenomics*/}
            <section className=" px-4">
                <div className="container py-6">
                    <h1 className="subtitle  has-text-centered-mobile"><strong className="has-text-info">MEET THE CAST</strong></h1>
                    <div className="columns">
                        {
                            castData.map( (c, i) =>
                                <div className="column has-text-centered" key={i}>
                                    <img className="is-rounded" src={c.imageurl} alt="" width="256" style={{"border-radius": '50%'}}/>
                                    <br/>
                                    <h1 className="title is-5 has-text-centered has-text-danger">{c.name}</h1>
                                    <h1 className="subtitle is-5 has-text-centered mb-0">{c.discord}</h1>
                                    <h1 className="subtitle is-5 has-text-centered">{c.role}</h1>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default HomePage;
