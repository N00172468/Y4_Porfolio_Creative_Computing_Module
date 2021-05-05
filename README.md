# BSc (Hons) in Creative Computing - Year 4
## Creative Computing - Term 1 Portfolio
- John Carlo M. Ramos
- N00172468
- DL836

---

- A basic HTML, CSS and Bootstrap portfolio of the work done for the Creative Computing Module.

---

## Chapter 1 - Shapes & Colours
### Looped HSB
- A full-windowed canvas displaying the HSB Colour Model.

### Interactive Looped HSB
- Replaced the static canvas to follow the mouse curser.
- In result, interactivity changes the scale of the HSB Colour Model.

### Radial Fan (HSB Variant)
- A medium-canvas displaying the HSB Colour Model in a radial fan pattern.
- Uses `DEGREES` instead of `RADIANS`.
- 2 versions: Static (commented out) and interactive.

### Basic Translations
- A refresher on the basics of `translate()`, `push()` and `pop()`.

### Interactive Colour Tool
- An interactive canvas that demonstrates the HSB Colour Model.
- Includes a colour wheel with rotating hues, Hue Display, Saturation Display and Brightness Display.
- Interaction consist of moving the mouse cursor from left to right to demonstrate HSB.
- Designed in a simplistic manner for User Experience (UX).
- An exercise to test on what we have learned so far within this chapter (i.e. color-shape). 

### Colour Interpolation (Tweening)
- Experimenting with the P5.js function `lerpColor()` to display interpolation.
- References: 
    - Spiral Images: https://www.google.com/search?q=spirals&sxsrf=ALeKk03GsWLtyb3w0Wc66xaC7XiEXf2A8w:1602597140654&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiCkqXK27HsAhUrURUIHVeHAC4Q_AUoAXoECCAQAw&biw=2133&bih=1041&dpr=0.9
    - Spiral Reference Codes: https://p5js.org/examples/form-triangle-strip.html and https://editor.p5js.org/kll/sketches/H1PwR089m
    - Magenetism Reference Codes: https://editor.p5js.org/mtchl/sketches/3PZlV2yN-

---

## Chapter 2 - Shapes & Patterns
### Playing with Shapes and Patterns
- A pattern of lines isolated within a circular perimeter.
- Practicing the use of `TWO_PI` - based on P5.js docs.

### Trigonometry
- Practicing the use of Inverse Tan (i.e. Tan-^1)
- P5.js version = atan()
- Each object rotates individually depending on where the mouse cursor is. 

### Trigonometry (Iteration 2)
- Using the previous project above, each circles has smaller circles in them to display the `atan2()` function.
- Calculating the scale value is also demonstrated within this exercise. 

### Controlled-Randomised Pattern
- A pattern of controlled-randomised objects demonstrating ordered-random.
- Includes a bespoke animation loop that displays a "pulsating" colour effect.
- Courtesy to Eoan O'Dea for helping out with the "pulsating" colour animation loop.  

### Controlled-Randomised Pattern (Iteration 2)
- A continuation of the project above but with a different pattern.
- Includes basic pseudo-randomised squares and circles with Andy Warhol inspired design as well as a "subwoofer" inspired effect.
- [Andy Warhol Image References](https://www.google.com/search?q=andy+warhol+art&sxsrf=ALeKk01yhxrVfAD4G7axM6s1tqgOKN9g3A:1603991967086&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj3qK7bp9rsAhVyt3EKHbwDAkQQ_AUoAXoECCUQAw&biw=1707&bih=803&dpr=1.13) 
- [Subwoofer Image References](https://www.google.com/search?q=speaker+art+design&tbm=isch&ved=2ahUKEwiK8NH3ytrsAhV5RBUIHR3TBiQQ2-cCegQIABAA&oq=speaker+art+&gs_lcp=CgNpbWcQARgAMgIIADICCAAyAggAMgQIABAeMgYIABAFEB4yBggAEAUQHjIGCAAQBRAeMgYIABAFEB4yBggAEAUQHjIGCAAQBRAeOgQIIxAnOgQIABBDOgQIABADOgUIABCxAzoHCAAQsQMQQ1DHOFjNgQFgvIwBaABwAHgAgAFGiAGpBZIBAjEymAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=jR6bX8r1JfmI1fAPnaaboAI&bih=1041&biw=2133)

### Patterned Wrapping Paper 
- A very challenging assignment that includes some of the student's understanding of pixel manipulation however, not fully. 
- Added an array to allow the manipulation of pixels within the individual gridded images.
- Added an alternative for 2D array to allow the change of different colours per image. 
- Canvas Dimensions: 1754 x 2481 
- This project requires a live server to successfully run (e.g. [Live Server for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)). Otherwise, the images will not display.

---

## Chapter 3 - Concept of Agents
### Advanced Agents
- Ten controlled randomised agents with a set alpha value to give it an illusion of having more objects.
- Teaches the student the concept of agents by allowing them to develop the dynamic movements and characteristics of those agents.
- Includes several interaction options to display various animations.

### Line Agency
- Demonstrates an animated intelligent version of an agent.
- An algorithm has been created to determine the scalable value of angles for each canvas boundary.
    - i.e. Once the agent bounces from a specific angle within a specific place from the canvas walls, the agent will then adjust its trajectory appropriate to the angle.

### Curve Vertex
- An interactive canvas that uses agents as "invisible guides" to draw curve vertexes.
- Demonstrates the manipulation of vector points.

### Growth Density
- An animated canvas which demonstrates an algorithm that checks which agent is closer to one another.
- Once the calculation finds the closest agent, it then draws another one around its perimeter.

### Letter Forming
- A demonstration of font manipulation using agents as guides for the pathing.
- Additional library such as opentype.js is used in conjunction with P5.js to preload and build the font characters using their data types.

### Production Demonstration (CA2)
- An interactive production demo for the track "Galvanize" by The Chemical Brothers.
- Features:
	- intelligent agents, 
	- flocking/steering algorithm, 
	- font packing,
	- audio interaction via P5.FFT and P5.Amplitude,
	- User interactivity with mouse cursor to agents,
	- User interactivity with GUIs (Spectrum Graph settings, Waveform settings, Agent Dimensions settings, Track Information toggler).
- Note: To run this specific project in your local PC, you must have Live Server enabled within your code editor.  