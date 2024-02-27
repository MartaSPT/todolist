import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React from 'react';

let nextId = 0;



//guardar o input
//tenho de ir alterando o estado da minha lista de tarefas (acho eu)
function ButtonAdd() {
  //const [buttonText, setButtonText] = React.useState('Incomplete');
  const [task, setTask] = React.useState('');
  const [list, setList] = React.useState([]);

const toggleTaskCompletion  = (id) => {
  setList(
    list.map((a) =>
      a.id === id ? {...a, isComplete: !a.isComplete} : a
      
    )
  );
};

const handleDelete = (id) =>{
  setList(list.filter((a) => a.id !==id));
}

const handleClick = () => {
  setList([
    ...list,
    { id: nextId++,
      description: task,
      isComplete: false
    }
  ]);
  setTask('');
}

return (
  <>
    <div>
      <input
        type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="What needs to de done?"
      />

      <button
        onClick={handleClick}
        type='button'>
        Add
      </button>
    </div>
    <Tabs>
      <TabList>
        <Tab>All</Tab>
        <Tab>Complete</Tab>
          <Tab>Incomplete</Tab>
        
      </TabList>
      <TabPanel>
        <ul>
          {list.map(task => (
            <li key={task.id}>
              {task.description}
              <button onClick={() => handleDelete (task.id)}>
                delete
              </button>
              <button onClick = {() => toggleTaskCompletion (task.id)}>
                {task.isComplete ? 'Complete' : 'Incomplete'}
              </button>
            </li>
          ))}
        </ul>
      </TabPanel>
      <TabPanel>
          <ul>
            {list
              .filter((task) => task.isComplete)
              .map((task) => (
                <li key={task.id}>
                  {task.description}
                  <button onClick={() => handleDelete (task.id)}>
                delete
              </button>
              <button onClick = {() => toggleTaskCompletion (task.id)}>
                {task.isComplete ? 'Complete' : 'Incomplete'}
              </button>
                </li>
                
              ))}
          </ul>
        </TabPanel>
        <TabPanel>
          <ul>
            {list
              .filter((task) => !task.isComplete)
              .map((task) => (
                <li key={task.id}>
                  {task.description}
                  <button onClick={() => handleDelete (task.id)}>
                delete
              </button>
              <button onClick = {() => toggleTaskCompletion (task.id)}>
                {task.isComplete ? 'Complete' : 'Incomplete'}
              </button>
                </li>
              ))}
          </ul>
        </TabPanel>
    </Tabs>

  </>


)
}


function App() {
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <ButtonAdd />
    </div>
  );
}

export default App;
