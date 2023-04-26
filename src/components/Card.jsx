export default function Card({ cardText, children }) {
  return (    
    <div className="card">
      <div className="card-body">      
        <p className="card-text">{cardText}</p>      
      </div>
      <div>{children}</div>
    </div>    
  );
}