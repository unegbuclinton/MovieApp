import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/button/Button';
import Input from '../../atoms/Input/Input';
import { updateUser } from '../../features/redux/UserData';
import { DPIconBack, DPIconCamera } from '../../gallery/icons';
import myImg from '../../gallery/img/myImg.JPG';
import { InfoContainer, InfoForm, InfoImg, InfoWrapper } from './styles';

function BasicInformation() {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      phone: user?.phone,
    },
    onSubmit: (values) => {
      const payload = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
      };
      dispatch(updateUser(payload));
      navigate('/profile');
    },
  });
  return (
    <InfoWrapper>
      <span className="back-btn" onClick={() => navigate('/profile')}>
        <DPIconBack />
      </span>
      <InfoContainer>
        <InfoImg src={myImg} alt="img" />
        <span className="image-pointer"></span>
        <div className="edit-icon">
          <DPIconCamera />
        </div>
      </InfoContainer>
      <InfoForm onSubmit={formik.handleSubmit}>
        <Input
          id="firstName"
          name="firstName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          className="info-input"
          placeholder="First Name"
        />
        <Input
          id="lastName"
          name="lastName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          className="info-input"
          placeholder="Last Name"
        />
        <Input
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="info-input"
          placeholder="Email"
        />
        <Input
          id="phone"
          name="phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
          className="info-input"
          placeholder="Phone"
        />

        <Button type="submit" className="info-submit">
          Submit
        </Button>
      </InfoForm>
    </InfoWrapper>
  );
}

export default BasicInformation;
