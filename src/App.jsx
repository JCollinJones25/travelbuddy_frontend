import './App.css';
import Data from './components/Data';

const App = () => {

  const URL = process.env.REACT_APP_URL;

  return (
    <div className="App">
      <h3>react frontend</h3>
      <Data URL={URL}/>
    </div>
  );
}

export default App;
