import './App.css';
import Counter from './components/Counter';
import Greeter from './components/Greeter';
import List from './components/List';

function App(props) {
  return (
    <>
      <h1> React tutorials : {props.message} </h1>
      <Greeter name="greeter Abhi"></Greeter>
      <Greeter name="greeter K"></Greeter>
      <Counter></Counter>
      <List></List>
    </>
  );
}

export default App;
