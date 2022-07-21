import "./card.css";

function card(props) {
  const classes = "card-wrapper " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default card;
