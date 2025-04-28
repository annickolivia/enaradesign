const AnimationFrame = () => (
    <div className="mil-animation-frame">
      {[1, 2, 3].map((pos) => (
        <div 
          key={pos}
          className={`mil-animation mil-position-${pos} mil-scale`}
          data-value-1={pos === 1 ? 7 : pos === 2 ? 4 : 1.2}
          data-value-2={pos === 1 ? 1.6 : pos === 2 ? 1 : 0.1}
        />
      ))}
    </div>
);

export default AnimationFrame;