import './App.css';
import Data from './components/Data';

const App = () => {

  const URL = "https://pernappbackend.herokuapp.com/";

  return (
    <div className="App">
      <h3>react frontend</h3>
      <Data URL={URL}/>
    </div>
  );
}

export default App;
