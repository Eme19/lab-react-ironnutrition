import FoodBox from "./components/FoodBox";
import ListOfFood from "./foods.json";
import { useState } from 'react';
import './App.css';
import AddFoodForm from "./components/AddFoodForm";
import SearchBar from "./components/SearchBar";
import { v4 as uuidv4 } from 'uuid';
import { Divider } from 'antd';


function App() {
  const foods = ListOfFood.map((food) => ({ ...food, id: uuidv4() }))
const [FoodList, setFoodList] = useState(foods);


const searchHandler =(e) => {
  const FoodList = foods.filter((items)=> {
     return items.name.toLowerCase().includes(e.target.value.toLowerCase());
  })
  setFoodList(FoodList)
}


function deleteEachFood(index) {
  const UpdateFood = [...FoodList].filter((items) =>  items.id !== index);
    setFoodList(UpdateFood);
}



  return (
    
    <div className="App">
       <AddFoodForm foods={foods} setFoodList={setFoodList}/>
   <SearchBar searchHandler={searchHandler}/>
   <Divider>Food List</Divider>
   {FoodList.length === 0 ? (<p>OOops, there is no more content to show  </p>  ): 
   ( FoodList.map((listfood) => (
  
      <div 
      key={listfood.id}>
          
      <FoodBox listfood={listfood} deleteEachFood={deleteEachFood}/>
      </div>
   ))
      )}
     
      
</div>

  )
}

export default App;

