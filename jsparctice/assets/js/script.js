let container = document.createElement("div")
container.className = "container"
document.body.prepend(container)
let introimg = document.createElement("div")
introimg.className = "introimg"
container.appendChild(introimg)
let row = document.createElement("div")
row.className = "row"
container.append(row)
for (let i = 1; i <= 3; i++) {
    var col = document.createElement("div")
    col.className = "col-lg-4"
    row.append(col)
    var card = document.createElement("div")
    card.className = "card"
    col.append(card)
    var imagewrapper = document.createElement("div")
    imagewrapper.className = "imagewrapper"
    card.append(imagewrapper)
    var text = document.createElement("div")
    text.className = "text"
    card.append(text)
    var title = document.createElement("h1")
    title.innerText = "The Weekend"
    text.append(title)
    var parag = document.createElement("p")
    parag.innerText = "“You fall in love with the little things about someone, like the sound of their laughter and the way their smile forms.”"
    text.append(parag)
    var readmore = document.createElement("span")
    readmore.innerText = "Read More >>"
    text.append(readmore)
}