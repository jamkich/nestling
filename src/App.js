import { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState();

  useEffect(() => {
    fetch("/kanye")
      .then((res) => res.json())
      .then((data) => setQuote(data));
  }, [quote]);

  return <h1>{quote}</h1>;
}

export default App;
