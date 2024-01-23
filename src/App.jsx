import './App.css';
import { data } from './data';

function App() {
  return (
    <div className="slide-container">
      {data.map((person, index) => {
        return (
          <div className="slide" key={index}>
            <h1>{person.name}</h1>
            <p>{person.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
