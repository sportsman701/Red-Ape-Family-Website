const footer = props => {
    return(
        <footer class="footer has-background-black">
            <div class="container has-text-centered">

                <p>
                    <a>
                        <span className="icon has-text-white is-size-4">
                            <i class="fab fa-twitter"></i>
                        </span>
                    </a>
                    &nbsp;&nbsp;
                    <a href="https://www.youtube.com/channel/UCLCsACZQEeKOzjfbK2kIo9A" target="_blank">
                        <span className="icon has-text-white is-size-4">
                            <i class="fab fa-youtube"></i>
                        </span>
                    </a>
                    &nbsp;&nbsp;
                    <a  href="https://discord.gg/76n76gXSTg" target="_blank"> 
                        <span className="icon has-text-white is-size-4">
                            <i class="fab fa-discord"></i>
                        </span>
                    </a>

                    <hr className="has-background-white"/>
                    <h1 className="subtitle has-text-white mb-0">Contact us</h1>
                </p>
                <br/>
                <h1 className="subtitle has-text-white">Copyright @ 2021 TheRedApeFamily alrughts reserved</h1>
            </div>
        </footer>
    );
}

export default footer;
