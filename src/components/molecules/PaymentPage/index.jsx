import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../atoms/button/Button';
import {
  DPIconBack,
  DPIconCard,
  DPIconCardIcon,
  DPIconLocation,
  DPIconTransfer,
} from '../../gallery/icons';
import {
  CardBox,
  DescriptionContainer,
  PaymentBox,
  PaymentContainer,
  PaymentCTA,
  PaymentDescription,
  PaymentImage,
  PaymentWrapper,
  TransferBox,
} from './styles';

function PaymentPage() {
  const [showCards, setShowCards] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (showCards && ref.current && !ref.current.contains(e.target)) {
        setShowCards(false);
      }
    };

    document.body.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.body.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [showCards]);

  const { state } = useLocation();

  const [activeCard, setActiveCard] = useState(1);
  const purchaseData = state?.purchase_details.values;
  const { location, date, time, ticket } = purchaseData;
  const { singleMovie } = useSelector((state) => state.movie);
  const { paymentMethod } = useSelector((state) => state.payment);

  const { backdrop_path, original_title } = singleMovie;

  const genres = singleMovie?.genres;

  const API_IMG = 'https://image.tmdb.org/t/p/w400/';
  const movieImg = `${API_IMG}${backdrop_path}`;
  const navigate = useNavigate();
  const next = () => {
    navigate('/reciept', { state: { purchaseData: purchaseData } });
  };

  return (
    <>
      <CardBox showCards={showCards} ref={ref}>
        <div className="handle-box">
          <div className="handle"></div>
        </div>
        <h1> Choose card to Pay with:</h1>

        {!!paymentMethod.length ? (
          paymentMethod.map(({ card }, idx) => {
            let lastFourDigits = card.substr(card.length - 4);
            return (
              <div
                className={`added-card ${activeCard === idx ? 'active' : ''}  `}
                key={idx}
                onClick={() => setActiveCard(idx)}
              >
                <div>
                  <DPIconCardIcon />
                </div>
                <p>**** **** **** {lastFourDigits}</p>
              </div>
            );
          })
        ) : (
          <div>
            <p className="no-card__header">No Card Added </p>
            <Button
              onClick={() => navigate('/payment-edit')}
              className="add-card__btn"
            >
              Add Card
            </Button>
          </div>
        )}
        {/* {paymentMethod?.map(({ card }, idx) => {
          var lastFourDigits = card.substr(card.length - 4);

          !!paymentMethod?.length ? (
            <div key={idx}>
              <p className="no-card__header">No Card Added </p>
              <Button
                onClick={() => navigate('/payment-edit')}
                className="add-card__btn"
              >
                Add Card
              </Button>
            </div>
          ) : (
            <div
              className={`added-card ${activeCard === idx ? 'active' : ''}  `}
              key={idx}
              onClick={() => setActiveCard(idx)}
            >
              <div>
                <DPIconCardIcon />
              </div>
              <p>**** **** **** {lastFourDigits}</p>
            </div>
          );
        })} */}

        <PaymentCTA>
          <Button onClick={next} className="payment-btn">
            Pay N{state?.price}
          </Button>
        </PaymentCTA>
      </CardBox>

      <PaymentWrapper>
        <span onClick={() => navigate('/purchase')}>
          <DPIconBack />
        </span>
        <PaymentContainer>
          <PaymentImage src={movieImg} alt="booked movie" />
          <PaymentDescription>
            <h1 className="title">{original_title}</h1>
            {genres?.map(({ name }, idx) => (
              <span className="genre" key={idx}>
                {' '}
                {name}
              </span>
            ))}
            <div className="location">
              <span>
                <DPIconLocation />
              </span>
              <p>{location}</p>
            </div>
          </PaymentDescription>
        </PaymentContainer>

        <DescriptionContainer>
          <div className="description-item">
            <p>Day</p>
            <p>{date}</p>
          </div>
          <div className="description-item">
            <p>Time</p>
            <p>{time}</p>
          </div>
          <div className="description-item">
            <p>Tickets</p>
            <p>{ticket}</p>
          </div>
        </DescriptionContainer>

        <PaymentBox>
          <h1 className="payment-header">Choose how to pay</h1>
          <div className="payment-option">
            <span>
              <DPIconTransfer />
            </span>
            <p className="payment-option__header">Transfer</p>
          </div>
          <div className="payment-option" onClick={() => setShowCards(true)}>
            <span>
              <DPIconCard />
            </span>
            <p className="payment-option__header">Card</p>
          </div>
        </PaymentBox>
        <TransferBox></TransferBox>

        {/* <PaymentCTA>
          <Button onClick={next} className="payment-btn">
            Pay N{state?.price}
          </Button>
        </PaymentCTA> */}
      </PaymentWrapper>
    </>
  );
}

export default PaymentPage;
