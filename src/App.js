import React, {useState} from 'react';

const App = () => {
  const [todoItems, setTodoItems] = useState([]);
	const [inputValue, setInputValue] = useState('')

	const addTodoItem = ({content}) => {
		content !== '' && setTodoItems([...todoItems,{id: todoItems.length + 1, content: content}]);
		setInputValue('');
	}

	const deleteTodoItem = ({id}) => {
		setTodoItems(todoItems.filter(item => item.id !== id))
	}

  return (
    <div className="App">
      <input onChange={e => setInputValue(e.target.value)} value={inputValue}></input>
      <button onClick={e => addTodoItem({content: inputValue})}>Add Item</button>
			{todoItems.map((item) => 
			<div key={item.id}>
				<h2>{item.id}</h2>
				<p>{item.content}</p>
				<button onClick={() => deleteTodoItem({id: item.id})}>Delete item</button>
			</div>)}
    </div>
  );
}

export default App;
