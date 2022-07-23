import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/button/Button';
import Input from '../../atoms/Input/Input';
import { removePayment, updatePayment } from '../../features/redux/Payment';
import { DPIconBack } from '../../gallery/icons';
import CardComponent from '../userCard';
import {
  PaymentCardField,
  PaymentCardForm,
  PaymentCardLabel,
  PaymentEditContainer,
  PaymentEditHeader,
  PaymentEditWrapper,
} from './styles';

function PaymenttEdit() {
  const { paymentMethod } = useSelector((state) => state.payment);
  const navigate = useNavigate();
  const [addCard, setAddCard] = useState(false);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      expiry: '',
      securityPin: '',
    },
    onSubmit: (values) => {
      const payload = {
        name: values.cardName,
        card: values.cardNumber,
        expiry: values.expiry,
        cvc: values.securityPin,
      };
      dispatch(updatePayment(payload));
      setAddCard(false);
    },
  });
  return (
    <PaymentEditWrapper>
      <span className="back-btn" onClick={() => navigate('/profile')}>
        <DPIconBack />
      </span>

      <PaymentEditContainer>
        <PaymentEditHeader>Payment Information</PaymentEditHeader>

        {paymentMethod?.map(({ card, expiry, id }) => {
          var lastFourDigits = card.substr(card.length - 4);

          return (
            <CardComponent
              card={lastFourDigits}
              expiry={expiry}
              onClick={() => dispatch(removePayment(id))}
              key={id}
            />
          );
        })}

        {addCard && (
          <PaymentCardForm onSubmit={formik.handleSubmit}>
            <h2>Credit Card Information</h2>
            <p>Fill in your details in the boxes provided</p>

            <PaymentCardField>
              <PaymentCardLabel>Name on Card</PaymentCardLabel>
              <Input
                id="cardName"
                name="cardName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cardName}
              />
            </PaymentCardField>
            <PaymentCardField>
              <PaymentCardLabel>Card Number</PaymentCardLabel>
              <Input
                id="cardNumber"
                name="cardNumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cardNumber}
                placeholder="*** *** ***"
              />
            </PaymentCardField>
            <div className="card-info">
              <PaymentCardField>
                <PaymentCardLabel>Expiry Date</PaymentCardLabel>
                <Input
                  id="expiry"
                  name="expiry"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.expiry}
                  placeholder="MM/YY"
                />
              </PaymentCardField>
              <PaymentCardField>
                <PaymentCardLabel>Security Code</PaymentCardLabel>
                <Input
                  id="securityPin"
                  name="securityPin"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.securityPin}
                  placeholder="CVC"
                />
              </PaymentCardField>
            </div>

            <Button type="submit" className="add-card__btn">
              Save Card
            </Button>
          </PaymentCardForm>
        )}
        <Button
          onClick={() => setAddCard((prev) => !prev)}
          className="add-card__btn"
        >
          {addCard ? 'Cancel' : 'Add Card'}
        </Button>
      </PaymentEditContainer>
    </PaymentEditWrapper>
  );
}

export default PaymenttEdit;
