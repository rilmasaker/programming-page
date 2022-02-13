const stars = Array.from(Array(50), (_, i) => i);

const Background = () => (
  <div className="stars">
    {stars.map((s) => (
      <div className="star" key={s}></div>
    ))}
  </div>
);

export default Background;
