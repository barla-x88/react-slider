import { useState } from 'react';
import './App.css';
import { data } from './data';

function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => {
    setActiveSlide((oldSlide) => {
      return oldSlide === 0 ? data.length - 1 : oldSlide - 1;
    });
  };

  const nextSlide = () => {
    setActiveSlide((oldSlide) => {
      return oldSlide + 1 < data.length ? oldSlide + 1 : 0;
    });
  };
  return (
    <div className="slide-container">
      {data.map((person, index) => {
        return (
          <div
            className="slide"
            key={index}
            style={{
              transform: `translate(${(index - activeSlide) * 100}%`,
            }}
          >
            <h1>{person.name}</h1>
            <p>{person.text}</p>
          </div>
        );
      })}
      <button className="prev btn" onClick={prevSlide}>
        prev
      </button>
      <button className="next btn" onClick={nextSlide}>
        next
      </button>
    </div>
  );
}

export default App;
