import WomenItem from "./WomenItem/WomenItem";
import classes from "./WomenList.module.css";

function WomenList({ women }) {

  
  const womenItems = Object.keys(women).map((id) => (
    <WomenItem key={id} womens={women[id]} />
  ));

  return  (
    <div className={classes.WomenList}>
    {womenItems}
    </div>
  );
};


export default WomenList;
