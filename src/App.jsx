import './App.css';
import { Fragment } from "react"
import Input from './components/Input';
import Trips from './components/Trips';
import Edit from './components/Edit';

const App = () => {

  // const URL = "https://pernappbackend.herokuapp.com/trips";

  return (
    <div className="App">
      <Fragment>
        <Input />
        <Trips />
        <Edit />
      </Fragment>
    </div>
  );
}

export default App;
