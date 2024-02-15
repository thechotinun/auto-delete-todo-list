import { useState } from "react";
import "./App.css";
import arrData from "@/data";
import Item from "@/components/item";

function App() {
  const [data, setData] = useState([...arrData]);
  const [fruit, setFruit] = useState([]);
  const [vegetable, setVegetable] = useState([]);

  const handleClick = async (val) => {
    val.timer = setTimeout(() => removeItem(val), 5000);
    const updateData = data.filter((e) => e.name !== val.name);
    setData([...updateData]);
    switch (val.type) {
      case "Fruit":{
        setFruit((prevFruit) => [...prevFruit, val]);
        break;
      }
      case "Vegetable":{
        setVegetable((prevVegetable) => [...prevVegetable, val]);
        break;
      }

      default:
        break;
    }
  };

  const handleClickCancleList = async (val) => {
    clearTimeout(val.timer);
    setData((prevData) => [...prevData, val]);
    switch (val.type) {
      case "Fruit": {
        const updateFruit = fruit.filter((e) => e.name !== val.name);
        setFruit([...updateFruit]);
        break;
      }
      case "Vegetable": {
        const updateVegetable = vegetable.filter((e) => e.name !== val.name);
        setVegetable([...updateVegetable]);
        break;
      }
      
      default:
        break;
    }
  };


  const removeItem = (val) => {
    val.type === 'Fruit' && setFruit(prevFruit => prevFruit.slice(1));
    val.type === 'Vegetable' && setVegetable(prevVegetable => prevVegetable.slice(1));
    setData((prevData) => [...prevData, val]);
  };


  return (
    <>
      <div className="flex-container">
        <div className="list">
          {data?.length ?
            data.map((e, i) => {
              return (
                <Item
                  key={i}
                  type={e.type}
                  name={e.name}
                  handleClick={handleClick}
                />
              );
            }) : ''}
        </div>
        <div className="fruit">
          <span>Fruit</span>
          {fruit?.length ?
            fruit.map((e, i) => {
              return (
                <Item
                  key={i}
                  type={e.type}
                  name={e.name}
                  timer={e.timer}
                  group={"fruit"}
                  handleClickCancleList={handleClickCancleList}
                />
              );
            }) : ''}
        </div>
        <div className="vegetable">
          <span>Vegetable</span>
          {vegetable?.length ?
            vegetable.map((e, i) => {
              return (
                <Item
                  key={i}
                  type={e.type}
                  name={e.name}
                  timer={e.timer}
                  group={"vegetable"}
                  handleClickCancleList={handleClickCancleList}
                />
              );
            }) : ''}
        </div>
      </div>
    </>
  );
}

export default App;
