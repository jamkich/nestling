import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { useState, useEffect } from 'react';
import Card from '../../molecules/Card/Card';

const CardCarousel = () => {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    fetch('/kanye')
      .then((res) => res.json())
      .then(({ kanye_quotelist }) => setQuote(kanye_quotelist));
  }, []);
  console.log(quote);

  return (
    <Carousel axis="vertical" showArrows={true} showThumbs={false}>
      {quote ? quote.map(({ color, image, quote }, idx) => <Card key={idx} color={color} image={image} quote={quote} />) : null}
    </Carousel>
  );

  // DONE  map card in carousel, detect why map is not working actually
};

export default CardCarousel;
