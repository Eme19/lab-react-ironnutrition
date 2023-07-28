import { Button} from "antd";
import { Divider, Input } from 'antd';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


// Iteration 4
function AddFoodForm({foods, setFoodList}) {
    const [FoodsList, setFoodsList] = useState(foods);
    const [show, setShow ] = useState(true);

    

    
const [name, setName] = useState("")
const [image, setImage] = useState("")
const [calories, setCalories] = useState(0)
const [servings, setServings] = useState(1)

    const handleSubmit = (e) => {
        e.preventDefault();
 const _id = uuidv4()
     const newFood = {
      _id,
         name,
        image,
        calories,
        servings
     }

     console.log("show what in new food", newFood )
     const UpdateFoodList = [...foods];
     UpdateFoodList.push(newFood)
     setFoodList(UpdateFoodList)
     setFoodsList(UpdateFoodList)
     setName("")
     setImage("")
     setCalories(0)
     setServings(1)
      }

 const toggleForm = () => {
    setShow((prevShownForm) => !prevShownForm)
 }

  return (
    <div>
        <h3>{show ? "Hide Form" : "Add New Food"}</h3>
        {show && (
    <form onSubmit={handleSubmit} >
      <Divider>Add Food Entry</Divider>
  
      <label>Name</label>
      <Input value={name} type="text" onChange={(e) => setName(e.target.value)} />

      <label>Image</label>
      <Input value={image} type="text" onChange={(e) => setImage(e.target.value)} />

      <label>Calories</label>
      <Input value={calories} type="text" onChange={(e) => setCalories(e.target.value)} />

      <label>Servings</label>
      <Input value={servings} type="text" onChange={(e) => setServings(e.target.value)} />

      <Button className="Button-style" type="primary" htmlType="sumbit">Create</Button>
    </form>

  )}

<Button className="Button-style" type="primary" onClick={toggleForm}>
    {show ? "Hide Form" : "Add New Food"}
    </Button>
   
    </div>
  );
}

export default AddFoodForm;