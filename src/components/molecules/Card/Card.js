import { CardWrapper } from './Card.styles';
import Quote from '../../atoms/Quote/Quote.styles';

const Card = ({ color, image, quote, idx }) => (
  <CardWrapper color={color} key={idx}>
    <img src={image} alt="Kanye West" />
    <Quote>{quote}</Quote>
  </CardWrapper>
);

export default Card;
