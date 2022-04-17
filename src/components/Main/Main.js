import "./Main.css";

function Main() {
  const cards = [
    {
      id: 3,
      title: "Givenchy",
      url: "https://i.pinimg.com/originals/9e/e3/cc/9ee3ccbda8eff947e2e069bae840f331.jpg",
      text: "accusamus beatae ad facilis cum similique qui sunt",
    },
    {
      id: 3,
      title: "Louis Vuitton",
      url: "https://marka-logo.com/wp-content/uploads/2020/04/Louis-Vuitton-Sembol.jpg",
      text: "accusamus beatae ad facilis cum similique qui sunt",
    },
    {
      id: 3,
      title: "New Balance",
      url: "https://pluspng.com/img-png/new-balance-logo-png-new-balance-logo-jpg-1598.jpg",
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
