import {useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Form = props => {

    const validationSchema = Yup.object().shape({
        mintQuantity: Yup.number()
    });

    const formik = useFormik({
        initialValues: {
            mintQuantity: 0,
        },
        // validationSchema: validationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const onIncreaseClicked = e => {


        if( Number(formik.values.mintQuantity) < 5){
            console.log('si');
            formik.setFieldValue( "mintQuantity",  Number(formik.values.mintQuantity) + 1 );
        }

    }

    const onDecreaseClicked = e => {
        if( Number(formik.values.mintQuantity) > 0)
            formik.setFieldValue( "mintQuantity",  Number(formik.values.mintQuantity) - 1 );
    }

    return(
        <form onSubmit={formik.handleSubmit}>
            <div className="has-text-centered" >

                <div class="control">
                    <input className="is-hidden" name="mintQuantity" type="number" onChange={formik.handleChange} value={formik.values.mintQuantity}/>
                </div>

                <button className="button is-info is-rounded" type="button" style={{height: '40px', width: '40px'}} onClick={onDecreaseClicked} disabled={Number(formik.values.mintQuantity) == 0}>-</button> &nbsp;
                <button className="button is-info is-rounded" type="submit">MINT {formik.values.mintQuantity}</button> &nbsp;
                <button className="button is-info is-rounded" type="button" style={{height: '40px', width: '40px'}} onClick={onIncreaseClicked} disabled={Number(formik.values.mintQuantity) == 5}>+</button>
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

export default Form;
