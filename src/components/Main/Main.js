import "./Main.css";

function Main({ image }) {
  return (
    <ul className="press">
      <li
        style={{
          background: `url(${image})`,
          backgroundPosition: 0,
          backgroundSize: "cover"
        }}
        className="press-item "
      ></li>
      <li
        style={{
          background: `url(${image})`,
          backgroundPosition: "-160px",
          backgroundSize: "cover"
        }}
        className="press-item"
      ></li>
      <li style={{
         background: `url(${image})`,
         backgroundPosition: "-320px",
         backgroundSize: "cover"

          }}
           className="press-item"></li>
      <li style={{
         background: `url(${image})` ,
         backgroundPosition: "-480px",
         backgroundSize: "cover"
         }} 
         className="press-item"></li>
    </ul>
  );
}

export default Main;
