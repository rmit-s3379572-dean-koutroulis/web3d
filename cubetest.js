
  var scene = new THREE.Scene();
  //var camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  var renderer = new THREE.WebGLRenderer();
  var controls = new THREE.TrackballControls(camera);
controls.addEventListener('change', render);


createBox();
init();


function render() {
    renderer.render(scene, camera);
}


function init(){
  camera.position.z = 3;
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x404040, 1);
  document.body.appendChild(renderer.domElement);
  renderer.render(scene, camera);
}

function createBox()
{
  var geometry = new THREE.Geometry();
  geometry.vertices.push(new THREE.Vector3(-1, -1, 0));
  geometry.vertices.push(new THREE.Vector3(1, -1, 0));
  geometry.vertices.push(new THREE.Vector3(1, 1, 0));
  geometry.vertices.push(new THREE.Vector3(-1, 1, 0));
  geometry.faces.push(new THREE.Face3(0, 1, 2));
  geometry.faces.push(new THREE.Face3(0, 2, 3));
  geometry.faces.push(new THREE.Face3(0, 1, 2));

  geometry.computeFaceNormals();
  var material = new THREE.MeshBasicMaterial({color: 0xffff00});
var object = new THREE.Mesh(geometry, material);
scene.add(object);
}
