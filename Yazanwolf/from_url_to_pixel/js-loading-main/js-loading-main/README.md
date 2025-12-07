# JS Loading

1. Klone dieses Repository oder lade es herunter.
2. Falls du Node.js noch nicht auf deinem Computer hast, musst du es zuerst installieren. Gehe auf die offizielle **[Node.js Webseite](https://nodejs.org/)** und lade die empfohlene Version für dein Betriebssystem herunter. Folge den Installationsanweisungen.
3. Falls du `http-server` noch nicht installiert hast,  gib den Befehl `npm install -g http-server` auf deinem Terminal ein. Dies installiert den `http-server` global auf deinem Computer.
4. Navigiere zum Verzeichnis dieses Repositories in deinem Terminal und gib den Befehl `http-server` ein. Das macht die Dateien in diesem Verzeichnis über einen lokalen Webserver auf Port 8080 verfügbar.
4. Öffne die Webseite [http://localhost:8080/](http://localhost:8080/) in deinem Browser.


# Notes:
before modifying the scripts in index.html, loading the page in cognito mode, with cpu slowed down 4 times and network set to slow 4G
LCP was 1.57 seconds.
after optemizing the scripts the LCP was 1.02 seconds.

# here are the detailed calculations before and after modifications according to chrome performance profiler:

## before
Rendering:  82 ms
Painting:   37 ms
Scripting:  17 ms
Loading:    3 ms

## after
Rendering:  69 ms
Painting:   35 ms
Scripting:  17 ms
Loading:    2 ms