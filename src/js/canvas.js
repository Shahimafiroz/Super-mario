/////////////////////////////////////////// IMPORTING ASSETS  /////////////////////////////////////////

import platform from "../images/platform2.png";
console.log(platform);

////////////////////////////////////////// DEFINING CANVAS AND ITS CONTEXTS ////////////////////////////////

const can = document.querySelector("canvas");
const c = can.getContext("2d");

can.width = window.innerWidth;
can.height = window.innerHeight;

// global constant variable
const gravity = 0.1;

////////////////////////////////////////////////// PLAYER CREATION ////////////////////////////////////////////////////

class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };
    /// adding downward velocity to the Player
    this.velocity = {
      x: 0,
      y: 0,
    };

    this.width = 30;
    this.height = 30;
  }
  /// drawing the player
  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  /// updating the position of the player
  update() {
    this.draw();
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;

    // adding acceleration to velocity such that it stops when it touches the bottom

    if (this.position.y + this.height + this.velocity.y <= can.height) {
      this.velocity.y += gravity;
    } else {
      this.velocity.y = 0;
    } //if else ends
  } // update function ends
} //player class ends

////////////////////////////////////////////// PLATFORM CREATION //////////////////////////////////////////////////////

class Platform {
  constructor({ x, y, image }) {
    this.position = {
      x: x,
      y: y,
    };
    this.height = 30;
    this.width = 190;
    this.image = image;
  }
  /// drawing the platform
  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}

////////////////// IMPLEMENTING THE CREATED CLASS Player & Platform BY CALLING THEM AS RESPECTIVE OBJECTS  ////////////

//// new player

const player1 = new Player();
player1.update();

////new platformssss creating multiple platforms using arrays

// displaying the html image as java script image

const image = new Image();
image.src = platform;

const platforms = [
  new Platform({ x: 200, y: 100, image }),
  new Platform({ x: 600, y: 350, image }),
  new Platform({ x: 1900, y: 250, image }),
  new Platform({ x: 1000, y: 100, image }),
  new Platform({ x: 1300, y: 250, image }),
  // new Platform({ x: 2300, y: 300 }),
  // new Platform({ x: 2700, y: 100 }),
  // new Platform({ x: 3000, y: 350 }),
  // new platform({ x: 3400, y: 200 }),
];

/// defining parameters for rectillinear motion

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

///////////////////////////////// MOTION AND ANIMATION (HEART OF THE PROGM.) ////////////////////////////////////////
///////////////////////////////// MOTION AND ANIMATION (HEART OF THE PROGM.) ////////////////////////////////////////
///////////////////////////////// MOTION AND ANIMATION (HEART OF THE PROGM.) ////////////////////////////////////////
///////////////////////////////// MOTION AND ANIMATION (HEART OF THE PROGM.) ////////////////////////////////////////
///////////////////////////////// MOTION AND ANIMATION (HEART OF THE PROGM.) ////////////////////////////////////////

let scrollOffset = 0; // win scenario -----> 1st part of code

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, can.width, can.height);
  player1.update();

  /// calling the draw function for each platform inside the array

  platforms.forEach((platform) => {
    platform.draw();
  });

  /// if else ===> for players  rectilinear motion implementation

  if (
    keys.right.pressed && // motion while the right key is pressed
    player1.position.x < 700 // limiting motion on right past 700 point
  ) {
    player1.velocity.x = 5;
  } else if (
    keys.left.pressed && // motion while left key is pressed
    player1.position.x > 200 // limitng motion on left at 200 point
  ) {
    player1.velocity.x = -5;
  } else {
    player1.velocity.x = 0; // stopping the motion if the range of player1 movement is beyond specified point

    if (keys.right.pressed) {
      scrollOffset += 5; // win scenario -----> 2nd part of code --- detecting right scrolled pixels
      platforms.forEach((platform) => {
        platform.position.x -= 5;
      }); //setting right motion to pltform1 if the right key is pressed even after reaching right lim
    } else if (keys.left.pressed) {
      scrollOffset -= 5; // win scenario -----> 3rd part of code --- detecting left scrolled pixels
      platforms.forEach((platform) => {
        platform.position.x += 5;
      }); //setting left motion to platform if left key is pressed even after reaching left lim
    } // motion when no key is pressed
  } // loop for motion when keys are pressed

  console.log(scrollOffset);

  /// if else for player landing on platform(platform collisoin detection)
  platforms.forEach((platform) => {
    if (
      player1.position.y + player1.height <= platform.position.y &&
      player1.position.y + player1.height + player1.velocity.y >=
        platform.position.y &&
      player1.position.x + player1.width >= platform.position.x &&
      player1.position.x <= platform.position.x + platform.width
    ) {
      player1.velocity.y = 0;
    }
  });

  // win scenario -----> 4th part of code --- declaring the winner.

  if (scrollOffset > 3500) {
    alert(" yahooooo !!! you won. Super Mario!!!");
  }
} // animate function ends

animate(); // calling the animate function for execution
///
//

///////////////////////////////// MOTION AND ANIMATION (HEART OF THE PROGM.) ////////////////////////////////////////
/////////////////////////////////// MOTION AND ANIMATION (HEART OF THE PROGM.) ////////////////////////////////////////
/////////////////////////////////// MOTION AND ANIMATION (HEART OF THE PROGM.) ////////////////////////////////////////
/////////////////////////////////// MOTION AND ANIMATION (HEART OF THE PROGM.) ////////////////////////////////////////
///////////////////////////////////////////////////// PLAYER MOVEMENT ////////////////////////////////////////////////

/// event listner for key down
addEventListener(
  "keydown",
  ({ keyCode }) => {
    console.log(keyCode);
    switch (keyCode) {
      case 65:
        console.log("left");
        keys.left.pressed = true;

        break;
      case 68:
        console.log("right");
        keys.right.pressed = true;

        break;
      case 87:
        console.log("up");
        player1.velocity.y -= 1;

        break;
      case 83:
        console.log("down");

        break;
    } //switch statement ends
    console.log(keys.right.pressed, keys.left.pressed);
  } // called function on keydown ends
); // keydown eventlistner ends

//// event listners for keyup

addEventListener(
  "keyup",
  ({ keyCode }) => {
    console.log(keyCode);
    switch (keyCode) {
      case 65:
        console.log("left");
        keys.left.pressed = false;

        break;
      case 68:
        console.log("right");
        keys.right.pressed = false;

        break;
      case 87:
        console.log("up");
        player1.velocity.y -= 10;

        break;
      case 83:
        console.log("down");

        break;
    } //switch statement ends
    console.log(keys.right.pressed, keys.left.pressed);
  } // called function on keyup ends
); //keyup eventlistner ends
