//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import '../styles/tarea.css'
import '../styles/formulario.css'
import '../styles/lista-tareas.css';



// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import ToDoList from "./component/to-do-list.jsx"

//render your react application
ReactDOM.render(<ToDoList />, document.querySelector("#app"));
