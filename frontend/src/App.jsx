
import './App.css'

import Header from './components/Header'
import Todo from './components/Todo'
import TodoEditor from './components/TodoEditor'
import TodoList from './components/TodoList'

function App() {
  

  return (
        <div className='App'>
          <Header/>
          <TodoList/>
          <TodoEditor/>
        </div>
  )
}

export default App
