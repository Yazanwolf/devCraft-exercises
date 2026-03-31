## HTML
The structure of the html file looks good, I suggest using section instead of div, which is better practice of semantic html.
Putting the script at the end of the html file makes sense, a better alternative may be placing it in the head with the 'defer' tag, so it loads asynchronously and first executes after the DOM has been completely parsed, this has a the benifit that when new html elements are added to the file, we don't need to always look after the position of the script.

## JS file
the code looks very good and works perfeclty fine. I like that the code runs when the DOM has loaded completely.
If it makes sense, maybe extract a separated function for creating listItem and the delete button inside it, this makes the code a bit shorter and easier to read.

Please extract a function for creating a list item so that the code is more readable.

## CSS
The styling css looks very good.

In general, your code has a very clear and nice structure, fulfills the changes needed to be done.
Well done!
