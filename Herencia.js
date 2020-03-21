class User {
  saludar() {
    console.log("Hola usuario");
  }
}

class Admin extends User {
  saludar() {
    super.saludar();
    console.log("Aqui esta el panel de administracion");
  }
}

let admin = new Admin();

admin.saludar();

/* class Player {
  play() { this.video.play(); }
  duration() { return this.video.duration / 100; }
}

class Video extends Player {
  open() { this.redirectToVideo(this.video); }
}

class YouTube extends Player {
  open() { this.redirectToYouTube(this.video); }
}

let video = new YouTube();

function User(){}

class Admin extends User {}
class CustomDate extends Date{}
class Coleccion extends Array{} */
