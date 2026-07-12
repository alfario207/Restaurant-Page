export default function about() {
    const content = document.getElementById('content')

    const container = document.createElement('div')
    container.classList.add('container')

    const title = document.createElement('h1')
    title.textContent = 'Tentang kami'

    const aboutUs = document.createElement('div')
    aboutUs.classList.add('about-us')
    aboutUs.innerHTML = `
        <p><b>The Odin Resto</b> adalah sebuah proyek <i>Open Source</i> kuliner tempat di mana kode pemrograman dan resep rahasia leluhur saling berkolaborasi. Berdiri sejak dunia <b><i>Front-End</i></b> dan <b><i>Back-End</i></b> bersatu di dapur, Kami percaya bahwa meracik bumbu tradisional sama presisinya dengan menulis baris kode yang sempurna, sehingga dapur kami tidak pernah melayani <i>bug</i> dan hanya menyajikan hidangan yang lolos tahap <i>Quality Assurance</i> yang ketat.</p>

        <p>Menggunakan bahan-bahan lokal segar organik yang didatangkan langsung dari petani, semua bumbu kami di-<i>compile</i> secara presisi untuk menghasilkan cita rasa <i>error-free</i> dengan sentuhan modern. Apapun masalah logika atau revisi yang sedang Anda hadapi setelah seharian <i>coding</i>, silakan <i>break</i> sejenak di sini dan biarkan menu-menu andalan kami melakukan <i>garbage collection</i> pada rasa lapar Anda!</p>    
    `

    container.append(title, aboutUs)
    content.appendChild(container)
}