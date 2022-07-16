import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/button/Button';
// import Input from '../../atoms/Input/Input';
import MovieLayout from '../../layout/movieLayout';
import SelectDropDown from '../selectDropDown';

import { PurchaseContainer, PurchaseDropdown, PurchaseWrapper } from './styles';

function PurchasePage() {
  const [price, setPrice] = useState('');

  useEffect(() => {
    const dummyPrices = [1500, 2500, 2000, 3000, 3500];

    const newPrice = Math.floor(Math.random() * dummyPrices.length);
    setPrice(dummyPrices[newPrice]);
  }, []);

  const { singleMovie } = useSelector((state) => state.movie);
  const { backdrop_path } = singleMovie;

  const API_IMG = 'https://image.tmdb.org/t/p/w400/';
  const movieImg = `${API_IMG}${backdrop_path}`;

  const locationOption = [
    { value: 'Ikeja', label: 'Ikeja City Mall' },
    { value: 'Surulere Mall', label: 'Lesiure Mall' },
    { value: 'Ikotun', label: 'Ikotun Mall' },
    { value: 'Festac Mall', label: 'Festac Mall' },
  ];

  const timeOption = [
    { value: '2:25pm', label: '2:25pm' },
    { value: '4:15pm', label: '4:15pm' },
    { value: '6:45pm', label: '6:45pm' },
    { value: '7:10pm', label: '7:10pm' },
  ];

  const dayOption = [
    { value: 'Thursday', label: 'Thur 17/08' },
    { value: 'Tuesday', label: 'Tue 15/08' },
    { value: 'Saturday', label: 'Sat 19/08' },
    { value: 'Sun', label: 'Sun 20/08' },
  ];

  const list = Array.from({ length: 20 }, (_, i) => i + 1);
  const ticketOptions = list.map((curr) => ({ value: curr, label: curr }));

  const naviagte = useNavigate();

  const formik = useFormik({
    initialValues: {
      location: '',
      date: '',
      time: '',
      ticket: '',
    },
    onSubmit: (values) => {
      const value = { values };
      naviagte('/payment', { state: { purchase_details: value, price } });
    },
  });

  return (
    <MovieLayout strange={movieImg} onClick={() => naviagte('/movie')}>
      <PurchaseWrapper onSubmit={formik.handleSubmit}>
        <PurchaseDropdown>
          <SelectDropDown
            options={locationOption}
            placeholder="Location"
            id="location"
            name="location"
            type={'text'}
            value={formik.values.location}
            onChange={(value) => formik.setFieldValue('location', value.value)}
            onBlur={formik.handleBlur}
          />
        </PurchaseDropdown>
        <PurchaseDropdown>
          {/* <Input
            type="date"
            className="purchase-input"
            id="date"
            name="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date}
          /> */}
          <SelectDropDown
            options={dayOption}
            placeholder=" Date"
            id="date"
            name="date"
            value={formik.values.location}
            onChange={(value) => formik.setFieldValue('date', value.value)}
            onBlur={formik.handleBlur}
          />
        </PurchaseDropdown>
        <PurchaseDropdown>
          {/* <Input
            type="time"
            className="purchase-input"
            id="time"
            name="time"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.time}
          /> */}
          <SelectDropDown
            options={timeOption}
            placeholder=" Time"
            id="time"
            name="time"
            value={formik.values.location}
            onChange={(value) => formik.setFieldValue('time', value.value)}
            onBlur={formik.handleBlur}
          />

          <SelectDropDown
            options={ticketOptions}
            placeholder=" Tickets"
            id="ticket"
            name="ticket"
            value={formik.values.location}
            onChange={(value) => formik.setFieldValue('ticket', value.value)}
            onBlur={formik.handleBlur}
          />
        </PurchaseDropdown>
        <PurchaseContainer>
          <div className="price-tag">
            <div className="price-tag__text">Price</div>
            <div className="price-tag__figure">N {price}</div>
          </div>
          <div className="purchase-cta">
            <Button className="purchase-cta__btn" type="submit">
              Buy Ticket
            </Button>
          </div>
        </PurchaseContainer>
      </PurchaseWrapper>
    </MovieLayout>
  );
}

export default PurchasePage;
