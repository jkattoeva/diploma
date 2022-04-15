import "./Main.css";

function Main() {
  const cards = [
    {
      id: 1,
      text: "lorem lorem lorm dihdc frhi x",
      title: "ZARA",
      url: "https://hobokengirl.com/wp-content/uploads/2016/10/zara-logo1.jpg",
    },
    {
      id: 2,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      text: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://hobokengirl.com/wp-content/uploads/2016/10/zara-logo1.jpg",
    },
    {
      id: 3,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://hobokengirl.com/wp-content/uploads/2016/10/zara-logo1.jpg",
      text: "accusamus beatae ad facilis cum similique qui sunt",
    },
  ];

  const card = cards.map((item) => {
    return (
      <div className="Card">
        <div className="Elements">
          <div >
            <img className="image" src={item.url} alt="" />
          </div>
          <h2>{item.title}</h2>
          <p>{item.text} </p>
        </div>
      </div>
    );
  });
  return <div className="Main">{card}</div>;
}

export default Main;
