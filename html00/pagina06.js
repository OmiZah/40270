const Picture = (id) => {
    return `<figure onclick="alert(${id})">
        <img src="https://picsum.photos/id/${id}/200/200/" alt="">
        <figcaption>John</figcaption>
    </figure>`
}

const p = document.getElementById("app")
p.innerHTML = Picture(1)

const mensaje = (id) => {alert('hola '+id)}