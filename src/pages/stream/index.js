import {useEffect} from 'react';

const fetchEpisodes = async () => {
    // const res = await fetch('https://drive.google.com/uc?export=view&id=1_ySSZ1hdgTM1oQMY6beXW7UonSHmJyoh');
    // console.log(res);
}

const Stream = props => {

    useEffect(
        () => {
            fetchEpisodes();
        }, []
    );

    return(
        <div>
        </div>
    );
}

export default Stream;
