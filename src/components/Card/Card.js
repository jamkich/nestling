import { useEffect, useState } from 'react';
import { CardWrapper, Quote } from './Card.styles';

const Card = () => {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    fetch('/kanye')
      .then((res) => res.json())
      .then(({ kanye_quotelist }) => setQuote(kanye_quotelist));
  }, []);
  console.log();

  return quote.map(({ color, image, quote }, idx) => (
    <CardWrapper color={color} key={idx}>
      <img src={image} alt="Kanye West" />
      <Quote>{quote}</Quote>
    </CardWrapper>
  ));
};

export default Card;
