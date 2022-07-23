import React from 'react';
import strange from '../../gallery/img/strange.jpg';
import img from '../../gallery/img/tenet.jpg';
import uncharted from '../../gallery/img/uncharted.jpg';

import BodyLayout from '../../layout/BodyLayout/BodyLayout';
import {
  ComingSoonContainer,
  ComingSoonDescription,
  ComingSoonHeader,
  ComingSoonImg,
  ComingSoonInfo,
  ComingSoonItem,
  ComingSoonText,
  ComingSoonWrapper,
} from './styles';

function ComingSoonPage() {
  const data = [
    {
      img: img,
      date: 'July',
      day: '27th',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
      title: 'Tenet',
    },
    {
      img: strange,
      date: 'Aug',
      day: '15th',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
      title: 'Dr. strange',
    },
    {
      img: uncharted,
      date: 'May',
      day: '10th',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
      title: 'Uncharted',
    },
  ];
  return (
    <BodyLayout>
      <ComingSoonWrapper>
        <ComingSoonHeader>Coming Soon</ComingSoonHeader>
        {data?.map(({ img, date, day, desc, title }, idx) => (
          <ComingSoonItem key={idx}>
            <ComingSoonContainer>
              <ComingSoonText>
                <span>{date}</span> <span>{day}</span>
              </ComingSoonText>
              <ComingSoonImg src={img} alt="coming-movie" />
            </ComingSoonContainer>
            <ComingSoonInfo>
              {/* <p className="description">Coming Soon </p>
              <div>
                <DPIconInfoICon />
                <p className="details">More Info</p>
              </div> */}
            </ComingSoonInfo>
            <ComingSoonDescription>
              <h2>{title}</h2>
              <p>{desc}</p>
            </ComingSoonDescription>
          </ComingSoonItem>
        ))}
      </ComingSoonWrapper>
    </BodyLayout>
  );
}

export default ComingSoonPage;
