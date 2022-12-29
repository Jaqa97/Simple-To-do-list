import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tareas, nueva] = useState(["Tarea 1", "Tarea 2", "Tarea 3"]);
	const borrar = (b) => {
		nueva(tareas.filter((value, index, arr) =>{
			return index !=b
		}))
	}
	return (
		<div className="text-center">
			<h1>To Do List!</h1>
			<form onSubmit={(event)=>{
				event.preventDefault();
				nueva([...tareas, event.target[0].value])
			}}>
				<input class="my-2" placeholder="Agregar tarea"></input>
			</form>
			{tareas.map((value, index)=>{
				return <li key={index} > {value} <button onClick={()=> borrar(index)}><i class="fas fa-trash"></i></button></li>			
			})}
			<form> </form>
			
		</div>
	);
};

export default Home;