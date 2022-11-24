import './App.css';
import Cities from './components/Cities';
import Quote from './components/Quote';

function App() {



  return (
    <div >

      <div className="Quote">
        <h1>Quote of the day</h1>
        <Quote />
      </div>

      <div className='City'>
        <h1>Cities of Ukraine</h1>
        <Cities />
      </div>
    </div>
  );
}

export default App;
