function Human() {
  this.skin = 'rosy';
  this.startsToCountFrom = 1;
};
Human.prototype.talk = function() {
  console.log("Programming is a mystery.");
};
function Educated() {
  this.skin = 'ruddy';
  this.startsToCountFrom = 1;
};
Educated.prototype = Object.create(Human.prototype);
function Programmer() {
  this.skin = 'pale';
  this.startsToCountFrom = 0;
};
Programmer.prototype = Object.create(Educated.prototype);
Programmer.prototype.talk = function() {
  console.log("All the same, programming is a mystery.");
};

function GameDeveloper() {
  this.skin = 'wrinkled';
  this.startsToCountFrom = 0;
};
GameDeveloper.prototype = Object.create(Programmer.prototype);
GameDeveloper.prototype.talk = function() {
  console.log("We need to make soldier76 gay.");
};

function JavaDeveloper() {
  this.skin = 'pasty';
  this.startsToCountFrom = 0;
};
JavaDeveloper.prototype = Object.create(GameDeveloper.prototype);
JavaDeveloper.prototype.talk = function() {
  console.log("I was going to be a JavaScript developer, but I went wrong course, help me.");
};

var human = new Human(),
    educated = new Educated(),
    programmer = new Programmer(),
    gameDev = new GameDeveloper(),
    javaDev = new JavaDeveloper();

    human.talk();
    educated.talk();
    programmer.talk();
    gameDev.talk();
    javaDev.talk();
    
    console.log(human);
    console.log(educated);
    console.log(programmer);
    console.log(gameDev);
    console.log(javaDev);