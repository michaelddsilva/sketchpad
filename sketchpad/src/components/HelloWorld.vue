<template>
  <div>
  <b-container class="sketchpad">
      <canvas ref="canvas" width="500" height="500"></canvas>
  </b-container>
  <b-container class="controls">
      <b-button-group>
      <b-button variant="outline-primary" id="drawing-mode">Exit drawing mode</b-button><br>
      <b-button id="clear-canvas">Clear</b-button><br>
      <b-button id="cut-btn">Cut</b-button>
      <b-button id="copy-btn">Copy</b-button>
      <b-button id="paste-btn">Paste</b-button>
      </b-button-group>
      <br><br>
      <div id="drawing-mode-options">
        <h2>Drawing Mode Options</h2>
        <b-form-group
          label-cols-sm="3"
          label= "Mode:"
          label-for="drawing-mode-selector">
        <b-form-select v-model="selected" id="drawing-mode-selector" class="mb-3">
            <b-form-select-option value="scribbles">Scribbles</b-form-select-option>
            <b-form-select-option value="line">Straight Lines</b-form-select-option>
            <b-form-select-option value="rectangle">Rectangles</b-form-select-option>
            <b-form-select-option value="elipses">Elipses</b-form-select-option>
            <b-form-select-option value="special">Special Shapes</b-form-select-option>
            <b-form-select-option value="polygon">Polygons</b-form-select-option>
        </b-form-select>
        </b-form-group>
        <b-form-group
          id="drawing-line-width-label"
          label-cols-sm="3"
          label="Line width:"
          label-for="drawing-line-width">
          <b-form-input type="range" value="30" min="0" max="150" id="drawing-line-width"></b-form-input>
        </b-form-group>
        <b-form-group
          id="drawing-color-label"
          label-cols-sm="5"
          label="Drawing Color:"
          label-for="drawing-color">
          <b-form-input type="color" value="#000000" id="drawing-color"></b-form-input>
        </b-form-group>       
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
    const canvas = new fabric.Canvas(ref, { isDrawingMode: false });

    let scribbles = function() {
      if (drawingModeState == true) {
        console.log(drawingModeState + "Scribbles");
        canvas.isDrawingMode = true;
        canvas.freeDrawingBrush.color = drawingColorEl.value;
      }
    }

    let line = function() {
      if (drawingModeState == true) {
        console.log(drawingModeState + "Straight Line");
        canvas.isDrawingMode = false;
        var isMouseDown;
        var line;
        canvas.on('mouse:down', function(o){
          isMouseDown = true;
          var pointer = canvas.getPointer(o.e);
          var points = [ pointer.x, pointer.y, pointer.x, pointer.y ];
          
            line = new fabric.Line(points, {
            strokeWidth: 6,
            fill: drawingColorEl.value,
            stroke: drawingColorEl.value,
            originX: 'center',
            originY: 'center',

            });
          if (drawingModeSelectionEl.value == 'line' && drawingModeState)  canvas.add(line);
        });
      
        canvas.on('mouse:move', function(o){
          if (!isMouseDown) return;
          var pointer = canvas.getPointer(o.e);
          
          line.set({ x2: pointer.x, y2: pointer.y });
          if (drawingModeSelectionEl.value == 'line' && drawingModeState) canvas.renderAll(); 
        });

        canvas.on('mouse:up', function(){
          isMouseDown = false;
        });
      }
    }

    fabric.Object.prototype.transparentCorners = false;

    var drawingModeEl = document.getElementById('drawing-mode');
    var drawingOptionsEl = document.getElementById('drawing-mode-options');
    var drawingModeState = true;
    drawingModeEl.onclick = function() {
      drawingModeState = !drawingModeState; // deactivate drawing mode
      console.log('drawingModeState:' + drawingModeState + 'Mode: ' + drawingModeSelectionEl.value);
      if (drawingModeState == true) {
        drawingModeEl.innerHTML = 'Exit drawing mode';
        drawingOptionsEl.style.display = 'block';
        if (drawingModeSelectionEl.value == "scribbles") {
          canvas.isDrawingMode = true;
          canvas.freeDrawingBrush.color = drawingColorEl.value;
        }
      }
      else {
        canvas.isDrawingMode = false;
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

  var clipboard = null;


  var cut = document.getElementById("cut-btn");
  var copy = document.getElementById("copy-btn");
  var paste = document.getElementById("paste-btn");

  cut.onclick = function() {
    canvas.getActiveObject().clone(function(cloned) {
      clipboard = cloned;
    });
    canvas.remove(canvas.getActiveObject());
  }

  copy.onclick = function() {
    canvas.getActiveObject().clone(function(cloned) {
      clipboard = cloned;
    });
  }

  paste.onclick = function() {
    clipboard.clone(function(clonedObject){
      canvas.discardActiveObject();
      clonedObject.set({
        left: 0,
        top: 0,
        evented: true,
      });
		canvas.add(clonedObject);
		canvas.setActiveObject(clonedObject);
		canvas.requestRenderAll();
	});
  }

  drawingModeSelectionEl.onclick = function() { 
    if (drawingModeSelectionEl.value == 'scribbles') {
      scribbles();
    }
    if (drawingModeSelectionEl.value == 'line') {
      line();
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
  background: white;
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
