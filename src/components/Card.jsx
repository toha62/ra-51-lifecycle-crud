export default function Card({ cardText, handleClose}) {
  return (    
    <div className="card col-5 m-3">
      <div className="card-body">      
        <p className="card-text">{cardText}</p>      
      </div>
      <div>
        <button
          className="material-icons close-button"
          onClick={handleClose}
        >clear</button>
      </div>
    </div>    
  );
}