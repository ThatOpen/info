---
title: 🥽 WebXR
sidebar_position: 7
---

import {IfcAlert} from "../../../../src/components/Alert/Alert";
import {IfcCard} from "../../../../src/components/Card/InfoCard";
import {Scene} from "../../../../src/components/Scene/Scene"

## Introduction

<a href="https://www.w3.org/TR/webxr/">WebXR</a> provides the functionality needed to bring both augmented and virtual reality (AR and VR) to the web.

<IfcCard>
    Having a VR headset is not required to develop for WebXR. 🔌 You can simulate a VR headset using tools such as <a href="https://chrome.google.com/webstore/detail/webxr-api-emulator/mjddjgeghkdijejnciaefnkjmkafnnje?hl=en">this Chrome plugin</a> to test your work.
</IfcCard>

## How to do it

### Groundwork

The good news is that after the hello world tutorial we already have a three.js scene with our model geometry inside of it - so now we can take advantage of other three.js features.  This includes an existing module for WebXR.  We will follow the short <a href="https://threejs.org/docs/#manual/en/introduction/How-to-create-VR-content">three.js tutorial</a> to make our scene acceptable for WebXR.

First import the three.js WebXR module into your file:
```javascript
import { VRButton } from 'three/addons/webxr/VRButton.js';
```

This module will take care of a lot of the heavy lifting, but we still have a couple things to do.  First, append a VR button (which is created by three.js) to the DOM:
```javascript
document.body.appendChild( VRButton.createButton( renderer ) );
```

We also need to make a couple changes to our three.js renderer.  We will tell our render to enable WebXR:
```javascript
renderer.xr.enabled = true;
```

And we will also need to modify our animation loop:
```javascript
//Animation loop
const animate = () => {
  /*
  renderer.render(scene, camera);              // <-- Replace this 
  requestAnimationFrame(animate);
  */
  
  renderer.setAnimationLoop( function () {    // <-- With this
	  renderer.render( scene, camera ); 
  } );
};

animate();
```

🥳 And that's all needed to get a basic VR viewer running!  However, its not really enough practically, as you can only look around in your headset, with no way to move around the model or utilize any handset controllers.  Lets changes that...

### Adding Functionality 🎮

In VR headsets we are in a XR session and we have no mouse and no DOM to interact with, so we want to access these controllers to be able to interact with our model in the XR Session.
First lets import another module form `three` that will provide visualization of the controllers in the session:
```javascript
import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory.js';
```
Now let's access the controlelrs from the renderer:
```javascript
controller1 = renderer.xr.getController( 0 );
scene.add( controller1 );
controller2 = renderer.xr.getController( 1 );
scene.add( controller2 );
```

And add the visible geometry for the controllers to our scene:
```javascript
const controllerModelFactory = new XRControllerModelFactory();

controllerGrip1 = renderer.xr.getControllerGrip( 0 );
controllerGrip1.add( controllerModelFactory.createControllerModel( controllerGrip1 ) );
scene.add( controllerGrip1 );

controllerGrip2 = renderer.xr.getControllerGrip( 1 );
controllerGrip2.add( controllerModelFactory.createControllerModel( controllerGrip2 ) );
scene.add( controllerGrip2 );
```

Now that we have access to the controlls we can make some use out of them. VR headsets come with varying hand controllers usually with many buttons, but due to lack of standardization three only provides out-of-the-box support for limited controller events `selectstart`, `selectend`, `squeezestart` and `squeezeend`.
From here you can use your imagination for what you want these events to trigger in your scene or on your IFC model.  For this example we will show a way to allow movement 🏃🏾 around the model (pretty important for models of buliding, houses, etc 👷🏻‍♀️ ).
We will utilize the squeeze functionality on the first controller to control movement.  When the user squeezes the controller they will travel in whatever direction they are looking.  And when they release the squeeze (`squeezeend`), they will stop.

To do this properly we will need to make some changes to our camera to carry it around our scene as we move.  We do this by making a camera dolly 🛺 and a 'dummy' camera to get proper orientations.
```javascript
//Create a 3D object to carry the camera around XR session
const cameraDolly = new Object3D();
cameraDolly.position.x = 0
cameraDolly.position.y = 1.6
cameraDolly.position.z = 5;
cameraDolly.add(camera);
scene.add(cameraDolly);

//Add dummy camera to accurately get camera orientation in handleMovement function
const dummyCam = new Object3D();
camera.add(dummyCam);
```

We are going to determine the user movement on each render call from `three`.  So we will modify our render function to accomidate this:
```javascript

const animate = () => {
  // renderer.setAnimationLoop( function () {    
	//  renderer.render( scene, camera );         // <-- REPLACE THIS
  // } );
  renderer.setAnimationLoop( render );          // <-- WITH THIS
};

const clock = new Clock();            

function render() {
    const dt = clock.getDelta();
    if (controller1) { handleUserMovement(dt) }   // WE WILL CREATE THIS handleUserMovement FUNCTION NEXT
    renderer.render( scene, camera );
}

animate();
```

Now with every render we will call the `handleUserMovement` function.  Let's define it:
```javascript
var letUserMove = false                                 // we will use a boolean to keep track if user is wanting to move or not
function allowMovement() { letUserMove = true }         // these 2 simple functions will keep track of users desire and be called from controller events
function stopMovement() { letUserMove = false }

function handleUserMovement(dt) {
    if (letUserMove) {                                    // if user is squeezing controller 1
        const speed = 2;
        const moveZ = -dt * speed                         // dt is time difference between renders.  adjust speed constant to get the speed you like for movement
        const saveQuat = cameraDolly.quaternion.clone();  // Remembering and passing position attributes among dolly and dummy to avoid some finicky behavior
        var holder = new Quaternion()                     
        dummyCam.getWorldQuaternion(holder)
        cameraDolly.quaternion.copy(holder);              
        cameraDolly.translateZ(moveZ);                    // translate the camera dolly (with camera) in the Z direction - so into the view / where they are looking
        cameraDolly.quaternion.copy(saveQuat)             
    }
}
```

Now we bind the `allowMovement()` and `stopMovement()` functions to the controller with event listeners.
```javascript
controller1.addEventListener( 'squeezestart', allowMovement );
controller1.addEventListener( 'squeezeend', stopMovement );
```

### Selecting and Highlighting Objects In The Virtual World 🔆
OK, we can move 🕺🏻, now let's 'touch'.  This example will allow us to highlight a component in the IFC model.
When we load our IFC model we will create a 'ghost' model that will show the non-highlighted parts.  We set this up on model load:
```javascript
...
ifcLoader.load(ifcURL, (ifcModel) => {
        //Make a translucent copy geometry - so when IFC model is hidden on item highlight, the remaining items take 'ghost' view  
        const modelCopy = new Mesh(
            ifcModel.geometry,
            new MeshLambertMaterial({
                    transparent: true,
                    opacity: 0.1,
                    color: 0x77aaff
        }));
        ifcModels.push(ifcModel);
        scene.add(modelCopy)
        scene.add(ifcModel)
      });
 ...
```

We will need to setup a raycaster - but unlike other tutorials with raycaster, we don't have a mouse to cast from, but rather a controller, with not an x,y position but a position and orientation:
```javascript
raycaster = new Raycaster();
raycaster.firstHitOnly = true;

function cast(controller) {
    tempMatrix.identity().extractRotation( controller.matrixWorld );
    raycaster.ray.origin.setFromMatrixPosition( controller.matrixWorld );
    raycaster.ray.direction.set( 0, 0, - 1 ).applyMatrix4( tempMatrix );
    // Casts a ray
    return raycaster.intersectObjects(ifcModels);
}
```

We also want to define the highlight color of the objects we select:
```javascript
//Will apply material completely transparent on select
const highlightStrongMaterial = new MeshLambertMaterial({
    transparent: true,
    opacity: 0.9,
    color: 0xff88ff,
    depthTest: false
})
```

And our functions that the controller will call to select a component or clear selections:
```javascript
function highlight(event) {
    const controller = event.target;
    const found = cast(controller)[0];
    if (found) {
        const index = found.faceIndex;
        const geometry = found.object.geometry;
        const id = ifcLoader.ifcManager.getExpressId(geometry, index);
        const modelID = found.object.modelID;
        //Creates 'highlight' subset
        ifcLoader.ifcManager.createSubset({
            modelID: modelID,
            ids: [id],
            material: highlightStrongMaterial,
            scene: scene,
            removePrevious: true,
            customID: 'highlight-sub'
        });
        for (var i = 0; i < ifcModels.length; i++) {
            //Hide all IFC models (only the transparent copies will remain seen with the highlight subset)
            ifcModels[i].visible = false;
        }
    } else {        // if no item found (we click into open space) then clear highlights
        clearHighlight(event)
    }
}

//Removes previous highlight
function clearHighlight(event) {
    //Loop through all loaded IFC models
    for (var i = 0; i < ifcModels.length; i++) {
        //Remove the 'highlight' subset
        ifcLoader.ifcManager.removeSubset(ifcModels[i].modelID, highlightStrongMaterial, 'highlight-sub');
        //Make the IFC Model visible again
        ifcModels[i].visible = true;
    }
}
```

Now all that is left is to bind the highlight and clearHiglight functions to open event listeners on our controllers:
```javascript
controller2.addEventListener( 'selectstart', highlight );
controller2.addEventListener( 'squeezestart', clearHighlight );
```

### Picking Objects in VR 🎯
We're not done yet. We have some open event listeners, so let's use them.  Now we will select objects with the first controllers `selectstart` and display it's `expressID` and description.
Just one problem.  We have no DOM; we are in a XRSession; so how are we going to display this information?  There are a number of ways to go about this. In this example we will use a undocumented component within `three` called HTMLMesh.  However, there are a number of other open source libraries and other solutions that you can gladly explore here.
```javascript
import { HTMLMesh } from 'three/examples/jsm/interactive/HTMLMesh.js';
```

Our first controller's `select` events are still open, so lets go ahead and fill that up with a `pick` function we will define after:
```javascript
controller1.addEventListener( 'selectstart', pick );
```

We create a couple DOM elements to place our info in, but remember they will never be scene as we don't see the DOM.  But HTMLMesh will take these and render a 3D representation of them.
```javascript
const outputId = document.getElementById("id-output");
const outputDesc = document.getElementById("desc-output");
const messageBlock = document.getElementById("message-container");
propMesh = new HTMLMesh( messageBlock );
```

And now we have all we need to write our `pick` function - the HTMLMesh to show the info and we can utilize the `cast` function we've already written to pick the objects
```javascript
async function pick(event) {
    const controller = event.target;
    const found = cast(controller)[0];
    if (found) {
        const index = found.faceIndex;
        const geometry = found.object.geometry;
        const ifc = ifcLoader.ifcManager;
        const id = ifc.getExpressId(geometry, index);
        const modelID = found.object.modelID;
        const props = await ifc.getItemProperties(modelID, id);
        // Set the DOM element info to what we want to show
        const expId = props.expressID;
        outputId.innerHTML = `ExpressID : ${expId}`;    
        const desc = props.Name.value;
        outputDesc.innerHTML = `Name: ${desc}`;
        propMesh.removeFromParent();           // Remove previous selections         
        propMesh = new HTMLMesh( messageBlock );   // create a HTML Mesh
        // Position the info display between the camera / headset and the selected item, with small offset to make sure it's not in the object
        setX = found.point.x + 0.2*(cameraDolly.position.x - found.point.x);
        setY = found.point.y + 0.2*(cameraDolly.position.y - found.point.y);
        setZ = found.point.z + 0.2*(cameraDolly.position.z - found.point.z);
        // orient the info display to face the user.
        propMesh.position.set( setX, setY, setZ );
        propMesh.lookAt(cameraDolly.position);
        propMesh.scale.setScalar( 2 );
        scene.add(propMesh);
    }
}
```

la fin. 👨🏼‍🎨


### The result
<a href="https://github.com/IFCjs/hello-world/tree/main/examples/web-ifc-three/webxr">Github repo</a>
<Scene link={"https://ifcjs.github.io/hello-world/examples/web-ifc-three/webxr/"}/>

## Next steps

🎉🎉🎉
Yoohoo! You should now be prepared to take your IFC programs to the virtual world 😎
