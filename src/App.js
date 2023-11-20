import './App.css';
import {useState} from "react";


function App() {

  const[items, setItems]=useState([
    // {itemName:"item1", quantity:1, isSelected:false},
    // {itemName:"item2", quantity:1, isSelected:true},
    // {itemName:"item3", quantity:1, isSelected:false},
  ])

const [inputValue, setInputValue] = useState("");

const [totalItemsQuantity, setTotalItemsQuantity] = useState()

const handleAddButtonClick =() =>{
  const newItem = {
  itemName: inputValue,
  quantity: 1,
  isSelected: false
  }
  const newItems=[...items, newItem]
setItems(newItems);
setInputValue("");
calculateTotal();
}

const selectFunction =(index)=>{
const newItems = [...items];

newItems[index].isSelected = !newItems[index].isSelected
setItems(newItems);
calculateTotal();
}

const onHandleIncrease = (index)=>{
  const newItems = [...items];

newItems[index].quantity ++;
setItems(newItems);
calculateTotal();
}

const onHandleDecrease = (index)=>{
  const newItems = [...items];

newItems[index].quantity --;
setItems(newItems);
calculateTotal();
} 

const calculateTotal=()=>{
 const  totalItemsQuantity = items.reduce((total, item)=>{
return total + item.quantity;
 },0)
setTotalItemsQuantity(totalItemsQuantity)
}

  return (
    <div className="App">

<div className="container">

  <div className="search-box">
    <input type="text" 
    value={inputValue} 
    placeholder='Add a Shopping Item' 
    onChange={(event)=>{setInputValue(event.target.value)}} />
    <i class="fa-solid fa-plus" 
    onClick={()=>handleAddButtonClick()}
      ></i>
   </div>


  <div className="shopping-item-container">
    {items.map((item, index) => (
     
     <div className="shopping-item">
      <div className="item-name" onClick={()=>selectFunction(index)}>
{item.isSelected ? ( 
<>
<span><i class="fa-regular fa-circle-check"></i></span>
<span className="item">{item.itemName}</span>

</>
)
:
(
  <>
  <span><i class="fa-regular fa-circle"></i></span>
<span className="item">{item.itemName}</span>

</>
)
}
</div>

<div className="item-quantity">
<i class="fa-solid fa-less-than" onClick={()=>onHandleDecrease(index)}></i>
  {item.quantity}
  <i class="fa-solid fa-greater-than" onClick={()=>onHandleIncrease(index)}></i>
  </div> 
</div>
)
)
}

<div className="total">
  Total : {totalItemsQuantity}
</div>
</div>


</div>
    </div>
  );
}

export default App;


