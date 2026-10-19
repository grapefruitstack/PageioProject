# PageioProject
TECHNICAL DESC:
This program’s purpose is to alter how a user navigates the internet by turning the default web-browser into a 2D platform game, with the player-character replacing the cursor, and the page elements as platforms/level geometry. This is achieved by taking the basic HTML/Javascript functions that would normally be controlled with the mouse, and have them be managed by controls typically found in platformers.

 The webpage viewport will be centered on the character. “A” and “D” moves them left and right respectively (in the case of mobile, holding the left and right sides of the screen). This in turn will scroll the page horizontally. To scroll upwards vertically, the player must jump up from page element to page element–text-blocks, pictures, etc; downward is achieved by falling downwards with the program’s simulated gravity. 

The program’s collision mechanics work by directly manipulating the character’s given velocity when their own x,y coordinates overlap with those of another element. When a webpage is loaded, the program runs the .getBoundingClientRect() method for every element present. This grabs the position and dimensions of the element and returns them as a DOMRect object; this DOMRect contains variables representing left, top, right, bottom,x,y,width, and height. These variables are passed to a fillRect() function, which will draw an invisible rectangular block over the element. This new block will be then given a special property that, wherever the player's bounding box touches it, will set the player's velocity along the approaching direction (if from the side, x velocity; if from above/below, y velocity) to zero.

To interact with links on the page, the player character possesses a special “downward attack” animation, which when activated, casts the element.click() method to whatever element is directly beneath them. Once this happens, the link is extracted and the subsequent page is loaded as normal. The program will then be reloaded, with the player’s position being reset to the starting position at the top left of the page.

DEVELOPMENTAL NOTES:
In terms of Flexbox vs Grid and which we decided on, because the program rips directly from an existing webpage, and as such we are beholden to whichever style is currently being used. At time of writing the program solely consists of a frontend overlay, which has very little room to add new formatting options. If in the future we decide to add more game elements to the program (inventory systems, health, monsters to fight, etc.), these will be good areas to consider.

An idea currently being discussed is a way to navigate the page independent of the player's position, so as to allow the user to see where things are at a much greater range.
	
