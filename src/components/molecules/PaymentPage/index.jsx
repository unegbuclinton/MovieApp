import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../atoms/button/Button';
import {
  DPIconBack,
  DPIconCard,
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
  const { state } = useLocation();

  const purchaseData = state?.purchase_details.values;
  const { location, date, time, ticket } = purchaseData;
  const { singleMovie } = useSelector((state) => state.movie);
  const { backdrop_path, original_title } = singleMovie;

  const genres = singleMovie.genres;

  const API_IMG = 'https://image.tmdb.org/t/p/w400/';
  const movieImg = `${API_IMG}${backdrop_path}`;
  const navigate = useNavigate();
  const next = () => {
    navigate('/reciept', { state: { purchaseData: purchaseData } });
  };
  return (
    <PaymentWrapper>
      <span onClick={() => navigate('/purchase')}>
        <DPIconBack />
      </span>
      <PaymentContainer>
        <PaymentImage src={movieImg} alt="booked movie" />
        <PaymentDescription>
          <h1 className="title">{original_title}</h1>
          {genres?.map(({ name }) => (
            <span className="genre"> {name}</span>
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
        <div className="payment-option">
          <span>
            <DPIconCard />
          </span>
          <p className="payment-option__header">Card</p>
        </div>
      </PaymentBox>
      <TransferBox></TransferBox>
      <CardBox></CardBox>
      <PaymentCTA>
        <Button onClick={next} className="payment-btn">
          Pay N{state?.price}
        </Button>
      </PaymentCTA>
    </PaymentWrapper>
  );
}

export default PaymentPage;
