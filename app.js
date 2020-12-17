const cursor = document.querySelector("div.cursor")
const canvasTag = document.querySelector("canvas.in")

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

// setup canvas
const setupCanvas = function (canvas) {
    const w = window.innerWidth
    const h = window.innerHeight
    const dpi = window.devicePixelRatio

    canvas.width = w * dpi
    canvas.height = h * dpi
    canvas.style.width = w + "px"
    canvas.style.height = h + "px"

    // which context
    const context = canvas.getContext("2d")
    context.scale(dpi, dpi)

    context.fillStyle = "red"
    context.strokeStyle = "red"
    context.lineWidth = 80
    context.lineCap = "round"
    context.lineJoin = "round"
}

// start to draw
const startDraw = function (canvas) {
    const context = canvas.getContext("2d")
    context.fillStyle = "yellow"
}

// drawing based on canvas, x and y
const moveDraw = function (canvas, x, y) {
    const context = canvas.getContext("2d")
    context.lineTo(x, y)
    context.stroke()
}

setupCanvas(canvasTag)

document.addEventListener("mousedown", function() {
    growCursor()
    startDraw(canvasTag)
})

document.addEventListener("mouseup", function() {
    shrinkCursor()
})

document.addEventListener("mousemove", function(event) {
    // console.log(event)
    moveCursor(event.pageX, event.pageY)
    moveDraw(canvasTag, event.pageX, event.pageY)
})