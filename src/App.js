import { useEffect, useState } from 'react';
import { Wrapper } from './App.styles';

const App = () => {
  const [quote, setQuote] = useState();

  // useEffect(() => {
  //   fetch('/kanye')
  //     .then((res) => console.log(res))
  //     .then((data) => setQuote(data));
  // }, [quote]);

  return <Wrapper>hi</Wrapper>;
};

export default App;
