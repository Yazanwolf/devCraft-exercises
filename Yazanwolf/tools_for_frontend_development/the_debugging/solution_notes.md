# Debugger

## Step one copying the code and running it locally

After copying the code into my local text editor, I added the script tat into the html file and specified main.js as src then ran the code.
I tried to add and substract numbers but no result was shown.
When I opened the devtools, I noticed that there is an error in main.js line 10:37, clicking on the error, I was automatically directed to the code within the dev tools and underneath the addEventListener() method was a red line.

## Step two setting breakpionts

in the breakpoints window, I checked the select boxes of 'pause on uncaught exceptions' and refreshed the page, and I got the following error:
TypeError: Cannot read properties of null.
I noticed that when the code paused on the exception, the DOM has not been loaded yet, so I checked the script tag again and noticed that I forgot to add defer. So adding defer solved my problem.

One thing I didn't like, when adding or subtracting empty values I got Result: NaN. I set a breakpoint in the addNumbers function line 3, and tried to add num1 = 3, num2 empty, and where the code paused I saw that num2 was shown as NaN 'not a number'
so I added a validation before the functions addNumbers and subtractNumbers get called.
