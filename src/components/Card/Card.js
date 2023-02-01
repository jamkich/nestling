import { CardWrapper, Quote } from './Card.styles';

const Card = ({ color, image, quote, idx }) => (
  <CardWrapper color={color} key={idx}>
    <img src={image} alt="Kanye West" />
    <Quote>{quote}</Quote>
  </CardWrapper>
);

export default Card;
