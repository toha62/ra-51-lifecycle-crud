import { useEffect, useState } from "react";
import Header from './components/Header';
import InputForm from './components/InputForm';
import Cards from './components/Cards';

function App() {
  const [cardsList, setCardsList] = useState([]);
  const url = new URL('http://localhost:7070/notes');
   
  const handleAdd = async (evt) => {    
    evt.preventDefault();

    const { target } = evt;
    const { inputText: { value } } = target;
    
    if (!value) {
      return;
    }

    const obj = {id: 0, content: value};

    target.reset();

    const response = await fetch(url.href, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(obj)
    });

    if (response.ok) {
      reloadData();
    } else {
      throw new Error('Error sending data to server');
    }   
  };

  const handleRemove = async (id) => {    
    const response = await fetch(url.href + `/${id}`, {
      method: 'DELETE'      
    });

    if (response.ok) {
      reloadData();
    } else {
      throw new Error('Error deleting data from server');
    } 
  };

  const reloadData = async () => {
    const response = await fetch(url.href);
    
    if (response.ok) {
      const data = await response.json();
      setCardsList(data);
    } else {
      throw new Error('Server load data error');
    }   
  };

  const handleUpdate = async () => {    
    reloadData();
  };

  useEffect(() => {
    console.log('first load');
    reloadData();
  }, []);

  return (
    <div className="container">     
      <Header
        title={"Notes"}
        handleUpdate={handleUpdate}
      />
      <Cards
        cardsList={cardsList}
        handleClose={handleRemove}
      /> 
      <InputForm
        handleAdd={handleAdd} 
      />         
    </div>     
);
}

export default App
