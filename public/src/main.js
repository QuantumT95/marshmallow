client.init("localhost:3000");

function setup() {
  Screen.init();
  new rawImage("girl_run");
  new imageSet("tilesets", "Outside", 8, 502);
  new rawMap("maps", "testMap");

  new player();
}
function step() {
  drawMap("testMap");
}
