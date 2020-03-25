<template>
  <div>
  <b-container class="sketchpad">
      <canvas ref="canvas" width="500" height="500"></canvas>
  </b-container>
  <b-container class="controls">
      <b-button-group>
      <b-button variant="outline-primary" id="drawing-mode">Exit drawing mode</b-button><br>
      <b-button id="clear-canvas">Clear</b-button><br>
      </b-button-group>

      <div id="drawing-mode-options">
        <h2>Drawing Mode Options</h2>
        <label for="drawing-mode-selector">Mode:</label>
        <select size="sm" id="drawing-mode-selector">
          <option value="scribbles" selected>Scribbles</option>
          <option value="line">Straight Lines</option>
          <option value="rectangle">Rectangles</option>
          <option value="elipses">Elipses</option>
          <option value="special">Special Shapes</option>
          <option value="polygon">Polygons</option>
        </select><br>

        <label for="drawing-line-width">Line width:</label>
        <span class="info">30</span>
        <input type="range" value="30" min="0" max="150" id="drawing-line-width"><br>

        <label for="drawing-color">Line color:</label>
        <input type="color" value="#005E7A" id="drawing-color"><br>
        
      </div>
  </b-container>
  </div>
</template>

<script>
import { fabric } from 'fabric'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    const ref = this.$refs.canvas;
    const canvas = new fabric.Canvas(ref, { isDrawingMode: true });

    fabric.Object.prototype.transparentCorners = false;

    var drawingModeEl = document.getElementById('drawing-mode');
    console.log('drawing mode button clicked')
    var drawingOptionsEl = document.getElementById('drawing-mode-options');
    drawingModeEl.onclick = function() {
      canvas.isDrawingMode = !canvas.isDrawingMode; // deactivate drawing mode
      if (canvas.isDrawingMode == true) {
        drawingModeEl.innerHTML = 'Exit drawing mode';
        drawingOptionsEl.style.display = 'block';
      }
      else {
        drawingModeEl.innerHTML = 'Enter drawing mode';
        drawingOptionsEl.style.display = 'none';
      }
    };

  var clearEl = document.getElementById('clear-canvas');

  clearEl.onclick = function() { canvas.clear() };

  var drawingModeSelectionEl = document.getElementById('drawing-mode-selector');
  var drawingColorEl = document.getElementById('drawing-color');

  drawingColorEl.onchange = function() {
    canvas.freeDrawingBrush.color = this.value;
  };

  drawingModeSelectionEl.onclick = function() { 
    console.log("Value:" + drawingModeSelectionEl.value);
    if (drawingModeSelectionEl.value == 'scribbles') {
      console.log("Scribbles");
      canvas.isDrawingMode = true;
      canvas.freeDrawingBrush.color = drawingColorEl.value;
    }
    if (drawingModeSelectionEl.value == 'line') {
      console.log("Straight Line");
      canvas.isDrawingMode = false;
      var isDown;
      var line;
      canvas.on('mouse:down', function(o){
        isDown = true;
        var pointer = canvas.getPointer(o.e);
        var points = [ pointer.x, pointer.y, pointer.x, pointer.y ];
        
          line = new fabric.Line(points, {
          strokeWidth: 6,
          fill: drawingColorEl.value,
          stroke: drawingColorEl.value,
          originX: 'center',
          originY: 'center',

          });
        if (drawingModeSelectionEl.value == 'line')  canvas.add(line);
      });
    
      canvas.on('mouse:move', function(o){
        if (!isDown) return;
        var pointer = canvas.getPointer(o.e);
        
        line.set({ x2: pointer.x, y2: pointer.y });
        if (drawingModeSelectionEl.value == 'line') canvas.renderAll(); 
      });

      canvas.on('mouse:up', function(){
        isDown = false;
      });
    }
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.sketchpad {
  border-style: none;
  width: 50%;
  display: inline-block;
}

.controls {
  width: 30%;
  display: inline-block;
}

canvas {
  border-style: inset;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
