
import './App.css';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask'

function App() {
  return (
    <div className='App-header'>
      <div className="inputt">
        <h2>Tasks:</h2>
        <AddTask/>
      </div>
     
     
     <ListTask/>
    </div>
  )
}

export default App;

