import "./index.css";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoProvider } from "../actions/index";


function App(){

   return (
      <>
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
      </>
   )
}


export default App;
