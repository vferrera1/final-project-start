Have various components that work together to dynamically render this page. We want to split up as much of the work as possible. Data with be stored in the DOM and will keep track of updated data
The App will contain:
     A Board, acting as the main part of our view, which contains
        Board Squares: Each board square has a
            Color
            Side length (dimension)
            Assigned position on board
        A Box which contains
            a set of Shapes: Each Shape has a
                Shape identity (e.g. "circle", "triangle")
                Color
     A Game component, which keeps track of
        The status of the game (whether the game has started/ended)
        Current level
        Score (how many times the game has been won)
        Time elapsed since start of game
     Relavent buttons to control the State of the Board and Game, such as
         Reset Button - 
            Reverts the board to the initial state
                Places the shapes back into the Box
            Resets the attributes in Game 
                (level, score, time --> 0)
         Next Button - 
            Reverts the board to the initial state, 
                Places the shapes back into the box
            Adjusts status of Game to "the next level"
                (level + 1)
                (game_status "start")
     Component Implementing Drag-Drop onto the Shapes?
    
During gameplay, the Shapes should be dragged and dropped into the colored square on the board that corresponds to the shapes' color. If done correctly, the game should register a win by increasing the score (and ending the game).
