<snippet>
<content><![CDATA[
# ${1: Project 1}
#OBJECT OF MY GAME IS TO EAT AS MANY FISH AS YOU CAN TO WIN WITHOUT GETTING EATEN!

###Here it is https://efriedla.github.io/Project-1/

# WRITEN IN: 
*VANILLA JS
* CANVAS
###	ADD INS: 
*SWEAT ALERT

#Process: 6 days

##Step 1, Day 1: create a canvas. and begin to understand it: add object to canvas, and assign keys to move object
	*helpful video:https://www.youtube.com/watch?v=rqEJ7WiLWdo&t=45s*
	### this video was also helpful later on with:
	*collision detection
	*enemy fish
	*Another helpful video: https://www.youtube.com/watch?v=XAb_66tAEAU*
	*this video in particular was very helpful in understanding how the object can move via arrow keys.

	*Not so helpful video:https://www.w3schools.com/graphics/game_intro.asp*
	* I felt that though w3school is helpful there is just many different ways to write in canvas



##step 2, Day 2: add new objects to canvas while moving  
	- first bad bug " all the objects kept flashing on the canvas"
		-solution: have everything be created in the same function and update at the same time. This is the same video from the top

		*HELPFUL VIDEO: https://www.youtube.com/watch?v=XAb_66tAEAU*

##step 3, Day 3: draw objects decending from the top of the page, start collision detection *mesuring the distance between two objects*

 ### This was by far the most challenging part of the game, 
 	*helpful video: https://www.youtube.com/watch?v=XYzA_kPWyJ8*

 	### once the distances from each object was established and compared to my player1, I decied to use the distance to determine when a fish was two far it must reapear in above the top of the canvas.

 	*this took a lot of debuging but finally worked
	
##step 4, Day 4: replace objects with images
step 8: collision detection
	*helpful video:https://www.w3schools.com/tags/canvas_drawimage.asp*
	###This took some trial and error, but I finaly just placed the image in the html and called on it by id to render or in my code to be "draw"n

##Step 5, Day 5: game over function/ win add sweat alerts
#### unlike using a form, I could not just end the game and it restart. so here I wrote in starting sizes for the fish like ox and oy for original x and original y ect. this way after I won or lost the game could restart properly. also I wanted to add something besides a regular alert to my game so I added Sweat alert.

*helpful video:https://limonte.github.io/sweetalert2/*

### The only down side is that it did not completely pause my game.

##My next steps will be to make it responsive and make it able to be played on a smartphone. 
]]></content>
</snippet>

