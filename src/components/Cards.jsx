import Card from "./Card";

export default function Cards({ cardsList, handleClose, children }) {
  return (
    <div className="card-deck">
      {cardsList.map(card => (
        <Card cardText={card.text}>
          <button
            className="material-icons close-button"
            onClick={handleClose}
          >clear</button>
        </Card>
      ))}
      {children}
    </div>
  );
}