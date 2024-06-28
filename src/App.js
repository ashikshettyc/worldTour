import logo from './logo.svg';
import './App.css';
import Tours from './Components/Tours';

function App() {
  return (
    <div className="App">
      <div className="bg-[#00bfff] p-5 flex justify-center items-center">
        <p className="text-white font-bold text-5xl ">World Tour</p>
      </div>
      <div>
        <Tours />
      </div>
    </div>
  );
}

export default App;
