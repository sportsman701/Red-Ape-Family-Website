import {connect} from 'react-redux';
import {request_connection} from 'redux/actions/walletActions';
import './connect-btn.scss';

const getAddressReduced = (address) => `${address.slice(0, 6)}...${address.slice(-4)}`;

const ConnectBtn = props => {

    const {wallet} = props;
    //console.log(wallet);

    const onClicked = e => {
        if(wallet.isMetamaskInstalled && !wallet.isConnected)
            props.request_connection();
    }

    return(
        <button className="button is-rounded connect-btn" onClick={onClicked}>
            {wallet.isConnected && wallet.currentAccount != null? getAddressReduced(wallet.currentAccount) : 'Connect'}
        </button>
    );

}

const mapStateToProps = state => ({
    wallet: state.walletReducer
});

export default connect(
    mapStateToProps,
    {
        request_connection
    }
)(ConnectBtn);
