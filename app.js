const cursor = document.querySelector("div.cursor")
const canvasIn = document.querySelector("canvas.in")
const canvasOut = document.querySelector("canvas.out")

let isMouseDown = false

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

    if (canvas.classList.contains("in")) {
        context.fillStyle = "#000000"
        context.strokeStyle = "#ffffff"
    } else {
        context.fillStyle = "#ffffff"
        context.strokeStyle = "#000000"
    }

    context.lineWidth = 80
    context.lineCap = "round"
    context.lineJoin = "round"

    context.shadowBlur = 10
    context.shadowColor = context.strokeStyle

    context.rect(0, 0, w, h)
    context.fill()
}

// start to draw
const startDraw = function (canvas, x, y) {
    const context = canvas.getContext("2d")

    context.moveTo(x, y)
    context.beginPath()
}

// drawing based on canvas, x and y
const moveDraw = function (canvas, x, y) {
    const context = canvas.getContext("2d")

    if (isMouseDown) {
        context.lineTo(x, y)
        context.stroke()
    }
}

setupCanvas(canvasIn)
setupCanvas(canvasOut)

document.addEventListener("mousedown", function(event) {
    isMouseDown = true
    growCursor()
    startDraw(canvasIn, event.pageX, event.pageY)
    startDraw(canvasOut, event.pageX, event.pageY)
})

document.addEventListener("mouseup", function() {
    isMouseDown = false
    shrinkCursor()
})

document.addEventListener("mousemove", function(event) {
    moveCursor(event.pageX, event.pageY)
    moveDraw(canvasIn, event.pageX, event.pageY)
    moveDraw(canvasOut, event.pageX, event.pageY)
})

document.addEventListener("touchstart", function (event) {
    isMouseDown = true
    growCursor()
    startDraw(canvasIn, event.pageX, event.pageY)
    startDraw(canvasOut, event.pageX, event.pageY)
  })
  
  document.addEventListener("touchend", function () {
    isMouseDown = false
    shrinkCursor()
  })
  
  document.addEventListener("touchmove", function (event) {
    moveCursor(event.pageX, event.pageY)
    moveDraw(canvasIn, event.pageX, event.pageY)
    moveDraw(canvasOut, event.pageX, event.pageY)
  })


// window resize
window.addEventListener("resize", function () {
    setupCanvas(canvasIn)
    setupCanvas(canvasOut)
})