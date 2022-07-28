import './App.css';
import Header from "./components/Header"
import Input from './components/Input';
import Trips from './components/Trips';

const App = () => {

  // const URL = "https://pernappbackend.herokuapp.com/trips";

  return (
    <div className="App">
      <Header />
      <Trips />
      <Input />
    </div>
  );
}

export default App;
