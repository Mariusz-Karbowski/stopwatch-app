import { useEffect, useState } from "react";
import FormattedTime from "./components/FormattedTime/FormattedTime";
import Buttons from "./components/Buttons/Buttons";
import Container from "./components/Container/Container";


const App = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(null);
  useEffect(() => {
    let stopwatch = null;
    if(start) {
      stopwatch = setInterval(() => {
        setTime(prevValue => prevValue + 1)
      }, 1)
    }
    return() => {
      if(stopwatch) clearInterval(stopwatch)
    };
  }, [start]);
  return (
    <Container>      
      <FormattedTime time={time} />
      <Buttons setTime={setTime} setStart={setStart}></Buttons>      
    </Container>
  );
}
export default App;
