// src/index.js
import "./styles.css";
import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js";

const content = document.getElementById('content')
const navabr = document.querySelectorAll('.nav-btn')

function clearContent() {
    content.textContent = ""
}

home()

navabr.forEach((button) => {
    button.addEventListener('click', (e) => {
        const id = e.target.id
        console.log('btn clicked', id)
        
        if (id === 'home') {
            clearContent()
            home()
        } else if (id === 'menu') {
            clearContent()
            menu()
        } else {
            clearContent()
            about()
        }
    })
})