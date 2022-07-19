import './App.css';
import { Fragment } from "react"
import Input from './components/Input';
import Trips from './components/Trips';
import Edit from './components/Edit';

const App = () => {

  const URL = "https://pernappbackend.herokuapp.com/";

  return (
    <div className="App">
      <Fragment>
        <h3>react frontend</h3>
        <Input URL={URL}/>
        <Trips URL={URL}/>
        <Edit />
      </Fragment>
    </div>
  );
}

export default App;
