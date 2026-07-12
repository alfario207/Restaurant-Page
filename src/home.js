import Menu from "./utils/listMenu.js" 


export default function home() {
    const content = document.getElementById('content')
    
    const container = document.createElement('div')
    container.classList.add('container')
    
    const title = document.createElement('h1')
    title.textContent = 'The Odin Resto'
    
    const textAbout = document.createElement('p')
    textAbout.classList.add('text-content')
    textAbout.textContent = 'Selamat datang di The Odin Resto, tempat dimana makanan disajikan degan istimewa! Berlokasi di pusat kota, kami menggunakan bahan-bahan segar dan organik yang didatangkan langsung dari petani lokal'
    
    const specialMenu = document.createElement('p')
    specialMenu.classList.add('special-menu')

    const special = Menu.map(item => item.name)
    specialMenu.textContent = `Menu spesial hari ini adalah ${special[1]}`
    
    
    container.append(title, textAbout, specialMenu)
    content.appendChild(container)
}