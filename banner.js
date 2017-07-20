var bannerpics = ["file:///C:/Users/Warren/Documents/WebDev/personal%20web/personalweb/thumbnails/0.jpg"
,"file:///C:/Users/Warren/Documents/WebDev/personal%20web/personalweb/thumbnails/a.png"
,"file:///C:/Users/Warren/Documents/WebDev/personal%20web/personalweb/thumbnails/b.png"
,"file:///C:/Users/Warren/Documents/WebDev/personal%20web/personalweb/thumbnails/c.png"
,"file:///C:/Users/Warren/Documents/WebDev/personal%20web/personalweb/thumbnails/d.png"];

// var img = document.getElementById("bannerimg-v").src;

function indicatorchange(img) {
  $(".indicatorid").removeClass("circle-selected")
  $(".indicatorid").addClass("circle")
  $("#indicator"+img).removeClass("circle")
  $("#indicator"+img).addClass("circle-selected")
}

function bannerselect(img) {
  // alert(img);
  switch (parseInt(img)) {
    case 0:
      document.getElementById("bannerimg-v").src = bannerpics[0];
      indicatorchange(img)
      break;
    case 1:
      document.getElementById("bannerimg-v").src = bannerpics[1];
      indicatorchange(img)
      break;
    case 2:
      document.getElementById("bannerimg-v").src = bannerpics[2];
      indicatorchange(img)
      break;
    case 3:
      document.getElementById("bannerimg-v").src = bannerpics[3];
      indicatorchange(img)
      break;
    case 4:
      document.getElementById("bannerimg-v").src = bannerpics[4];
      indicatorchange(img)
      break;
    default:
      alert(img);
      break;
    }
}



// $(document).ready(function(){
//   $('#indicator2').click(function(){
//     $("#bannerimg-v").fadeOut(500, function() {
//       $('#bannerimg-v').attr('src', 'thumbnails/b.png');
//       $(this).load(function () {
//           $(this).fadeIn(500);
//       });
//     });
//   });
// });

function bannertimer() {
  var imgsrc = document.getElementById("bannerimg-v").src;
  // alert(document.getElementById("bannerimg-v").src);
  switch (imgsrc.slice(-5, -4)) {
    case '0':
      document.getElementById("bannerimg-v").src = bannerpics[1];
      indicatorchange(1)
      break;
    case 'a':
      document.getElementById("bannerimg-v").src = bannerpics[2];
      indicatorchange(2)
      break;
    case 'b':
      document.getElementById("bannerimg-v").src = bannerpics[3];
      indicatorchange(3)
      break;
    case 'c':
      document.getElementById("bannerimg-v").src = bannerpics[4];
      indicatorchange(4)
      break;
    case 'd':
      document.getElementById("bannerimg-v").src = bannerpics[0];
      indicatorchange(0)
      break;
    default:
      alert(imgsrc);
      break;
}}

function alerting (aa) {
  alert("god please help me")
  alert(aa)
}

// setInterval( alerting("asd") , 3000);
setInterval( bannertimer , 5000);

// setInterval(bannertimer(document.getElementById("bannerimg-v").src ), 500);
// $(document).ready( setTimeout( bannertimer( document.getElementById("bannerimg-v").src ),3000 ) );
