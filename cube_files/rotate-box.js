var startArray = [1,2,3,4,5,6];

var init = function() {
  var box = document.querySelector('.container').children[0],
      showPanelButtons = document.querySelectorAll('#show-buttons button'),
      panelClassName = 'show-top',

      onButtonClick = function( event ){
        var box = document.querySelector('.container').children[0];
        var classes = box.className.split(' ');
        console.log(classes);
        var panelClassName = classes[1];
        console.log("Current class: " + panelClassName);

      

        panelClassName = panelNamesArray[startArray[0]-1];
        classes[1] = panelClassName;
        box.className = classes.join(" ");
        console.log(panelClassName);

        console.log(startArray);
      };
      console.log(showPanelButtons);

  for (var i=0, len = showPanelButtons.length; i < len; i++) {
    showPanelButtons[i].addEventListener( 'click', onButtonClick, false);
  }
  
  // document.getElementById('toggle-backface-visibility').addEventListener( 'click', function(){
  //   box.toggleClassName('panels-backface-invisible');
  // }, false);
  
};

document.onkeydown = checkKey;

var down = [3,2,4,6,5,1]; 
var up = [6,2,1,3,5,4];
var right = [2,4,3,5,1,6];
var left = [5,1,3,2,4,6];

var panelNamesArray = ["show-top", "show-back", "show-left", "show-bottom", "show-front", "show-right"];

function mutableCube(cubeArray){

}

function checkKey(e) {

    e = e || window.event;

    var box = document.querySelector('.container').children[0];
    var classes = box.className.split(' ');
    console.log(classes);
    var panelClassName = classes[1];
    console.log("Current class: " + panelClassName);
    var tempArray = [];

    function changeFace(){
        startArray = tempArray;
        //box.removeClassName( panelClassName );
        panelClassName = panelNamesArray[startArray[0]-1];
        classes[1] = panelClassName;
        box.className = classes.join(" ");
        console.log(panelClassName);
      }

    if (e.keyCode == '37' /*38*/) {
        // up arrow
        console.log("left arrow");
        for(var i = 0; i < up.length; i++){
          tempArray[i] =  startArray[up[i] - 1];
        }
        startArray = tempArray;
        changeFace();
    }
    else if (e.keyCode == '39' /*40*/) {
        // down arrow
        console.log("right arrow");
        for(var i = 0; i < down.length; i++){
          tempArray[i] =  startArray[down[i] - 1];
        }
        startArray = tempArray;
        changeFace();
    }
    else if (e.keyCode == '38' /*37*/) {
       // left arrow
       console.log("up arrow");
       var tempArray = [];
        for(var i = 0; i < left.length; i++){
          tempArray[i] =  startArray[left[i] - 1];
        }
        startArray = tempArray;
        changeFace();
    }
    else if (e.keyCode == '40' /*39*/) {
       // right arrow
       console.log("down arrow");
       var tempArray = [];
        for(var i = 0; i < right.length; i++){
          tempArray[i] =  startArray[right[i] - 1];
        }
        startArray = tempArray;
        changeFace();
    }

}
var box = document.querySelector('.container').children[0];
var hammertime = new Hammer(box, checkKey);
hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

hammertime.on('swipeup', function(ev) {
        console.log(ev);
        ev.keyCode = 38;
        checkKey(ev);
  });

hammertime.on('swipedown', function(ev) {
        console.log(ev);
        ev.keyCode = 40;
        checkKey(ev);
  });
hammertime.on('swipeleft', function(ev) {
        console.log(ev);
        ev.keyCode = 37;
        checkKey(ev);
  });
hammertime.on('swiperight', function(ev) {
        console.log(ev);
        ev.keyCode = 39;
        checkKey(ev);
  });

window.addEventListener( 'DOMContentLoaded', init, false);