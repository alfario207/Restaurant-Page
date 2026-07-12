import Menu from "./utils/listMenu.js"

export default function menu() {
    const content = document.getElementById('content')

    const container = document.createElement('div')
    container.classList.add('container')

    const title = document.createElement('h1')
    title.textContent = 'Menu kami'

    const listMenu = document.createElement('ul')
    listMenu.classList.add('list-menu')

    Menu.map(item => {
        const listItem = document.createElement('li')

        listItem.innerHTML = `
            <span class="menu-name">${item.name}</span>
            <span class="menu-price">Rp ${item.price.toLocaleString('id-ID')}</span>
        `

        listMenu.appendChild(listItem)
    })

    container.append(title, listMenu)
    content.appendChild(container)
}