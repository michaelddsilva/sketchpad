<template>
  <div class="sketchpad">
      <canvas ref="canvas" width="500" height="500"></canvas>
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
    const canvas = new fabric.Canvas(ref);
    const rect = new fabric.Rect({
      fill: 'red',
      width: 20,
      height: 20
    });
    canvas.add(rect);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.sketchpad {
  border-color: black;
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
