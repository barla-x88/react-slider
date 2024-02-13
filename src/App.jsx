import { useEffect, useState } from 'react';
import './App.css';
import { linuxDistros } from './data';
import { AiFillCaretLeft } from 'react-icons/ai';
import { AiFillCaretRight } from 'react-icons/ai';

function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(autoSlide);
    };
  }, [activeSlide]);

  const prevSlide = () => {
    setActiveSlide((oldSlide) => {
      return oldSlide === 0 ? linuxDistros.length - 1 : oldSlide - 1;
    });
  };

  const nextSlide = () => {
    setActiveSlide((oldSlide) => {
      return oldSlide + 1 < linuxDistros.length ? oldSlide + 1 : 0;
    });
  };
  return (
    <div className="slide-container">
      <h1>Popular Linux Distros</h1>
      {linuxDistros.map((distro, index) => {
        const {
          distroName,
          description,
          firstRelease,
          currentVersion,
          distroLogo,
          officialWebsite,
        } = distro;
        return (
          <div
            className="slide"
            key={index}
            style={{
              transform: `translate(${(index - activeSlide) * 100}%`,
            }}
          >
            <div className="img">
              <img src={distroLogo} alt={distroName} />
            </div>
            <h2>{distroName}</h2>
            <p>{description}</p>
            <p>First Release - {firstRelease}</p>
            <p>Current Version - {currentVersion}</p>
            <a href={officialWebsite} className="download-btn">
              Download linuxDistros
            </a>
          </div>
        );
      })}
      <button className="prev btn" onClick={prevSlide}>
        <AiFillCaretLeft />
      </button>
      <button className="next btn" onClick={nextSlide}>
        <AiFillCaretRight />
      </button>
    </div>
  );
}

export default App;
