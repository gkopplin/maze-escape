## Maze Escape

### Background

Maze Escape is a retro, turn-based maze escape game. Each turn, the user moves their character one step, triggering the enemy characters to move one step towards the user. If an enemy character reaches the user, they must restart the level. If the user reaches the exit without being caught by an enemy character, they move onto the next level. 

The key mechanic of the game is that enemy character will not move if a wall blocks its path (the user must be on the same x/y coordinate as the enemy character- the enemy will move if the user is to the side of a wall).

### Functionality & MVP  

Users will be able to:

- [ ] Start the game by pressing any key
- [ ] Navigate their character through the maze using arrow keys

### Wireframes

The application will only involve a single-page with the title, game rendering area, and links to external sites. The instructions will be displayed in the game rendering area before the user starts the game.

![wireframes](https://github.com/gkopplin/maze-escape/blob/master/assets/maze-escape-wireframe.jpg)


### Architecture and Technologies

This project will be implemented with the following technologies:

- `JavaScript` for game logic,
- `HTML5 canvas` for rendering visuals

In addition to the entry file, there will be three scripts involved in this project:

`display.js`: will handle the logic of which level to display (or instructions)
`level.js`: will contain the layouts of wall placement and initial pixel placement
`character.js`: will contain information on the `position` of each `character` object and whether the `character` `type` is "enemy" or "user." Enemy characters will have logic for determining their `next_move`.

### Implementation Timeline

**Day 1**: Create the entry file and basic set-up for `display`, `character`s, and one `level`. Goals for the day:

- [ ] Render a `level` with pre-defined walls
- [ ] Render a `character`

**Day 2**: Add `position` to `character`s. Add turn-based movement. Goals for the day:

- [ ] Allow users to control their `character`
- [ ] After a user moves, enemy `character`s move towards the user

**Day 3**: Add new `level`s. Goals for the day:

- [ ] Complete the wall arrangements for all levels
- [ ] Complete initial `character` positions for all levels

**Day 4**: Trigger level progression. Style frontend. Goals for the day:

- [ ] When the user reaches the exit, the next level is rendered
- [ ] Style the frontend


### Bonus features

- [ ] Add sprites
- [ ] Add a key/door mechanic
