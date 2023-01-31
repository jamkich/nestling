import { useEffect, useState } from 'react';
import { CardWrapper, Quote } from './Card.styles';
import kanye from '../../assets/images/ye.jpeg';

const Card = () => {
  const [quote, setQuote] = useState();

  // useEffect(() => {
  //   fetch('/kanye')
  //     .then((res) => console.log(res))
  //     .then((data) => setQuote(data));
  // }, [quote]);

  return (
    <CardWrapper>
      <img src={kanye} alt="Kanye West" />
      <Quote>"We're going to move the entire music industry into the 21st Century"</Quote>
    </CardWrapper>
  );
};

export default Card;
