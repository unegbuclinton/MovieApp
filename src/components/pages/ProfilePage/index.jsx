import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/button/Button';
import {
  DPIconForwardIcon,
  DPIconInfo,
  DPIconLanguage,
  DPIconNotification,
  DPIconPaymentIcon,
} from '../../gallery/icons';
import myImg from '../../gallery/img/myImg.JPG';
import BodyLayout from '../../layout/BodyLayout/BodyLayout';
import {
  ProfileContainer,
  ProfileImg,
  ProfileInfo,
  ProfileItem,
  ProfileText,
  ProfileWrapper,
} from './styles';

function ProfilePage() {
  const navigate = useNavigate();
  const profileInfo = [
    {
      name: 'Basic Information',
      beforeIcon: <DPIconInfo />,
      afterIcon: <DPIconForwardIcon />,
      onClick: () => {
        navigate('/info');
      },
    },
    {
      name: 'Payment Details',
      beforeIcon: <DPIconPaymentIcon />,
      afterIcon: <DPIconForwardIcon />,
      onClick: () => {
        navigate('/payment-edit');
      },
    },
    {
      name: 'Notification',
      beforeIcon: <DPIconNotification />,
      afterIcon: <DPIconForwardIcon />,
    },
    {
      name: 'Language',
      beforeIcon: <DPIconLanguage />,
      afterIcon: <DPIconForwardIcon />,
      onClick: () => {
        navigate('/language');
      },
    },
    {
      name: 'Help',
      beforeIcon: <DPIconInfo />,
      afterIcon: <DPIconForwardIcon />,
    },
  ];
  const { user } = useSelector((state) => state.user);
  return (
    <BodyLayout>
      <ProfileWrapper>
        <ProfileInfo>
          <ProfileImg src={myImg} alt="img" />
          <ProfileText>
            {user?.firstName} {user?.lastName}
          </ProfileText>
          <Button className="profile-btn">Edit Profile</Button>
        </ProfileInfo>
        <ProfileContainer>
          {profileInfo?.map(({ name, beforeIcon, afterIcon, onClick }, idx) => (
            <ProfileItem key={idx + 1} onClick={onClick}>
              <div className="profile-item__left">
                {beforeIcon}
                <ProfileText>{name}</ProfileText>
              </div>
              {afterIcon}
            </ProfileItem>
          ))}
        </ProfileContainer>
      </ProfileWrapper>
    </BodyLayout>
  );
}

export default ProfilePage;
