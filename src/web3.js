import store from 'redux/store';
import {set_web3_instance, add_contract} from 'redux/actions/web3Actions';
import {
    set_metamask_installed,
    set_connection,
    set_current_account,
    set_networkd_id,
    check_connected_to_operating_network
} from 'redux/actions/walletActions';

import Web3 from 'web3';

import ERCABI from 'abis/ERC1155.json';


const initWeb3 = async () => {

    if(typeof window.ethereum !== 'undefined'){

        const ethereum = window.ethereum;
        store.dispatch( set_metamask_installed(true) );

        //instance web3
        const web3 = await new Web3(ethereum);
        store.dispatch( set_web3_instance(web3) );


        //detect if metamask is connected to site
        const accArr = await web3.eth.getAccounts();
        if(accArr.length === 0) store.dispatch( set_connection(false) );
        else{
             store.dispatch( set_connection(true) );
             store.dispatch( set_current_account(accArr[0]) );

             store.dispatch( set_networkd_id( await web3.eth.getChainId() ) );
        }

        // const chainId = await web3.eth.getChainId();

        const ethId = '4';
        const bscId = '97';

        //instance contracts
        const ercContract = new web3.eth.Contract(ERCABI, '0xe02E18D4E4EDfACd1b7237c33051aD9514aD61dB');
        store.dispatch( add_contract(`ERC_CONTRACT`, ercContract) );



        //listen to eth change events
        ethereum.on('accountsChanged', accounts => {
            // console.log('accounts: ' + accounts);
            if(accounts.length > 0){
                store.dispatch( set_current_account(accounts[0]) );
            }
            else{
                store.dispatch( set_connection(false) );
                store.dispatch( set_current_account('') );

            }

        });

        ethereum.on('connect', connectInfo => {


            // if(accounts[0] != null)
            //     store.dispatch( set_current_account(accounts[0]) );

            // store.dispatch( set_connection(true) );
            console.log('cnx');
        });

        ethereum.on('disconnect', error => {
            // store.dispatch( set_current_account('') );
            console.log(error);
        });

        ethereum.on('chainChanged', async chainId => {
             // window.location.reload();
            store.dispatch( set_networkd_id( await web3.eth.getChainId() ) );
            store.dispatch( check_connected_to_operating_network() );
        });

    }
}


export {initWeb3};
