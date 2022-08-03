import './App.css';
import Header from "./components/Header"
import Input from './components/Input';
import Trips from './components/Trips';

const App = () => {

  const URL = "https://travelbuddy-planner.herokuapp.com";

  return (
    <div className="App">
      <Header />
      <Trips URL={URL}/>
      <Input URL={URL}/>
    </div>
  );
}

export default App;
