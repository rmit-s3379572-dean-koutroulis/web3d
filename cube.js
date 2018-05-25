





  var scene = new THREE.Scene();
  //var camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  var renderer = new THREE.WebGLRenderer();
  var controls = new THREE.TrackballControls(camera);
controls.addEventListener('change', render);

animate();
createBox();
createAxes();
init();



function render() {
    renderer.render(scene, camera);
}

function animate() {
    render();
    requestAnimationFrame(animate);
    controls.update();
}
function init(){
  camera.position.z = 10;
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x404040, 1);
  document.body.appendChild(renderer.domElement);
  renderer.render(scene, camera);
}

function createBox()
{
  var geometry = new THREE.Geometry();
  geometry.vertices.push(new THREE.Vector3(-2, -1, 0));
  geometry.vertices.push(new THREE.Vector3(2, -1, 0));
  geometry.vertices.push(new THREE.Vector3(2, 1, 0));
  geometry.vertices.push(new THREE.Vector3(-2, 1, 0));

  geometry.vertices.push(new THREE.Vector3(-2, -1, 1));
  geometry.vertices.push(new THREE.Vector3(2, -1, 1));
  geometry.vertices.push(new THREE.Vector3(2, 1, 1));
  geometry.vertices.push(new THREE.Vector3(-2, 1, 1));



  geometry.faces.push(new THREE.Face3(0, 1, 2));
  geometry.faces.push(new THREE.Face3(0, 2, 3));
  geometry.faces.push(new THREE.Face3(0, 1, 2));

  geometry.faces.push(new THREE.Face3(4, 5, 6));
  geometry.faces.push(new THREE.Face3(4, 6, 7));
  geometry.faces.push(new THREE.Face3(4, 5, 6));

  geometry.faces.push(new THREE.Face3(0, 4, 5));
  geometry.faces.push(new THREE.Face3(1, 5, 6));
  geometry.faces.push(new THREE.Face3(2, 6, 7));
  geometry.faces.push(new THREE.Face3(3, 7, 4));

  geometry.faces.push(new THREE.Face3(1, 0, 5));



  geometry.computeFaceNormals();
  var material = new THREE.MeshBasicMaterial({color: 0xffff00});
var object = new THREE.Mesh(geometry, material);
scene.add(object);
}


/**
 * Create and return a set of axes
 */

function createAxes(length)
{
  length = 5
  var geometry = new THREE.Geometry();
  geometry.vertices.push(new THREE.Vector3(0, 0, 0));
  geometry.vertices.push(new THREE.Vector3(4, 0, 0));
  geometry.vertices.push(new THREE.Vector3(0, 0, 0));
  geometry.vertices.push(new THREE.Vector3(0, length, 0));
  geometry.vertices.push(new THREE.Vector3(0, 0, 0));
  geometry.vertices.push(new THREE.Vector3(0, 0, length));
  geometry.colors.push(new THREE.Color(0xff0000));
  geometry.colors.push(new THREE.Color(0xff0000));
  geometry.colors.push(new THREE.Color(0x00ff00));
  geometry.colors.push(new THREE.Color(0x00ff00));
  geometry.colors.push(new THREE.Color(0x0000ff));
  geometry.colors.push(new THREE.Color(0x0000ff));

  var material = new THREE.LineBasicMaterial();
  material.vertexColors = THREE.VertexColors;

  var axes = new THREE.LineSegments(geometry, material);
  axes.name = "axes";

  return axes;
}
