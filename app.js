const cursor = document.querySelector("div.cursor")

// hold mouse down
const growCursor = function() {
    cursor.classList.add("is-down")
}

// let go of the mouse
const shrinkCursor = function() {
    cursor.classList.remove("is-down")
}

document.addEventListener("mousedown", function() {
    growCursor()
})

document.addEventListener("mouseup", function() {
    shrinkCursor()
})