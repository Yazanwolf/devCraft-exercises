# Suggestions to optemize performance

## After using the dev-tools and setting throtteling into 3G, I refreshed the website and noticed the following:

Negative notices:

- there are 3 images that took about 23 seconds each to load: image1.jpg image2.jpg image3.jpg
- css and js files took 2 seconds waiting on a server response

Positive notices:

- after loading the page again, the images, js and css files didn't take long to load.
- verifying the headers in the request of all the images, js and css files, I saw that status-code was: 200 ok (from memory cache)
  so caching the resources is a good optimization practice already.

## Suggestions:

- Loading the images lazily could make the loading of the page faster, as the images are not essential.
- After inspecting the js file, there is loop that loops 1000.000 times unnecessarily, so minimizing the js file would make the performance much better.
- Compressing the images
- Caching the resources is already done.
