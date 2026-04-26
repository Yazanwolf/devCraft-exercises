document.getElementById("loadScript").addEventListener("click", function() {
  let scriptElement = document.createElement("script");
  scriptElement.src = "js/script3.js";
  document.body.appendChild(scriptElement);
});

console.log("Script 2 ist fertig geladen");
