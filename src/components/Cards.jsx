import Card from "./Card";

export default function Cards({ cardsList, handleClose }) {
  return (
    <div className="row">
      {cardsList.map(card => (
        <Card key={card.id} cardText={card.content}>
          <button
            className="material-icons close-button"
            onClick={handleClose}
          >clear</button>
        </Card>
      ))}      
    </div>
  );
}