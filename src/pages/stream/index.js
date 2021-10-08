import {useState, useEffect} from 'react';
import axios from 'axios';



const Stream = props => {

    const [episodes, setEpisodes] = useState([]);

    console.log(episodes);
    useEffect(
        () => {
            const fetchEpisodes = async () => {
                const res = await axios.get('./episodes/data.json');
                setEpisodes(res.data.episodes);
                console.log(res.data.episodes);
            }
            fetchEpisodes();
        }, []
    );

    return(
        <div className="has-background-black p-6" style={{width: '100%', minHeight: '100%'}}>

            <div className="container" style={{height: '100%'}}>

                <div className="columns is-multiline">
                    {
                        episodes.map( (e,i) =>
                            <div className="column is-3-desktop is-6-tablet" key={i}>
                                <figure class="image is-16by9">
                                    <iframe class="has-ratio" width="640" height="360" src={"https://www.youtube.com/embed/"+e.video_id} frameborder="0" allowfullscreen></iframe>
                                </figure>
                                <div className="mt-4" style={{height: '200px'}}>
                                    <h1 className="title has-text-white is-5">{e.name}</h1>
                                    <p className="has-text-" style={{color: '#b5b5b5'}}>
                                        {
                                            e.description
                                        }
                                    </p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Stream;
