export default function Header({ title, handleCloseClick: handleUpdateClick }) {
  return (
    <div className="row mb-4">
      <h3 className="mx-3">{title}</h3>
      <button
        className="material-icons update-button"
        onClick={handleUpdateClick}
      >cached</button>
    </div>    
  );
}