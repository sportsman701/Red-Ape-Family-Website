import {useState, useEffect} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import {connect} from 'react-redux';
import {request_change_network, check_connected_to_operating_network} from 'redux/actions/walletActions';
import {start_minting_tx} from 'redux/actions/txActions';


const Form = props => {

    const [webData, setWebData] = useState(null);
    // console.log(webData);
    const erc_contract = props.web3Reducer.contracts['ERC_CONTRACT'];
//console.log(props.wallet.con);
    useEffect(
        () => {
            props.check_connected_to_operating_network();
        }, [props.wallet.networkId]
    );

    useEffect(
        () => {
            getWebData();
        }, [props.wallet.connectedToOperatingNetwork]
    );

    useEffect(
        () => {
            getWebData();
        }, [props.wallet.currentAccount]
    );


    const getWebData = async () => {
        if(props.wallet.connectedToOperatingNetwork){
            let webData = null;
            try {
                webData = await erc_contract.methods.webData(props.wallet.currentAccount).call();
                webData = {
                    ...webData,
                    mintsLeft: webData.maxMint - webData.userMints
                }
            } catch (e) {
                console.log('ERROR CONSULTING DATA', e);
            }finally{
                setWebData(webData);
            }
        }
        else{
            setWebData(null);
        }
    }



    const validationSchema = Yup.object().shape({
        mintQuantity: Yup.number()
    });

    const formik = useFormik({
        initialValues: {
            mintQuantity: 1,
        },
        // validationSchema: validationSchema,
        onSubmit: async values => {
            // alert(JSON.stringify(values, null, 2));
            const wallet = props.wallet;

            // const webData = await erc_contract.methods.webData(props.wallet.currentAccount).call();

            await props.start_minting_tx({
                value: Number(webData.price) * Number(values.mintQuantity),
                amount:  Number(values.mintQuantity),
                episodeId: webData.episode
            });
        },
    });

    useEffect(
        () => {
            getWebData();
            formik.setFieldValue("mintQuantity", 1);
        }, [props.txReducer.MINT_TX.success]
    );


    const onIncreaseClicked = e => {
        if(webData == null) return;


        if( Number(formik.values.mintQuantity) < webData.mintsLeft)
            formik.setFieldValue( "mintQuantity",  Number(formik.values.mintQuantity) + 1 );

    }

    const onDecreaseClicked = e => {
        if(webData == null) return;

        if( Number(formik.values.mintQuantity) > 1)
            formik.setFieldValue( "mintQuantity",  Number(formik.values.mintQuantity) - 1 );
    }

    return(
        <form onSubmit={formik.handleSubmit}>
            <div className="has-text-centered" >

                <div className="control">
                    <input className="is-hidden" name="mintQuantity" type="number" onChange={formik.handleChange} value={formik.values.mintQuantity}/>
                </div>


                <br/>
                <br/>

                {
                    props.wallet.currentAccount ? (
                        props.wallet.connectedToOperatingNetwork ?
                            <div>
                                {
                                    webData == null ?
                                        null
                                    :
                                        <h1 className="subtitle">Your mints: {webData.userMints}</h1>
                                }
                                <button className="button is-info is-rounded" type="button" style={{height: '40px', width: '40px'}} onClick={onDecreaseClicked} disabled={ Number(formik.values.mintQuantity) == 1}>-</button> &nbsp;
                                <button className={`button is-info is-rounded ${props.txReducer.MINT_TX.loading ? 'is-loading' : ''} `} type="submit" disabled={!props.wallet.connectedToOperatingNetwork || !(webData && webData.mintsLeft > 0)} >MINT {formik.values.mintQuantity}</button> &nbsp;
                                <button className="button is-info is-rounded" type="button" style={{height: '40px', width: '40px'}} onClick={onIncreaseClicked} disabled={ (webData && webData.mintsLeft == formik.values.mintQuantity) }>+</button>
                            </div>
                        :
                            <button type="button" className="button is-info" onClick={e => props.request_change_network(4)}>
                                Switch to ETH Mainnet
                            </button>
                    ) : (
                        <div>To start minting please connect the app to your wallet</div>
                    )

                }

                <div>{(webData && webData.mintsLeft == 0) ? 'You have reached the minting limit for this episode! Thank you so much!' : ''}</div>
                <br/>
                <br/>
                <p className="has-text-centered has-text-weight-bold">
                    The Mint of the Red Ape Family episode 1 is now live!
                    <br/>
                    This is the first ever animated comedy series featuring Bored Apes, and only 333 tokens are available!
                    <br/>
                    It is also the first animated serie in history build on and starring NFTs!
                    <br/>
                    Don't sleep on this one!
                </p>
            </div>
        </form>
    );
}

const mapStateToProps = state => ({
    wallet: state.walletReducer,
    web3Reducer: state.web3Reducer,
    txReducer: state.txReducer
});
export default connect(
    mapStateToProps,
    {
        request_change_network,
        check_connected_to_operating_network,
        start_minting_tx
    }
)(Form);
