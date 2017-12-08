#!/usr/bin/python3
# This is Santa's naughty or nice program!

import pyglet

naughty = ['Pickleboy', 'Angry Grandpa', 'Psycho Dad', 'Jeffrey Jr.']
nice = ['Jesse Ridgeway', 'Raymond Raps', 'Robert Brickey']

window = pyglet.window.Window(width=300,
                              height=300,
                              caption='The tuba is loud!')

label = pyglet.text.Label('Mah candy!',
                          font_name = 'Arial',
                          font_size = 36,
                          x=window.width//2, y=window.height//2,
                          anchor_x = 'center', anchor_y = 'center')

@window.event
def on_draw():
    window.clear()
    label.draw()

pyglet.app.run()

"""
while True:
    userCheck = input(
    "Ho ho ho! Merry Christmas! Naughty or nice? What's your name?: "
    )

    if userCheck in naughty:
        print("You get a lump of coal, naughty!")
        break
    elif userCheck in nice:
        print("You've been good! Here's a gift!")
        break
    else:
        print("Please enter a proper name.")
"""
