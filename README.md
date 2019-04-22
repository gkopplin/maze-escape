## Maze Escape

![logo](https://github.com/gkopplin/maze-escape/blob/master/assets/logo.jpg)

### Table of Contents
[Backgound](#background)

[Features](#features)

[Functionality and MVPs](#functionality)

[Wireframes](#wireframes)

[Architecture and Technologies](#architecture)

[Implementation Timeline](#implementation)

[Bonus Features](#bonus)


### <a name="backgound"></a> Background

Maze Escape is a retro, turn-based maze escape game. Each turn, the user moves their character one step, triggering the enemy characters to move one step towards the user. If an enemy character reaches the user, they must restart the level. If the user reaches the exit without being caught by an enemy character, they move onto the next level. 

The key mechanic of the game is that enemy character will not move if a wall blocks its path (the user must be on the same x/y coordinate as the enemy character- the enemy will move if the user is to the side of a wall).

### <a name="features"></a> Features
The following are notable features in Maze Escape. A more comprehensive description of the functionality of the game is below.

### 1. Level Progression
When a user reaches the exit of a level, the Game object will hide the HTML Canvas element and show the root div element (by modifying the classes of each). The appropriate image is also pushed into the inner HTML of the root element. A DOM keypress event listener is added to re-show the HTML Canvas element when the user is ready to progress to the next level. A similar system is set up for when the users loses a level or wins the game.

### 2. Collision Detection
If/else logic is used to determine whether a given move is valid based on the characters position and surrounding obstacles. For any given move, collisions are detected using the x position of the character and the y position plus the height of the character sprite (since characters are able to stand in front of walls, but cannot walk through them). Since the game is implemented on a 50x50 grid system, characters will always be a given distance from adjacent walls. In addition to the original position of the character, the function for determining valid moves also takes a new position that the character is attempting to travel to. The values of the new position and the orientation of the wall and used to determine if the character is attempting to walk through a wall.

### <a name="functionality"></a> Functionality & MVPs 
![screen_shot](https://github.com/gkopplin/maze-escape/blob/master/assets/maze-escape-screenshot.png)

Users will be able to:

- [ ] Start the game by pressing any key
- [ ] Navigate their character through the maze using arrow keys

### <a name="wireframes"></a> Wireframes

The application will only involve a single-page with the title, game rendering area, and links to external sites. The instructions will be displayed in the game rendering area before the user starts the game.

![wireframes](https://github.com/gkopplin/maze-escape/blob/master/assets/maze-escape-wireframe.jpg)


### <a name="architecture"></a> Architecture and Technologies

This project will be implemented with the following technologies:

- `JavaScript` for game logic,
- `HTML5 canvas` for rendering visuals

In addition to the entry file, there will be four scripts involved in this project:

`game.js`: will be the entry file that actually runs the game
`display.js`: will handle the logic of which level to display (or instructions)
`level.js`: will contain the layouts of wall placement and initial pixel placement
`character.js`: will contain information on the `position` of each `character` object and whether the `character` `type` is "enemy" or "user." Enemy characters will have logic for determining their `next_move`.

### <a name="implementation"></a> Implementation Timeline

**Day 1**: Create the entry file and basic set-up for `display`, `character`s, and one `level`. Goals for the day:

- [ ] Render a `level` with pre-defined walls
- [ ] Render a `character`

**Day 2**: Add `position` to `character`s. Add turn-based movement. Goals for the day:

- [ ] Allow users to control their `character`
- [ ] After a user moves, enemy `character`s move towards the user

**Day 3**: Add new `level`s and "Lose Screen". Goals for the day:

- [ ] Add "Lose Screen" when user is caught
- [ ] Complete the wall arrangements for all levels
- [ ] Complete initial `character` positions for all levels

**Day 4**: Trigger level progression. Style frontend. Goals for the day:

- [ ] When the user reaches the exit, the next level is rendered
- [ ] Style the frontend


### <a name="bonus"></a> Bonus features

- [ ] Add sprites
- [ ] Add a key/door mechanic
