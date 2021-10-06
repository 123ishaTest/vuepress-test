---
title: First Changes
---
# First Changes
We will make 2 small changes now.
You might have already noticed there are some TODO's in `src/my-game/MyGame.ts`.

The `SAVE_KEY` is how we access the localStorage and save the game. Make sure to change this to something unique to your game.

The `TICK_DURATION` is how long (in seconds) one tick should take. This means your game has `1/TICK_DURATION` updates per second.
0.1 second is usually sufficient, but feel free to change this.

@[code{12-26} diff](patches/1.1-update-todo.patch)
