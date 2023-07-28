import { Card, Col, Button} from 'antd';

// Iteration 
    function FoodBox({listfood, deleteEachFood}) {


        return (
          
          <Col >
            <Card 
              title={listfood.name}
              style={{ width: 230, height: 300, margin: 10 }}
              >
              <img src={listfood.image} height={60} alt="food" />
              <p>Calories: {listfood.calories}</p>
              <p>Servings: {listfood.servings}</p>
              <p>
                <b>Total Calories:{listfood.calories} *  {listfood.servings}</b> kcal
              </p>
              {}
              <Button type="primary"  onClick={() => deleteEachFood(listfood.id)}> Delete  </Button>
            </Card >
          </Col>
        
        );
      }
      
      

      export default FoodBox;