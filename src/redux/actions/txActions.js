import {
    TX_LOADING,
    TX_FAILED,
    TX_SUCCESS
} from '../constants';

import txs from 'txs';
import { store as notificationStore } from 'react-notifications-component';
import {successNotification, errorNotification} from 'notifications';


// import axios from 'axios';
// import {getDecimals, getAllowance} from '../../utils/utils';
// import {token_db} from '../../bd/token';
import ERC20ABI from '../../abis/ERC20.json';
const MAX_INT = '115792089237316195423570985008687907853269984665640564039457584007913129639935';



/* *~~*~~*~~*~~*~~*~~* TX PLAIN ACTIONS *~~*~~*~~*~~*~~*~~* */
const tx_loading = txType => {
    return{
        type: TX_LOADING,
        txType: txType
    }
}

const tx_failed = txType => {
    return{
        type: TX_FAILED,
        txType: txType
    }
}

const tx_success = txType => {
    return{
        type: TX_SUCCESS,
        txType: txType
    }
}

/* *~~*~~*~~*~~*~~*~~* TX THUNKER ACTIONS *~~*~~*~~*~~*~~*~~* */

export const approveUnlimited_spender_tx = (tokenDataString, spenderAddress) => {
    return async (dispatch, getState) => {

        dispatch( tx_loading( txs.APPROVE_REGULAR_TKN ) );

        const {web3Reducer, walletReducer} = getState();
        const {web3} = web3Reducer;
        const chainId = walletReducer.networkId;
        const tokenData = JSON.parse(tokenDataString);

        const erc20_contract = new web3.eth.Contract(ERC20ABI, tokenData.address[chainId]);
        const tx = await erc20_contract.methods.approve(spenderAddress, MAX_INT);

        try {
            await tx.send({
                from: walletReducer.currentAccount
            });
            dispatch( tx_success( txs.APPROVE_REGULAR_TKN ) );
        } catch (e){
            dispatch( tx_failed( txs.APPROVE_REGULAR_TKN ) );
            throw e;
        } finally{
            const txStatus = getState().txReducer[txs.APPROVE_REGULAR_TKN];

            if(txStatus.success)
                notificationStore.addNotification( successNotification("Tx successful", `${tokenData.name} Approved`) );

            if(txStatus.error)
                notificationStore.addNotification( errorNotification("Tx failed", "sorry, something wen't wrong") );

        }
    }
}

export const approveCero = () => {
    return async (dispatch, getState) => {

        const {web3Reducer, walletReducer} = getState();
        const {web3, contracts} = web3Reducer;
        const chainId = walletReducer.networkId;

        const erc20_contract = new web3.eth.Contract(ERC20ABI, '0x057320705B3D36c21E458ADD748C788BEf79F083');
        const tx = await erc20_contract.methods.approve(contracts[`user_interface_bridge_${chainId}`].options.address, '0');

        try {
            await tx.send({
                from: walletReducer.currentAccount
            });
        } catch (e){ throw e}
    }
}

export const approveUnlimited_spender_tx_l2 = () => {
    return async (dispatch, getState) => {

        const {web3Reducer, walletReducer} = getState();
        const {web3, contracts} = web3Reducer;

        const chainId = await web3.eth.getChainId();

        const l2 = contracts[`l2_${chainId}`];
        const reroutedAddress = await l2.methods.reroutedContract().call();
        const erc20_contract = new web3.eth.Contract(ERC20ABI, reroutedAddress);

        const tx = await erc20_contract.methods.approve(l2.options.address, MAX_INT);

        try {
            await tx.send({
                from: walletReducer.currentAccount
            });
        } catch (e){ throw e;}
    }
}

export const start_transfer_tx_l2 = txData => {

    return async(dispatch, getState) => {
        // const {/*receiver,*/ ammount, extraFee, fee, pair, token} = txData;
        // const {token} = txData;
        // const tokenData = JSON.stringify(token);
        const {web3Reducer, walletReducer} = getState();
        const {contracts} = web3Reducer;


        const chainId = walletReducer.networkId;

        // const decimals = await contracts['l2_97'].methods.decimals().call();

        // console.log(contracts[`bridge_${chainId}`].methods);
        console.log(contracts[`user_interface_bridge_${chainId}`].methods);
        // const tx = await contracts[`user_interface_bridge_${chainId}`].methods.transfer(
        //     receiver,
        //     '0x0000000000000000000000000000000000000000',
        //     (ammount * 10 ** decimals).toString(),
        //     (fee * 10 ** decimals).toString(),
        //     (extraFee * 10 ** decimals).toString(),
        //     chainId
        // );

        // const gas = await tx.estimateGas({
        //     from: walletReducer.currentAccount
        // });

        try {
            // await tx.send({
            //     from: walletReducer.currentAccount,
            //     // gas
            // });
            //console.log('successful tx');

        } catch (e) {

        }

    }

}

export const start_transfer_tx = txData => {
    return async (dispatch, getState) => {

        dispatch( tx_loading( txs.TRANSFER_REGULAR_TKN ) );

        const {receiver, amount, extraFee, fee, /*pair,*/ token, to} = txData;
        const {web3Reducer, walletReducer} = getState();
        const {contracts} = web3Reducer;
        const chainId = walletReducer.networkId;

        const tokenData = JSON.parse(token);
        console.log(tokenData);
        const decimals = tokenData.decimals;

        console.log( contracts[`user_interface_bridge_${chainId}`].methods );


        const tx = await contracts[`user_interface_bridge_${chainId}`].methods.transfer(
            receiver,
            '0x0000000000000000000000000000000000000000',
            (amount * 10 ** decimals).toString(),
            (fee * 10 ** decimals).toString(),
            (extraFee * 10 ** decimals).toString(),
            to
        );

        try {
            await tx.send({
                from: walletReducer.currentAccount
            });
            dispatch( tx_success( txs.TRANSFER_REGULAR_TKN ) );
        } catch (e) {
            dispatch( tx_failed( txs.TRANSFER_REGULAR_TKN ) );
        }
        finally{
            const txStatus = getState().txReducer[txs.TRANSFER_REGULAR_TKN];

            if(txStatus.success)
                notificationStore.addNotification( successNotification("Tx successful", `sent ${amount} ${tokenData.name} to ${receiver}`) );

            if(txStatus.error)
                notificationStore.addNotification( errorNotification("Tx failed", "sorry, something wen't wrong") );

        }
    }
}
