# Analyse render process of huggingface website: https://huggingface.co/models

Started the recorder in performance of chrome, with network set to slow 4G and cpu slowed down 4 times.

1. There are 4 remarkable reflows, with duration between 20 and 40 ms.
2. I counted about 37 times of painting, in between there happens sometimes style recalculations and layout.
3. There are no tasks taking too long.