![GoL title](/resources/title.png "Game of Life title image.")

The attempt to implement the web version of the famous [simulation](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) from John Horton Conway the *__Game of Life__*, also known simply as *__Life__*. 

<p align="center">
<img src="https://conwaylife.com/w/images/8/81/Glider.gif">
</p>

<hr>

## Rules


* The universe of the game is a plane marked into cells, which can be unlimited, limited or closed (my case).
* Each cell on this surface has eight neighbors surrounding it, and can be in two states: to be "alive" (filled) or "dead" (empty).
* The distribution of living cells at the beginning of the game is called the first generation. Each next generation is calculated based on the previous one according to the following rules:
    * an empty (dead) cell, with which three living cells are adjacent, life is born
    * if a living cell has two or three living neighbors, then this cell continues to live; otherwise (if there are less than two or more than three living neighbors), the cell dies (“from loneliness” or “from overcrowding”)
* The game ends if
    * not a single “living” cell will remain on the field
    * the configuration at the next step will exactly (without shifts and rotations) repeat itself at one of the earlier steps (a periodic configuration is added)
    * at the next step, none of the cells changes its state (a special case of the previous rule, a stable configuration is formed)

The player does not take an active part in the game. It only arranges or generates the initial configuration of "live" cells, which then change according to the rules. Despite the simplicity of the rules, a huge variety of forms can occur in the game.