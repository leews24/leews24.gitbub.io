var galpics = ["https://leews24.github.io/warrenlee/galleryres/a.png"
,"https://leews24.github.io/warrenlee/galleryres/b.png"
,"https://leews24.github.io/warrenlee/galleryres/c.jpg"
,"https://leews24.github.io/warrenlee/galleryres/d.png"
,"https://leews24.github.io/warrenlee/galleryres/e.jpg"];

var img = document.getElementById("v-img").src;

function left() {
  switch (document.getElementById("v-img").src) {
    case galpics[0]:
      document.getElementById("v-img").src = galpics[4];
      break;
    case galpics[4]:
      document.getElementById("v-img").src = galpics[3];
      break;
    case galpics[3]:
      document.getElementById("v-img").src = galpics[2];
      break;
    case galpics[2]:
      document.getElementById("v-img").src = galpics[1];
      break;
    case galpics[1]:
      document.getElementById("v-img").src = galpics[0];
      break;
    default:
      alert(document.getElementById("v-img").src);
      break;
  }
}

function right() {
  switch (document.getElementById("v-img").src) {
    case galpics[0]:
      document.getElementById("v-img").src = galpics[1];
      break;
    case galpics[1]:
      document.getElementById("v-img").src = galpics[2];
      break;
    case galpics[2]:
      document.getElementById("v-img").src = galpics[3];
      break;
    case galpics[3]:
      document.getElementById("v-img").src = galpics[4];
      break;
    case galpics[4]:
      document.getElementById("v-img").src = galpics[0];
      break;
    default:
      alert("ERROR!!");
      break;
  }
}

function select(img) {
  switch (img) {
    case 'img-c0':
      document.getElementById("v-img").src = galpics[0];
      break;
    case 'img-c1':
      document.getElementById("v-img").src = galpics[1];
      break;
    case 'img-c2':
      document.getElementById("v-img").src = galpics[2];
      break;
    case 'img-c3':
      document.getElementById("v-img").src = galpics[3];
      break;
    case 'img-c4':
      document.getElementById("v-img").src = galpics[4];
      break;
    default:
      alert("ERROR!!");
      break;
    }
}
