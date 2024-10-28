import React from 'react'
import Item from './categories/Item'
import { Offcanvas } from 'react-bootstrap';
import { menu } from './arrays.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
const App = () => {
	const [show, setShow] = useState(false)
	const categories = ['Завтраки', "Салаты и Закуски", "Супы", "Лепим Сами (Пельмени)", "Горячие Закуски", 'Хлеб', 'Горячие Блюда "Мясо"', 'Горячие Блюда "Рыба"', "Блюда на Компанию", "Гарниры", "Десертная Карта", "Молочные Коктейли", "Свежевыжетые соки", "Напитки в Ассортименте", "Натуральные напитки", "Безалкогольные напитки", "Чаи", "Ароматные Чаи", "Алкогольные напитки", "Горячие напитки"]
    const [choice, setChoice] = useState('Завтраки')
    const choiceFunc = () => {
    	let j = 0
    	for (let i = 0; i <= categories.length; i++) {
    		if (categories[i] == choice) {
    			console.log('ecnm')
    			j = i
    		}
    	}
    	return <Item arrayChoice={menu[j]} Title={choice} />
    }
    const checkArray = (i) => {
    	if (menu[i]) {
    		return false
    	}
    	else {
    		console.log('false')
    		return true
    	}
    }
    return (
        <>
        	<img src="./burger-menu-svgrepo-com.svg" onClick={() => setShow(!show)} id="burger" />
        	<Offcanvas show={show}>
        		<Offcanvas.Header closeButton onClick={() => setShow(!show)}>
		          <Offcanvas.Title>Категории Блюд</Offcanvas.Title>
		        </Offcanvas.Header>
		        <Offcanvas.Body>
		         	{
		         		categories.map((el, index) => (
		         			<button disabled={checkArray(index)} style={{opacity: checkArray(index) && "0.9"}} className="canvas-item" key={index} onClick={() => {
		         				setChoice(el)
		         				setShow(!show)
		         			}}>
				         		<h1>{el}</h1>
				         	</button>
		         		))
		         	}
		        </Offcanvas.Body>
        	</Offcanvas>
        	{
        		choiceFunc()
        	}
        </>
    )
}

export default App