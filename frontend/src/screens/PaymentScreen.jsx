import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savePaymentMethod } from "../slices/cartSlice";
import { Form, Button, Col, FormGroup, FormCheck, FormLabel } from "react-bootstrap"
import FormContainer from '../components/FormContainer';
import CheckoutSteps from "../components/CheckoutSteps";

const PaymentScreen = () => {
    const [paymentMethod, setPaymentMethod] = useState('PayPal');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;

    useEffect(() => {
        if(!shippingAddress){
            navigate('/shipping');
        }
    }, [shippingAddress, navigate])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        navigate('/placeorder');
    }
  return (
    <FormContainer>
        <CheckoutSteps step1 step2 step3/>
        <h1>Payment Method</h1>
        <Form onSubmit={submitHandler}>
            <FormGroup>
                <FormLabel as='legend'>Select Method</FormLabel>
                <Col>
                    <FormCheck
                        type="radio"
                        className="my-2"
                        label="PayPal or Credit Card"
                        id="PayPal"
                        name="paymentMethod"
                        value="PayPal"
                        checked
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    ></FormCheck>
                    <Button type="submit" variant="primary">Continue</Button>
                </Col>
            </FormGroup>
        </Form>
    </FormContainer>
  )
}

export default PaymentScreen