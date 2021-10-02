import {useEffect, useRef} from 'react';
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
import Form from './form';

import {connect} from 'react-redux';
import {set_section} from 'redux/actions/navbarActions';

import './home.scss';



const HomePage = props => {

    const homeSection = useRef(null);
    const faqSection = useRef(null);
    const roadMapSection = useRef(null);
    const teamSection = useRef(null);

    const {navbarReducer} = props;


    useEffect(
        () => {
            let y = 0;
            switch (navbarReducer.section) {
                case "HOME":
                    y = homeSection.current.scrollIntoView()
                    break;

                case "FAQ":
                    y = faqSection.current.scrollIntoView()
                    window.scrollBy(0, -45);
                    break;

                case "ROADMAP":
                    y = roadMapSection.current.scrollIntoView()
                    window.scrollBy(0, -45);
                    break;

                case "TEAM":
                    y = teamSection.current.scrollIntoView()
                    window.scrollBy(0, -45);
                    break;



                default: break;

            }
            // console.log(y);
        }, [navbarReducer.section]
    );

    return (
        <div>
            <Navbar/>
            <section className="hero banner-home" ref={homeSection}>
                <div className="hero-body bg-gradient">
                    <div className="container">
                        <div className="columns is-vecentered  px-3">
                            <div className="column">

                                <img src={titleImg} alt="" width="350px" style={{transform: 'rotate(-15deg)'}}/>

                                <h1 className="subtitle has-text-white">The Red Ape Family is a 2D animated sitcom that brings 4 Bored Apes to life an imaginary city and an imaginary world!</h1>
                                <button className="button is-info is-rounded" onClick={e => props.set_section("FAQ")}>FAQ</button>&nbsp;&nbsp;&nbsp;
                                <button className="button is-info is-rounded" onClick={e => props.set_section("ROADMAP")}>Roadmap</button>&nbsp;&nbsp;&nbsp;

                            </div>
                            <div className="column">

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* mint section*/}
            <section className="banner-banana py-6">
                <div className="container">
                    <div className="">
                        <div className="columns">
                            <div className="column is-half is-offset-one-quarter">
                                <figure class="image is-16by9">
                                    <iframe class="has-ratio" width="640" height="360" src="https://www.youtube.com/embed/BKkc2v8echI" frameborder="0" allowfullscreen></iframe>
                                </figure>
                            </div>
                        </div>

                    </div>

                    <div className="">
                        <h1 className="subtitle"></h1>
                        <Form/>
                    </div>
                </div>
            </section>

            {/*roadmap*/}
            <section className="has-background-dark px-4" ref={roadMapSection}>
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
            <section className="banner-banana px-4" ref={faqSection}>
                <div className="container py-6">
                    <h1 className="subtitle  has-text-centered-mobile"><strong className="has-text-info">NFTs, Tokenomics, and Tiers</strong></h1>
                    <div className="pb-6" style={{width: '100%', display: 'grid', placeItems: 'center'}}>
                        <h1 className="title is-4 has-background-info has-text-white px-6 py-2 " style={{"border-radius": '50px'}}>FAQ</h1>
                    </div>
                    <br/><br/>
                    <ul>
                        {
                            faqData.map( (f, i) =>
                                <li className="mb-6" key={i}>
                                    <h1 className="title is-5 mb-2">{f.question}</h1>
                                    <p><ReactHtml html={f.answer}/></p>
                                </li>
                            )
                        }
                    </ul>

                </div>
            </section>

            {/* team */}
            <section className="has-background-dark px-4" ref={teamSection}>
                <div className="container py-6">
                    <h1 className="subtitle has-text-white">TRAF TEAM - Our Team if from all over the world!</h1>

                    <div className="columns px-3">
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

const mapStateToProps = state => ({
    navbarReducer: state.navbarReducer
});

export default connect(
    mapStateToProps,
    {
        set_section
    }
)(HomePage);
