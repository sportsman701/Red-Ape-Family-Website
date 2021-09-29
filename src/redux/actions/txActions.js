import {
    TX_LOADING,
    TX_FAILED,
    TX_SUCCESS
} from '../constants';

// import { store as notificationStore } from 'react-notifications-component';
// import {successNotification, errorNotification} from 'notifications';


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

/* *~~*~~*~~*~~*~~*~~* TX THUNK ACTIONS *~~*~~*~~*~~*~~*~~* */
export const start_minting_tx = txData => {
    return async (dispatch, getState) => {

        dispatch( tx_loading( 'MINT_TX' ) );

        const {web3Reducer, walletReducer} = getState();
        const {contracts} = web3Reducer;

        const erc_contract = web3Reducer.contracts['ERC_CONTRACT'];

        const tx = await erc_contract.methods._mint( walletReducer.currentAccount, txData.episodeId.toString(), txData.amount.toString() );

        try {
            await tx.send({
                from: walletReducer.currentAccount,
                value: txData.value
            });
            // dispatch( tx_success( txs.TRANSFER_REGULAR_TKN ) );
        } catch (e) {
            // dispatch( tx_failed( txs.TRANSFER_REGULAR_TKN ) );
            console.log(e);
        }
        finally{
            // const txStatus = getState().txReducer[txs.TRANSFER_REGULAR_TKN];

            // if(txStatus.success)
            //     notificationStore.addNotification( successNotification("Tx successful", `sent ${amount} ${tokenData.name} to ${receiver}`) );
            //
            // if(txStatus.error)
            //     notificationStore.addNotification( errorNotification("Tx failed", "sorry, something wen't wrong") );

        }
    }
}
