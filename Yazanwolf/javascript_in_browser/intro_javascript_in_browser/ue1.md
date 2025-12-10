# My three favourite experiments are:
https://experiments.withgoogle.com/dont-touch-the-art

https://experiments.withgoogle.com/art-coloring-book-holiday

https://experiments.withgoogle.com/dantes-inferno

# Unfortunately I didn't find a git repo for neither of these three experiments but might be able to answer some questions about Inferno experiment:

## https://experiments.withgoogle.com/dantes-inferno
I like this experiment because it summerizes the great work of Dante's "Inferno" in a very nice graphical way
you can go the way of inferno from top to buttom while having a description of every station written on the left side.
They used the old english to write the paragraphs which I find very interesting.
    1- Browser API: I assume the used canvas because the figures are highlighted whenever you hover over them with the mouse.
    2- Third party frameworks: I think it's all built with plain JavaScript.
    3- Third party API: No idea.
    4- Internal or external JavaScript: 
        both are used, in the head element there is one script which contains JavaScript code directly.
        there are blocking scripts in the head, another one is asynchronous which is form google-analytics
        there are two scripts loaded at the end of the body element.
    5- Code-Transpiler: I think a transpiler is used, because the internal JavaScript code looks like transpiled and not very readable.
    6- What I would do differently: as I can't see the code I don't have much to say, but the Internal JavaScript code can surely be moved
    into an external JS data. maybe some of the blocking scripts could be defer or async.
