import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from "./todoApp"

export default function ToDoList() {
  return (
    <div className="ToDoList">
      {Todo()}
    </div>
  );
}
