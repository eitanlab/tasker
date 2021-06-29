import React, {useState} from 'react';
import {Container, Box, Paper, Button, TextField} from '@material-ui/core';
import { spacing } from '@material-ui/system';

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
    <Container maxWidth='lg' className="App">
      <Box display='flex' py={2}>
				<TextField style={{minWidth: '300px', padding: '0 20px 0 0'}} label='Por ejemplo: Ir a la playa' onChange={e => setInputValue(e.target.value)} value={inputValue}></TextField>
				<Button variant='contained' color='primary' onClick={e => addTodoItem({content: inputValue})}>
					Add Item
				</Button>
			</Box>
			{todoItems.map((item) => 
				<Paper style={{margin: '20px 0'}} key={item.id}>
					<Box display='flex' style={{paddingLeft: '20px'}}>
						<Box flexGrow={1}>
							<h2 style={{minWidth: '300px', padding: '0 20px'}}>{item.id} - {item.content}</h2>
						</Box>
						<Button variant='contained' color='secondary' onClick={() => deleteTodoItem({id: item.id})}>
							Delete item
						</Button>
					</Box>	
				</Paper>
			)}
    </Container>
  );
}

export default App;
