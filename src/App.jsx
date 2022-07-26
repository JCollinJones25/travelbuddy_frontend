import './App.css';
import Input from './components/Input';
import Trips from './components/Trips';

const App = () => {

  // const URL = "https://pernappbackend.herokuapp.com/trips";

  return (
    <div className="App">
      <Trips />
      <Input />
    </div>
  );
}

export default App;
