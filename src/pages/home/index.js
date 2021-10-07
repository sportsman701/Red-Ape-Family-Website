import {useEffect, useRef} from 'react';
import Navbar from 'components/commons/navbar';
import Footer from 'components/commons/footer';

import {

    cloudsBanner,
    titleImg,
    movie
}
from 'images';

import {data, data2, data3} from './data-roadmap';
import teamData from '../data-team';
import castData from './data-cast';
import faqData from './data-faq';

import ReactHtml from 'raw-html-react';
import MintSection from './mint-section';

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

            <section className="hero is-medium banner-home " ref={homeSection}>
                <div className="hero-body bg-gradient is-flex is-flex-direction-column py-0" style={{height: '500px'}}>
                {/*}<div className="has--white">
                    <div className="centered-mobile" style={{width: "250px"}}>
                        <figure className="image">
                            <img src={titleImg} alt="" width="350px" style={{transform: 'rotate(-15deg)'}}/>
                        </figure>
                    </div>
                </div>*/}
                    <div className="container is-flex-grow-1 is-flex is-justify-content-flex-end is-align-items-flex-end" style={{width: '100%'}}>


                        <div className="columns is-vcentered  px-3" style={{transform: 'translateY(-50px)'}}>

                            <div className="column  has-text-centered">

                                <a href="https://discord.gg/XtsPjy5f" target="_blank" className="button is-cpurple has-text-white is-size-4 is-rounded has-font-audiowide">
                                    <strong>JOIN DISCORD</strong></a>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* mint section*/}
            <section className="has-background-primary py-6 px-3">
                <div className="container">

                    <div className="columns is-vcentered">
                        <div className="column has-text-centered  px-4">
                                <MintSection/>
                        </div>
                        <div className="column">
                            <p className="has-text-white has-text-weight-bold is-size-5 has-text-centered">

                                Weaving contemporary sci-fi comedy with the infrastructure of NFTs, The Red Ape Family is the first Digital Asset to take shape of a sitcom whilst also involving your favorite NFTs.
                                <br/><br/>
                                Pre-sale of EP1 is LIVE - Only 333 Tokens Available

                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/*roadmap*/}
            <section className="has-background-black px-4" ref={roadMapSection}>
                <div className="container py-6 px-4 has-text-centered">
                    <h1 className="title has-text-white">ROADMAP EPISODE 1</h1>


                    <ul className="roadmap-list">
                        {
                            data.map( (rmap, i) =>
                                <li className="has-text-white mb-3 is-size-5 has-text-weight-bold" key={i}>
                                    <span className="has-text-warning">{rmap.title}</span> <br/>
                                    <span><ReactHtml html={rmap.body}/></span>
                                </li>
                            )
                        }
                    </ul>
                    <br/>

                </div>
            </section>

            {/* mint section*/}
            <section className="has-background-primary py-6">
                <div className="container has-text-centered">
                        <h1 className="title has-text-white">ROADMAP SEASON 1</h1>
                    <ul className="roadmap-list">
                        {
                            data3.map( (rmap, i) =>
                                <li className="has-text-white mb-3 is-size-5 has-text-weight-bold" key={i}>
                                    <span className="has-text-warning">{rmap.title}</span> <br/>
                                    <span><ReactHtml html={rmap.body}/></span>
                                </li>
                            )
                        }
                    </ul>
                    <br/>
                    <h1 className="subtitle has-text-white has-text-weight-bold is-italic">
                        OTHER ANNOUNCEMENTS WILL BE MADE THROUGHOUT THE SEASON
                    </h1>

                </div>
            </section>

            {/* team */}
            <section className="has-background-black px-4" ref={teamSection}>
                <div className="container py-6">
                        <h1 className="title has-text-white has-text-centered">MEET THE TEAM</h1>
                        <br/><br/><br/>

                    <div className="columns is-multiline px-3">
                        {
                            [...teamData].splice(0, 5).map( (t, i) =>
                                <div className="column has-text-centered" key={i}>


                                    <img className="is-rounded bwToColorImg" src={t.imageurl} alt="" width="150" style={{boxShadow: '0px 0px 1px 5px #585858, 3px 3px 1px 5px rgba(0, 0, 0, 0.5)', borderRadius: '50%'}}/>


                                    <br/>
                                    <br/>

                                    <div className="" style={{height:"80px"}}>
                                        <h1 className="title has-text-white is-5 has-text-centered">{t.name}</h1>
                                        <h1 className="subtitle has-text-white is-6 has-text-centered">{t.charge}</h1>
                                    </div>
                                    <h1 className="subtitle has-text-white is-5 has-text-centered"><ReactHtml html={t.link}/></h1>
                                </div>
                            )
                        }
                    </div>
                    <br/><br/>
                    <div className="columns is-multiline px-3">
                        <div className="column"></div>
                        {
                            [...teamData].splice(5, 4).map( (t, i) =>
                                <div className="column has-text-centered" key={i}>


                                    <img className="is-rounded bwToColorImg" src={t.imageurl} alt="" width="150" style={{boxShadow: '0px 0px 1px 5px #585858, 3px 3px 1px 5px rgba(0, 0, 0, 0.5)', borderRadius: '50%'}}/>


                                    <br/>
                                    <br/>

                                    <div className="" style={{height:"80px"}}>
                                        <h1 className="title has-text-white is-5 has-text-centered">{t.name}</h1>
                                        <h1 className="subtitle has-text-white is-6 has-text-centered">{t.charge}</h1>
                                    </div>
                                    <h1 className="subtitle has-text-white is-5 has-text-centered"><ReactHtml html={t.link}/></h1>
                                </div>
                            )
                        }
                        <div className="column"></div>
                    </div>

                </div>
            </section>

            {/*tokenomics*/}
            <section className="has-background-primary px-4">
                <div className="container py-6">
                    <h1 className="title has-text-white has-text-weight-bold has-text-centered">MEET THE CAST</h1>
                    <br/><br/><br/>
                    <div className="columns">
                        {
                            [...castData].splice(0, 5).map( (c, i) =>
                                <div className="column has-text-centered" key={i}>
                                    <img className="is-rounded" src={c.imageurl} alt="" width="150" style={{boxShadow: '0px 0px 1px 5px #585858, 3px 3px 1px 5px rgba(0, 0, 0, 0.5)', borderRadius: '50%'}}/>
                                    <br/><br/>
                                    <div className="" style={{height:"80px"}}>
                                        <h1 className="title is-5 has-text-centered has-text-white">{c.name}</h1>
                                        <h1 className="subtitle is-5 has-text-centered mb-0 has-text-white">{c.discord}</h1>
                                    </div>
                                    <h1 className="subtitle is-5 has-text-centered"><ReactHtml html={c.link}/></h1>
                                </div>
                            )
                        }
                    </div>
                    <br/><br/>
                        <h1 className="subtitle has-text-white has-text-centered mb-5">Starting Episode 2</h1>
                    <br/>

                    <div className="columns ">
                        <div className="column"></div>
                        {
                            [...castData].splice(5, 3).map( (c, i) =>
                                <div className="column has-text-centered" key={i}>
                                    <img className="is-rounded" src={c.imageurl} alt="" width="150" style={{boxShadow: '0px 0px 1px 5px #585858, 3px 3px 1px 5px rgba(0, 0, 0, 0.5)', borderRadius: '50%'}}/>
                                    <br/><br/>
                                    <div className="" style={{height:"80px"}}>
                                        <h1 className="title is-5 has-text-centered has-text-white">{c.name}</h1>
                                        <h1 className="subtitle is-5 has-text-centered mb-0 has-text-white">{c.discord}</h1>
                                    </div>
                                    <h1 className="subtitle is-5 has-text-centered"><ReactHtml html={c.link}/></h1>
                                </div>
                            )
                        }
                        <div className="column"></div>
                    </div>

                </div>
            </section>

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
