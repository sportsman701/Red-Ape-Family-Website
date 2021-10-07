import {opensea} from 'images';

const footer = props => {
    return(
        <footer class="footer has-background-black py-5">
            <div class="container has-text-centered">

                <p>
                    <a href="https://twitter.com/TheRedApeFamily" target="_blank" className="ml-4">
                        <span className="icon has-text-white is-size-4">
                            <i class="fab fa-twitter"></i>
                        </span>
                    </a>
                    <a href="https://www.youtube.com/channel/UCLCsACZQEeKOzjfbK2kIo9A" target="_blank" className="ml-4">
                        <span className="icon has-text-white is-size-4">
                            <i class="fab fa-youtube"></i>
                        </span>
                    </a>
                    <a  href="https://discord.gg/76n76gXSTg" target="_blank" className="ml-4">
                        <span className="icon has-text-white is-size-4">
                            <i class="fab fa-discord"></i>
                        </span>
                    </a>
                    <a class="is-size-4 " href="https://opensea.io/collection/theredapefamily" target="_blank" className="ml-4">
                        <span className="icon has-text-white">
                            <img src={opensea} alt=""/>
                        </span>
                    </a>
                </p>
                <br/>
                <h1 className="subtitle has-text-white is-6">Copyright @ 2021 TheRedApeFamily all rights reserved</h1>
            </div>
        </footer>
    );
}

export default footer;
