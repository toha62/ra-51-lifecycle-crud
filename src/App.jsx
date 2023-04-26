import { useState } from "react";
import Header from './components/Header';
import InputForm from './components/InputForm';
import Cards from './components/Cards';

function App() {
  const [watchList, setWatchList] = useState([]);
  const cardsList = [
    {text: 'This is a longer card with supporting text below as a natural lead-in to additional content.'},
    {text: 'This card has supporting text below as a natural lead-in to additional content.'},
  ];
  
  const handleAddClick = (cityId) => {    
    setWatchList((prev) => {
      const key = Date.now();
      const tempArr = [...prev];
      const timeZone = cityList.find(city => city.id === +cityId).shift;
      const city = cityList.find(city => city.id === +cityId).name;
      tempArr.push({city, timeZone, key});
      return tempArr;
    });
  };

  const removeWatch = (key) => {
    const index = watchList.findIndex(item => item.key === key);
    const tempArr = [...watchList];

    if (index !== -1) {
      tempArr.splice(index, 1);
      setWatchList(tempArr);
    }
    
  };

  return (
    <div className="container">     
      <Header
        title="Notes"
      />
      <Cards
        cardsList={cardsList}
        handleClose={removeWatch}
      /> 
      <InputForm />         
    </div>     
);
}

export default App
