import './App.css';
import Input from './components/Input';
import Trips from './components/Trips';
import Edit from './components/Edit';

const App = () => {

  // const URL = "https://pernappbackend.herokuapp.com/trips";

  return (
    <div className="App">
      <Input />
      <Trips />
      <Edit />
    </div>
  );
}

export default App;
