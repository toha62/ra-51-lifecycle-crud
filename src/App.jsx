import { useEffect, useState } from "react";
import Header from './components/Header';
import InputForm from './components/InputForm';
import Cards from './components/Cards';

function App() {
  const [cardsList, setCardsList] = useState([]);
   
  const handleAdd = (evt) => {    
    evt.preventDefault();

    const { target } = evt;
    const { inputText: { value } } = target;
    
    if (!value) {
      return;
    }

    const tempArr = [...cardsList];

    tempArr.push({id: Date.now(), content: value});
    setCardsList(tempArr);
    target.reset();
  };

  const handleRemove = (key) => {
    const index = watchList.findIndex(item => item.key === key);
    const tempArr = [...watchList];

    if (index !== -1) {
      tempArr.splice(index, 1);
      setWatchList(tempArr);
    }    
  };

  const handleUpdate = () => {
    console.log('update');
  };

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
