import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../atoms/button/Button';
import {
  RecieptContainer,
  RecieptDetails,
  RecieptDetailsBox,
  RecieptHeader,
  RecieptImg,
  RecieptTitle,
  RecieptWrapper,
} from './styles';

function PaymentReciept() {
  const { singleMovie } = useSelector((state) => state.movie);
  const { state } = useLocation();
  const { location, date, time, ticket } = state?.purchaseData;
  const { backdrop_path, original_title } = singleMovie;

  const API_IMG = 'https://image.tmdb.org/t/p/w400/';
  const movieImg = `${API_IMG}${backdrop_path}`;
  const navigate = useNavigate();
  return (
    <RecieptWrapper>
      <RecieptContainer>
        <RecieptHeader>Purchase Summary</RecieptHeader>
        <RecieptImg src={movieImg} alt="movie purchased" />
        <RecieptTitle>{original_title}</RecieptTitle>
        <RecieptDetailsBox>
          <RecieptDetails>
            <p>No. of tickets</p>
            <p>{ticket}</p>
          </RecieptDetails>
          <RecieptDetails>
            <p>Day</p>
            <p>{date}</p>
          </RecieptDetails>
          <RecieptDetails>
            <p>Time</p>
            <p>{time}</p>
          </RecieptDetails>
          <RecieptDetails>
            <p>Location</p>
            <p>{location}</p>
          </RecieptDetails>
        </RecieptDetailsBox>

        <Button className="download-btn">Download Reciept</Button>

        <Button onClick={() => navigate('/')} className="cancel-btn">
          Cancel
        </Button>
      </RecieptContainer>
    </RecieptWrapper>
  );
}

export default PaymentReciept;
