export default function Card({ cardText, children }) {
  return (    
    <div className="card col-5 m-3">
      <div className="card-body">      
        <p className="card-text">{cardText}</p>      
      </div>
      <div>{children}</div>
    </div>    
  );
}