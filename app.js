const cursor = document.querySelector("div.cursor")

// hold mouse down
const growCursor = function() {
    cursor.classList.add("is-down")
}

// let go of the mouse
const shrinkCursor = function() {
    cursor.classList.remove("is-down")
}

// move the cursor based on coordinates
const moveCursor = function (x, y) {
    cursor.style.left = x + "px"
    cursor.style.top = y + "px"
}

document.addEventListener("mousedown", function() {
    growCursor()
})

document.addEventListener("mouseup", function() {
    shrinkCursor()
})

document.addEventListener("mousemove", function(event) {
    console.log(event)
    moveCursor(event.pageX, event.pageY)
})