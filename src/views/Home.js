import React from 'react';
import Header from 'components/organisms/Header/Header';
import UserTemplate from 'templates/UserTemplate';
import { laseroterapia, ortopedia, pielegnacja } from 'assets/data/headerList';
import first from 'assets/first.png';
import second from 'assets/second.png';
import third from 'assets/third.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import Subheading from 'components/atoms/Subheading/Subheading';
import Cards from 'components/organisms/Cards/Cards';
import Counter from 'components/atoms/Counter/Counter';

const MainWrapper = styled.main`
  padding: 0 10%;
`;

const Home = () => (
  <UserTemplate>
    <Carousel
      showStatus={!true}
      autoPlay="true"
      infiniteLoop="true"
      interval="7000"
      showThumbs={!true}
    >
      <Header
        list={ortopedia}
        type="blue"
        heading="ortopedia"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. At esse quae veniam consequuntur in dignissimos iusto ullam. Voluptas, aliquam incidunt."
        img={first}
      />
      <Header
        list={laseroterapia}
        type="white"
        heading="laseroterapia"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. At esse quae veniam consequuntur in dignissimos iusto ullam. Voluptas, aliquam incidunt."
        img={second}
      />
      <Header
        list={pielegnacja}
        type="blue"
        heading="pielęgnacja skóry"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. At esse quae veniam consequuntur in dignissimos iusto ullam. Voluptas, aliquam incidunt."
        img={third}
      />
    </Carousel>
    <MainWrapper>
      <Subheading>Nasz oferta</Subheading>
      <Cards last={5} />
      <Subheading>Nasz oferta</Subheading>
      <Counter />
    </MainWrapper>
  </UserTemplate>
);

export default Home;
