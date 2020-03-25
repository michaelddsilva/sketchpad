<template>
  <div>
  <b-container class="sketchpad">
      <canvas ref="canvas" width="500" height="500"></canvas>
  </b-container>
  <b-container class="controls">
      <b-button-group>
      <b-button variant="outline-primary" id="drawing-mode">Cancel drawing mode</b-button><br>
      <b-button id="clear-canvas">Clear</b-button><br>
      </b-button-group>

      <div id="drawing-mode-options">
        <h2>Drawing Mode Options</h2>
        <label for="drawing-mode-selector">Mode:</label>
        <b-form-select size="sm" id="drawing-mode-selector">
          <option>Scribbles</option>
          <option>Straight Lines</option>
          <option>Rectangles</option>
          <option>Elipses</option>
          <option>Special Shapes</option>
          <option>Polygons</option>
        </b-form-select><br>

        <label for="drawing-line-width">Line width:</label>
        <span class="info">30</span>
        <input type="range" value="30" min="0" max="150" id="drawing-line-width"><br>

        <label for="drawing-color">Line color:</label>
        <input type="color" value="#005E7A" id="drawing-color"><br>

        <label for="drawing-shadow-color">Shadow color:</label>
        <input type="color" value="#005E7A" id="drawing-shadow-color"><br>

        <label for="drawing-shadow-width">Shadow width:</label>
        <span class="info">0</span>
        <input type="range" value="0" min="0" max="50" id="drawing-shadow-width"><br>

        <label for="drawing-shadow-offset">Shadow offset:</label>
        <span class="info">0</span>
        <input type="range" value="0" min="0" max="50" id="drawing-shadow-offset"><br>
        
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
    const canvas = new fabric.Canvas(ref, {
    isDrawingMode: true
    });
    fabric.Object.prototype.transparentCorners = false;

    var drawingModeEl = document.getElementById('drawing-mode');
    console.log('drawing mode button clicked')
    var drawingOptionsEl = document.getElementById('drawing-mode-options');
    drawingModeEl.onclick = function() {
      canvas.isDrawingMode = !canvas.isDrawingMode;
      if (canvas.isDrawingMode) {
        drawingModeEl.innerHTML = 'Cancel drawing mode';
        drawingOptionsEl.style.display = 'block';
      }
      else {
        drawingModeEl.innerHTML = 'Enter drawing mode';
        drawingOptionsEl.style.display = 'none';
      }
    };

  var clearEl = document.getElementById('clear-canvas');

  clearEl.onclick = function() { canvas.clear() };

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
