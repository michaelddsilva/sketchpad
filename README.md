# sketchpad

This sketchpad web app was implemented with FabricJS (http://fabricjs.com/)

FabricJS was used to for the base classes for the canvas, scribble, line, ellipse, and rectangle classes. 

My circle, ellipse, polygon, rectangle, square, and straight line classes inherit from these classes.

The canvas class has its own free-hand functionality, and so, there is no dedicated scribble class. 

The implementation for the classes can be found in sketchpad\src\components\Sketchpad.vue

The web app is live at: https://mdsilva6.github.io/mdsilva6-se3353-sketchpad/

Instructions for running this web app (if you don't wish to use the link) are in the sketchpad/ folder

## Software Engineering for Human-Computer Interface Design 
### Simple SketchPad Drawing Project:  Online Assignment 

The following itemized requirements are an informal representation of a set of assignments that comprises the design of a simple sketch drawing program (along with an implementation that can be targeted to any platform of the students` choice). 

### The program layout should consist mainly of a 2D drawing space along with the ability to select basic modes as follows: 

- A mode to draw sketches using scribbled freehand lines 
- A mode to draw straight lines 
- A mode to draw rectangles 
- A mode to draw ellipses 
- A mode to draw special cases of these (squares and circles) 
- A mode to draw polygons (open and closed polygons) 

### In addition, the user should be able to select a colour for any of the graphical objects that are about to be drawn. Furthermore, the user should have a selection method so that they can identify an object that has already been drawn and perform the following operations: 

- Move the selected object to a new location 
- Cut the object from the drawing (delete a graphical object) 
- Paste the selected object (copy and paste) to a new location 

### Advanced versions of the program may also have the following functionality: 

- Group the object with another object (possibly creating groups of arbitrary objects) 
- Ungroup a set of objects that have been grouped 

### Very advanced versions of the program could contain the following additional functions: 

- Undo (and Redo) 
- Save (and Load) a partially completed drawing 

### The report for this assignment should include the following design artifacts: 

- Statecharts for the designed interactive functions 
- Object diagram representing the Software Architecture and any Design Patterns 
- The source code and deployment specific files 
- Be prepared to demo; showing the functionality (and overviewing the prev 3 artifacts )


# For Pushing Latest Dist 

This is here for refence for when I push an update

### For mdsilva6

cd sketchpad

npm run build

cd dist

git init

git add .

git commit -m "Update"

git remote add origin-sketchpad https://github.com/mdsilva6/mdsilva6-se3353-sketchpad.git

git push -u origin-sketchpad master --force

cd ..
