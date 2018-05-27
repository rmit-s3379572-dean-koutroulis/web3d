


document.onkeydown = handleKeyDown;
document.onkeyup = handleKeyUp;




  var scene = new THREE.Scene();
  //var camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  var renderer = new THREE.WebGLRenderer();
  var controls = new THREE.TrackballControls(camera);
controls.addEventListener('change', render);




var geometry = new THREE.CircleGeometry( 10, 20 );
var material = new THREE.MeshBasicMaterial( { color: 'light-blue' } );
var pond = new THREE.Mesh( geometry, material );
pond.rotation.x = 0;
pond.position.z = 0;

scene.add( pond );

var torso = "torso";
var geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(2, 0, 0));
geometry.vertices.push(new THREE.Vector3(-2, 0, 0));
geometry.vertices.push(new THREE.Vector3(0, 1, 0));
geometry.vertices.push(new THREE.Vector3(0, -1, 0));
geometry.vertices.push(new THREE.Vector3(0, 0, 1));
geometry.vertices.push(new THREE.Vector3(0, 0, -1));
geometry.faces.push(new THREE.Face3(0, 2, 4));
geometry.faces.push(new THREE.Face3(0, 4, 3));
geometry.faces.push(new THREE.Face3(0, 3, 5));
geometry.faces.push(new THREE.Face3(0, 5, 2));
geometry.faces.push(new THREE.Face3(1, 2, 5));
geometry.faces.push(new THREE.Face3(1, 5, 3));
geometry.faces.push(new THREE.Face3(1, 3, 4));
geometry.faces.push(new THREE.Face3(1, 4, 2));
var material = new THREE.MeshBasicMaterial({color: 'red'});
torso = new THREE.Mesh(geometry, material);
torso.scale = 5;
torso.position.z = 3;



//FRHip
  var FRHip = new THREE.Object3D();
  FRHip.name = "FRHip";
  FRHip.position.x = 1;
  FRHip.rotation.y = Math.PI / 2.6;

//FRUpLeg

  var geometry = new THREE.Geometry();
  geometry.vertices.push(new THREE.Vector3(1, 0, 0));
  geometry.vertices.push(new THREE.Vector3(-1, 0, 0));
  geometry.vertices.push(new THREE.Vector3(0, 0.5, 0));
  geometry.vertices.push(new THREE.Vector3(0, -0.5, 0));
  geometry.vertices.push(new THREE.Vector3(0, 0, 0.5));
  geometry.vertices.push(new THREE.Vector3(0, 0, -0.5));
  geometry.faces.push(new THREE.Face3(0, 2, 4));
  geometry.faces.push(new THREE.Face3(0, 4, 3));
  geometry.faces.push(new THREE.Face3(0, 3, 5));
  geometry.faces.push(new THREE.Face3(0, 5, 2));
  geometry.faces.push(new THREE.Face3(1, 2, 5));
  geometry.faces.push(new THREE.Face3(1, 5, 3));
  geometry.faces.push(new THREE.Face3(1, 3, 4));
  geometry.faces.push(new THREE.Face3(1, 4, 2));
  var material = new THREE.MeshBasicMaterial({color: 'green'});
  var FRUpLeg = new THREE.Mesh(geometry, material);
  FRUpLeg.name = "FRUpLeg";
  FRUpLeg.position.x = 1;
  FRUpLeg.position.y = -1;


  //FRKnee
    var FRKnee = new THREE.Object3D();
    FRKnee.name = "FRKnee";
    FRKnee.position.x = 1;
    //FRHip.rotation.z = Math.PI / 1;
    FRKnee.rotation.y = Math.PI / -2.5;


  //FRLowLeg
    var geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(1, 0, 0));
    geometry.vertices.push(new THREE.Vector3(-1, 0, 0));
    geometry.vertices.push(new THREE.Vector3(0, 0.5, 0));
    geometry.vertices.push(new THREE.Vector3(0, -0.5, 0));
    geometry.vertices.push(new THREE.Vector3(0, 0, 0.5));
    geometry.vertices.push(new THREE.Vector3(0, 0, -0.5));
    geometry.faces.push(new THREE.Face3(0, 2, 4));
    geometry.faces.push(new THREE.Face3(0, 4, 3));
    geometry.faces.push(new THREE.Face3(0, 3, 5));
    geometry.faces.push(new THREE.Face3(0, 5, 2));
    geometry.faces.push(new THREE.Face3(1, 2, 5));
    geometry.faces.push(new THREE.Face3(1, 5, 3));
    geometry.faces.push(new THREE.Face3(1, 3, 4));
    geometry.faces.push(new THREE.Face3(1, 4, 2));
    var material = new THREE.MeshBasicMaterial({color: 'green'});
    var FRLowLeg = new THREE.Mesh(geometry, material);
    FRLowLeg.name = "FRLowLeg";
    FRLowLeg.position.z = 0;
    FRLowLeg.position.x = 1;

    //FRAnkle
      var FRAnkle = new THREE.Object3D();
      FRAnkle.name = "FRAnkle";
      FRAnkle.position.x = -0;


    //FRFoot
      var geometry = new THREE.Geometry();
      geometry.vertices.push(new THREE.Vector3(1, 0, 0));
      geometry.vertices.push(new THREE.Vector3(0, -1, 0));
      geometry.vertices.push(new THREE.Vector3(0, 1, 0));
      geometry.faces.push(new THREE.Face3(1, 0, 2));
      var material = new THREE.MeshBasicMaterial({color: 'green'});
      var FRFoot = new THREE.Mesh(geometry, material);
      FRFoot.name = "FRFoot";
      FRFoot.position.x = 1;




//FLHip
  var FLHip = new THREE.Object3D();
  FLHip.name = "FLHip";
  FLHip.position.x = 1;
  FLHip.rotation.y = Math.PI / 2.6;

//FLUpLeg
  var geometry = new THREE.Geometry();
  geometry.vertices.push(new THREE.Vector3(1, 0, 0));
  geometry.vertices.push(new THREE.Vector3(-1, 0, 0));
  geometry.vertices.push(new THREE.Vector3(0, 0.5, 0));
  geometry.vertices.push(new THREE.Vector3(0, -0.5, 0));
  geometry.vertices.push(new THREE.Vector3(0, 0, 0.5));
  geometry.vertices.push(new THREE.Vector3(0, 0, -0.5));
  geometry.faces.push(new THREE.Face3(0, 2, 4));
  geometry.faces.push(new THREE.Face3(0, 4, 3));
  geometry.faces.push(new THREE.Face3(0, 3, 5));
  geometry.faces.push(new THREE.Face3(0, 5, 2));
  geometry.faces.push(new THREE.Face3(1, 2, 5));
  geometry.faces.push(new THREE.Face3(1, 5, 3));
  geometry.faces.push(new THREE.Face3(1, 3, 4));
  geometry.faces.push(new THREE.Face3(1, 4, 2));
  var material = new THREE.MeshBasicMaterial({color: 'green'});
  var FLUpLeg = new THREE.Mesh(geometry, material);
  FLUpLeg.name = "FLUpLeg";
  FLUpLeg.position.x = 1;
  FLUpLeg.position.y = 1;

  //FLKnee
    var FLKnee = new THREE.Object3D();
    FLKnee.name = "FLKnee";
    FLKnee.position.x = 1;
    FLKnee.rotation.y = Math.PI / -2.5;
    //FRHip.rotation.z = Math.PI / 1;

  //FLLowLeg
    var geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(1, 0, 0));
    geometry.vertices.push(new THREE.Vector3(-1, 0, 0));
    geometry.vertices.push(new THREE.Vector3(0, 0.5, 0));
    geometry.vertices.push(new THREE.Vector3(0, -0.5, 0));
    geometry.vertices.push(new THREE.Vector3(0, 0, 0.5));
    geometry.vertices.push(new THREE.Vector3(0, 0, -0.5));
    geometry.faces.push(new THREE.Face3(0, 2, 4));
    geometry.faces.push(new THREE.Face3(0, 4, 3));
    geometry.faces.push(new THREE.Face3(0, 3, 5));
    geometry.faces.push(new THREE.Face3(0, 5, 2));
    geometry.faces.push(new THREE.Face3(1, 2, 5));
    geometry.faces.push(new THREE.Face3(1, 5, 3));
    geometry.faces.push(new THREE.Face3(1, 3, 4));
    geometry.faces.push(new THREE.Face3(1, 4, 2));
    var material = new THREE.MeshBasicMaterial({color: 'green'});
    var FLLowLeg = new THREE.Mesh(geometry, material);
    FLLowLeg.name = "FLLowLeg";
    FLLowLeg.position.z = 0;
    FLLowLeg.position.x = 1;
    //  FRUpLeg.scale.x = 3; FRUpLeg.scale.y = 3; torso.scale.z = 3;

    //FRAnkle
      var FLAnkle = new THREE.Object3D();
      FLAnkle.name = "FLAnkle";
      FLAnkle.position.x = -0;
      //FRHip.rotation.z = Math.PI / 1;


    //FLFoot
      var geometry = new THREE.Geometry();
      geometry.vertices.push(new THREE.Vector3(1, 0, 0));
      geometry.vertices.push(new THREE.Vector3(0, -1, 0));
      geometry.vertices.push(new THREE.Vector3(0, 1, 0));
      geometry.faces.push(new THREE.Face3(1, 0, 2));
      var material = new THREE.MeshBasicMaterial({color: 'green'});
      var FLFoot = new THREE.Mesh(geometry, material);
      FLFoot.name = "FLFoot";
      FLFoot.position.x = 1;
      //  FRUpLeg.scale.x = 3; FRUpLeg.scale.y = 3; torso.scale.z = 3;



//head

var geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(1, 0, 0));
geometry.vertices.push(new THREE.Vector3(-1, 0, 0));
geometry.vertices.push(new THREE.Vector3(0, 0.5, 0));
geometry.vertices.push(new THREE.Vector3(0, -0.5, 0));
geometry.vertices.push(new THREE.Vector3(0, 0, 0.5));
geometry.vertices.push(new THREE.Vector3(0, 0, -0.5));
geometry.faces.push(new THREE.Face3(0, 2, 4));
geometry.faces.push(new THREE.Face3(0, 4, 3));
geometry.faces.push(new THREE.Face3(0, 3, 5));
geometry.faces.push(new THREE.Face3(0, 5, 2));
geometry.faces.push(new THREE.Face3(1, 2, 5));
geometry.faces.push(new THREE.Face3(1, 5, 3));
geometry.faces.push(new THREE.Face3(1, 3, 4));
geometry.faces.push(new THREE.Face3(1, 4, 2));
var material = new THREE.MeshBasicMaterial({color: 'green'});
var head = new THREE.Mesh(geometry, material);
head.name = "head";
head.position.x = 2;
//  FRUpLeg.scale.x = 3; FRUpLeg.scale.y = 3; torso.scale.z = 3;

var jaw = new THREE.Object3D();
jaw.name = "jaw";
jaw.position.x = -0;
//FRHip.rotation.z = Math.PI / 1;



//REye
var geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(0.5, 0, 0));
geometry.vertices.push(new THREE.Vector3(-0.5, 0, 0));
geometry.vertices.push(new THREE.Vector3(0, 0.25, 0));
geometry.vertices.push(new THREE.Vector3(0, -0.25, 0));
geometry.vertices.push(new THREE.Vector3(0, 0, 0.25));
geometry.vertices.push(new THREE.Vector3(0, 0, -0.25));
geometry.faces.push(new THREE.Face3(0, 2, 4));
geometry.faces.push(new THREE.Face3(0, 4, 3));
geometry.faces.push(new THREE.Face3(0, 3, 5));
geometry.faces.push(new THREE.Face3(0, 5, 2));
geometry.faces.push(new THREE.Face3(1, 2, 5));
geometry.faces.push(new THREE.Face3(1, 5, 3));
geometry.faces.push(new THREE.Face3(1, 3, 4));
geometry.faces.push(new THREE.Face3(1, 4, 2));
var material = new THREE.MeshBasicMaterial({color: 'black'});
var REye = new THREE.Mesh(geometry, material);
REye.name = "REye";
REye.position.x = 0.4;
REye.position.y = 0.5;
//  FRUpLeg.scale.x = 3; FRUpLeg.scale.y = 3; torso.scale.z = 3;



//LEye
var geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(0.5, 0, 0));
geometry.vertices.push(new THREE.Vector3(-0.5, 0, 0));
geometry.vertices.push(new THREE.Vector3(0, 0.25, 0));
geometry.vertices.push(new THREE.Vector3(0, -0.25, 0));
geometry.vertices.push(new THREE.Vector3(0, 0, 0.25));
geometry.vertices.push(new THREE.Vector3(0, 0, -0.25));
geometry.faces.push(new THREE.Face3(0, 2, 4));
geometry.faces.push(new THREE.Face3(0, 4, 3));
geometry.faces.push(new THREE.Face3(0, 3, 5));
geometry.faces.push(new THREE.Face3(0, 5, 2));
geometry.faces.push(new THREE.Face3(1, 2, 5));
geometry.faces.push(new THREE.Face3(1, 5, 3));
geometry.faces.push(new THREE.Face3(1, 3, 4));
geometry.faces.push(new THREE.Face3(1, 4, 2));
var material = new THREE.MeshBasicMaterial({color: 'black'});
var LEye = new THREE.Mesh(geometry, material);
LEye.name = "LEye";
LEye.position.x = 0.4;
LEye.position.y = -0.5;
//LEye.scale.x = 0.3; LEye.scale.y = 0; LEye.scale.z = 0;



//RLHip
  var RLHip = new THREE.Object3D();
  RLHip.name = "RLHip";
  RLHip.position.x = -3;
  RLHip.position.z = 0.5;
  RLHip.rotation.z = Math.PI / -2;


//RLUpLeg
  var geometry = new THREE.Geometry();
  geometry.vertices.push(new THREE.Vector3(1, 0, 0));
  geometry.vertices.push(new THREE.Vector3(-1, 0, 0));
  geometry.vertices.push(new THREE.Vector3(0, 0.5, 0));
  geometry.vertices.push(new THREE.Vector3(0, -0.5, 0));
  geometry.vertices.push(new THREE.Vector3(0, 0, 0.5));
  geometry.vertices.push(new THREE.Vector3(0, 0, -0.5));
  geometry.faces.push(new THREE.Face3(0, 2, 4));
  geometry.faces.push(new THREE.Face3(0, 4, 3));
  geometry.faces.push(new THREE.Face3(0, 3, 5));
  geometry.faces.push(new THREE.Face3(0, 5, 2));
  geometry.faces.push(new THREE.Face3(1, 2, 5));
  geometry.faces.push(new THREE.Face3(1, 5, 3));
  geometry.faces.push(new THREE.Face3(1, 3, 4));
  geometry.faces.push(new THREE.Face3(1, 4, 2));
  var material = new THREE.MeshBasicMaterial({color: 'green'});
  var RLUpLeg = new THREE.Mesh(geometry, material);
  RLUpLeg.name = "RRLeg";
  RLUpLeg.position.x = -1;
  RLUpLeg.position.y = 1;


  //RLKnee
    var RLKnee = new THREE.Object3D();
    RLKnee.name = "RLKnee";
    RLKnee.position.x = -1;
    RLKnee.position.z = -2;
    RLKnee.rotation.y = Math.PI / 2;


  //RLLowLeg
    var geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(1, 0, 0));
    geometry.vertices.push(new THREE.Vector3(-1, 0, 0));
    geometry.vertices.push(new THREE.Vector3(0, 0.5, 0));
    geometry.vertices.push(new THREE.Vector3(0, -0.5, 0));
    geometry.vertices.push(new THREE.Vector3(0, 0, 0.5));
    geometry.vertices.push(new THREE.Vector3(0, 0, -0.5));
    geometry.faces.push(new THREE.Face3(0, 2, 4));
    geometry.faces.push(new THREE.Face3(0, 4, 3));
    geometry.faces.push(new THREE.Face3(0, 3, 5));
    geometry.faces.push(new THREE.Face3(0, 5, 2));
    geometry.faces.push(new THREE.Face3(1, 2, 5));
    geometry.faces.push(new THREE.Face3(1, 5, 3));
    geometry.faces.push(new THREE.Face3(1, 3, 4));
    geometry.faces.push(new THREE.Face3(1, 4, 2));
    var material = new THREE.MeshBasicMaterial({color: 'green'});
    var RLLowLeg = new THREE.Mesh(geometry, material);
    RLLowLeg.name = "RLLowLeg";
    RLLowLeg.position.z = 0;

    //RLAnkle
      var RLAnkle = new THREE.Object3D();
      RLAnkle.name = "RLAnkle";
      RLAnkle.position.x = -1;


    //RLFoot
    var geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(1, 0, 0));
    geometry.vertices.push(new THREE.Vector3(-1, 0, 0));
    geometry.vertices.push(new THREE.Vector3(0, 0.5, 0));
    geometry.vertices.push(new THREE.Vector3(0, -0.5, 0));
    geometry.vertices.push(new THREE.Vector3(0, 0, 0.5));
    geometry.vertices.push(new THREE.Vector3(0, 0, -0.5));
    geometry.faces.push(new THREE.Face3(0, 2, 4));
    geometry.faces.push(new THREE.Face3(0, 4, 3));
    geometry.faces.push(new THREE.Face3(0, 3, 5));
    geometry.faces.push(new THREE.Face3(0, 5, 2));
    geometry.faces.push(new THREE.Face3(1, 2, 5));
    geometry.faces.push(new THREE.Face3(1, 5, 3));
    geometry.faces.push(new THREE.Face3(1, 3, 4));
    geometry.faces.push(new THREE.Face3(1, 4, 2));
    var material = new THREE.MeshBasicMaterial({color: 'green'});
    var RLFoot = new THREE.Mesh(geometry, material);
    RLFoot.name = "RLFoot";
    RLFoot.position.z = 0;


//RLMT
    var RLmt = new THREE.Object3D();
    RLmt.name = "RLmt";
    RLmt.position.x = 2;
    RLmt.position.z = 0;
    RLmt.rotation.y = Math.PI / 2;
    RLmt.rotation.x = Math.PI / 2;

    //RLtoes
    var geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(1, 0, 0));
    geometry.vertices.push(new THREE.Vector3(0, -1, 0));
    geometry.vertices.push(new THREE.Vector3(0, 1, 0));
    geometry.faces.push(new THREE.Face3(1, 0, 2));
    var material = new THREE.MeshBasicMaterial({color: 'black'});
    var RLtoes = new THREE.Mesh(geometry, material);
    RLtoes.name = "RLtoes";
    RLtoes.position.x = 0;


      //RRHip
        var RRHip = new THREE.Mesh(geometry, material);
        RRHip.name = "RRHip";
        RRHip.position.x = -3;
        RRHip.position.z = 0.5;
        RRHip.rotation.z = Math.PI / 2;


      //RRUpLeg
        var geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(1, 0, 0));
        geometry.vertices.push(new THREE.Vector3(-1, 0, 0));
        geometry.vertices.push(new THREE.Vector3(0, 0.5, 0));
        geometry.vertices.push(new THREE.Vector3(0, -0.5, 0));
        geometry.vertices.push(new THREE.Vector3(0, 0, 0.5));
        geometry.vertices.push(new THREE.Vector3(0, 0, -0.5));
        geometry.faces.push(new THREE.Face3(0, 2, 4));
        geometry.faces.push(new THREE.Face3(0, 4, 3));
        geometry.faces.push(new THREE.Face3(0, 3, 5));
        geometry.faces.push(new THREE.Face3(0, 5, 2));
        geometry.faces.push(new THREE.Face3(1, 2, 5));
        geometry.faces.push(new THREE.Face3(1, 5, 3));
        geometry.faces.push(new THREE.Face3(1, 3, 4));
        geometry.faces.push(new THREE.Face3(1, 4, 2));
        var material = new THREE.MeshBasicMaterial({color: 'green'});
        var RRUpLeg = new THREE.Mesh(geometry, material);
        RRUpLeg.name = "RRLeg";
        RRUpLeg.position.x = -1;
        RRUpLeg.position.y = -1;

        //RRKnee
          var RRKnee = new THREE.Object3D();
          RRKnee.name = "RRKnee";
          RRKnee.position.x = -1;
          RRKnee.position.z = -2;
          RRKnee.rotation.y = Math.PI / 2;


        //RRLowLeg
          var geometry = new THREE.Geometry();
          geometry.vertices.push(new THREE.Vector3(1, 0, 0));
          geometry.vertices.push(new THREE.Vector3(-1, 0, 0));
          geometry.vertices.push(new THREE.Vector3(0, 0.5, 0));
          geometry.vertices.push(new THREE.Vector3(0, -0.5, 0));
          geometry.vertices.push(new THREE.Vector3(0, 0, 0.5));
          geometry.vertices.push(new THREE.Vector3(0, 0, -0.5));
          geometry.faces.push(new THREE.Face3(0, 2, 4));
          geometry.faces.push(new THREE.Face3(0, 4, 3));
          geometry.faces.push(new THREE.Face3(0, 3, 5));
          geometry.faces.push(new THREE.Face3(0, 5, 2));
          geometry.faces.push(new THREE.Face3(1, 2, 5));
          geometry.faces.push(new THREE.Face3(1, 5, 3));
          geometry.faces.push(new THREE.Face3(1, 3, 4));
          geometry.faces.push(new THREE.Face3(1, 4, 2));
          var material = new THREE.MeshBasicMaterial({color: 'green'});
          var RRLowLeg = new THREE.Mesh(geometry, material);
          RRLowLeg.name = "RLLowLeg";
          RRLowLeg.position.z = 0;


          //RRAnkle
            var RRAnkle = new THREE.Object3D();
            RRAnkle.name = "RRAnkle";
            RRAnkle.position.x = -0;

          //RRFoot
            var geometry = new THREE.Geometry();
            geometry.vertices.push(new THREE.Vector3(1, 0, 0));
            geometry.vertices.push(new THREE.Vector3(-1, 0, 0));
            geometry.vertices.push(new THREE.Vector3(0, 0.5, 0));
            geometry.vertices.push(new THREE.Vector3(0, -0.5, 0));
            geometry.vertices.push(new THREE.Vector3(0, 0, 0.5));
            geometry.vertices.push(new THREE.Vector3(0, 0, -0.5));
            geometry.faces.push(new THREE.Face3(0, 2, 4));
            geometry.faces.push(new THREE.Face3(0, 4, 3));
            geometry.faces.push(new THREE.Face3(0, 3, 5));
            geometry.faces.push(new THREE.Face3(0, 5, 2));
            geometry.faces.push(new THREE.Face3(1, 2, 5));
            geometry.faces.push(new THREE.Face3(1, 5, 3));
            geometry.faces.push(new THREE.Face3(1, 3, 4));
            geometry.faces.push(new THREE.Face3(1, 4, 2));
            var material = new THREE.MeshBasicMaterial({color: 'green'});
            var RRFoot = new THREE.Mesh(geometry, material);
            RRFoot.name = "RRFoot";
            RRFoot.position.x = -1;


            var RRmt = new THREE.Object3D();
            RRmt.name = "RRmt";
            RRmt.position.x = 2;
            RRmt.position.z = 0;
            RRmt.rotation.y = Math.PI / 2;
            RRmt.rotation.x = Math.PI / -2;
            //RRtoes
            var geometry = new THREE.Geometry();
            geometry.vertices.push(new THREE.Vector3(1, 0, 0));
            geometry.vertices.push(new THREE.Vector3(0, -1, 0));
            geometry.vertices.push(new THREE.Vector3(0, 1, 0));
            geometry.faces.push(new THREE.Face3(1, 0, 2));
            var material = new THREE.MeshBasicMaterial({color: 'black'});
            var RRtoes = new THREE.Mesh(geometry, material);
            RRtoes.name = "RRtoes";
            RRtoes.position.x = 0;
            animate();
            createFrog();
            createAxes();
            init();



            function createFrog(){
              scene.add(torso);
              torso.add(createAxes(3));
              torso.add(FRHip);
              FRHip.add(createAxes(3));
              FRHip.add(FRUpLeg);
              FRUpLeg.add(createAxes(3));
              FRUpLeg.add(FRKnee);
              FRKnee.add(createAxes(3));
              FRKnee.add(FRLowLeg);
              FRLowLeg.add(createAxes(3));
              FRLowLeg.add(FRAnkle);
              FRAnkle.add(createAxes(3));
              FRAnkle.add(FRFoot);
              torso.add(FLHip);
              FLHip.add(createAxes(3));
              FLHip.add(FLUpLeg);
              FLUpLeg.add(createAxes(3));
              FLUpLeg.add(FLKnee);
              FLKnee.add(createAxes(3));
              FLKnee.add(FLLowLeg);
              FLLowLeg.add(createAxes(3));
              FLLowLeg.add(FLAnkle);
              FLAnkle.add(createAxes(3));
              FLAnkle.add(FLFoot);
              FLAnkle.add(createAxes(3));
              torso.add(head);
              head.add(createAxes(3));
              head.add(jaw);
              jaw.add(createAxes(3));
              head.add(REye);
              REye.add(createAxes(3));
              head.add(LEye);
              LEye.add(createAxes(3));
              torso.add(RLHip);
              RLHip.add(createAxes(3));
              RLHip.add(RLUpLeg);
              RLUpLeg.add(createAxes(3));
              RLUpLeg.add(RLKnee);
              RLKnee.add(createAxes(3));
              RLKnee.add(RLLowLeg);
              RLLowLeg.add(createAxes(3));
              RLLowLeg.add(RLAnkle);
              RLAnkle.add(createAxes(3));
              RLAnkle.add(RLFoot);
              RLFoot.add(createAxes(3));
              RLFoot.add(RLmt);
              RLmt.add(createAxes(3));
              RLmt.add(RLtoes);
              RLtoes.add(createAxes(3));
              torso.add(RRHip);
              RRHip.add(createAxes(3));
              RRHip.add(RRUpLeg);
              RRUpLeg.add(createAxes(3));
              RRUpLeg.add(RRKnee);
              RRKnee.add(createAxes(3));
              RRKnee.add(RRLowLeg);
              RRLowLeg.add(createAxes(3));
              RRLowLeg.add(RRAnkle);
              RRAnkle.add(createAxes(3));
              RRAnkle.add(RRFoot);
              RRFoot.add(createAxes(3));
              RRFoot.add(RRmt);
              RRmt.add(createAxes(3));
              RRmt.add(RRtoes);
              RRtoes.add(createAxes(3));
            }

function handleKeyDown(event)
{
//Joint	Key	Axis	Range
//Hip	h	z	[-90,0]
//Ankle	a	z	[-180,180]
//Toes	t	z	[-90,90]
switch (event.keyCode) {
  case 38:
      rotation.z += 1 * Math.PI / 180;
      break;
  case 40:
      rotation.z -= 1 * Math.PI / 180;
      break;
case 37:
    rotation.z += 1 * Math.PI / 180;
    break;
case 39:
    rotation.z -= 1 * Math.PI / 180;
    break;
  }
}
function handleKeyUp(event)
{

}



function render() {
    renderer.render(scene, camera);
}

function animate() {
    render();
    requestAnimationFrame(animate);
    controls.update();
}
function init(){
  camera.position.z = 15;
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x404040, 1);
  document.body.appendChild(renderer.domElement);
  renderer.render(scene, camera);
}
// returns square bipyramid (octahedron) object


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
