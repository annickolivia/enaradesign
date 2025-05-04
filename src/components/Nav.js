import React, { useRef, useState, useEffect } from 'react';
import { mainColors } from '../styles/variables';
import { Link } from 'react-router-dom';

// 
function Dropdown({ title, path, items = [], clicked, setClicked }) {
  const contentRef = useRef(null);
  const isOpen = clicked === title.toLowerCase();
  const [height, setHeight] = useState('0px');
  const [opacity, setOpacity] = useState(0);
  const [translateY, setTranslateY] = useState('-20px');

  useEffect(() => {
    if (isOpen) {
      setHeight(`${contentRef.current.scrollHeight}px`);
      setOpacity(1);
      setTranslateY('0px');
    } else {
      setHeight('0px');
      setOpacity(0);
      setTranslateY('-20px');
    }
  }, [isOpen]);

  return (
    <div className="w-full flex flex-col items-center relative transition-all duration-300">
      <Link
        to={`/${path}`}
        className="pages px-4 py-2 rounded-md text-4xl font-medium text-white transition duration-300"
        onClick={(e) => {
          e.preventDefault(); // Prevent immediate navigation
          if (isOpen) setClicked('');
          else setClicked(title.toLowerCase());
        }}
      >
        {title}
      </Link>

      <div
        ref={contentRef}
        style={{
          maxHeight: height,
          opacity: opacity,
          transform: `translateY(${translateY})`,
          transition: 'max-height 0.4s ease, opacity 0.3s ease, transform 0.3s ease',
        }}
        className="overflow-hidden w-48"
      >
        <ul className="rounded-md shadow-lg bg-none">
          {items.map((p, index) => (
            <li 
              key={index} 
              className="text-base text-left pl-10 text-white"
              style={{
                transition: `transform 0.3s ease ${index * 0.1}s, opacity 0.3s ease ${index * 0.1}s`,
                transform: isOpen ? 'translateX(0)' : 'translateX(-20px)',
                opacity: isOpen ? 1 : 0
              }}
            >
              <Link
                to={`/${p.toLowerCase()}`}
                className="block px-4 py-2 text-lg"
                style={{ color: "rgb(222,222,222)" }}
              >
                {p}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Nav({ clicked, setClicked, services, PortCateg, articles }) {
  return (
    <div className="h-96 pt-2 pb-3 space-y-1 px-3 flex flex-col justify-center items-center transition duration-300 origin-left md:w-1/2">
      <Link
        to="/accueil"
        className="pages px-4 py-2 rounded-md text-4xl font-medium text-white transition duration-300"
        onClick={() => setClicked(clicked === 'accueil' ? '' : 'accueil')}
      >
        Accueil
      </Link>

      <Dropdown
        title="Portfolio"
        path="portfolio"
        items={PortCateg}
        clicked={clicked}
        setClicked={setClicked}
      />
      <Dropdown
        title="Services"
        path="services"
        items={services}
        clicked={clicked}
        setClicked={setClicked}
      />
      <Dropdown
        title="Articles"
        path="articles"
        items={articles}
        clicked={clicked}
        setClicked={setClicked}
      />
    </div>
  );
}
