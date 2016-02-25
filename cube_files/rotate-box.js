var init = function() {
  var box = document.querySelector('.container').children[0],
      showPanelButtons = document.querySelectorAll('#show-buttons button'),
      panelClassName = 'show-right',

      onButtonClick = function( event ){
        box.removeClassName( panelClassName );
        panelClassName = event.target.className;
        box.addClassName( panelClassName );
      };
      console.log(showPanelButtons);

  for (var i=0, len = showPanelButtons.length; i < len; i++) {
    showPanelButtons[i].addEventListener( 'click', onButtonClick, false);
  }
  
  document.getElementById('toggle-backface-visibility').addEventListener( 'click', function(){
    box.toggleClassName('panels-backface-invisible');
  }, false);
  
};

document.onkeydown = checkKey;

var startArray = [1,2,3,4,5,6];
var up = [3,2,4,6,5,1]; 
var down = [6,2,1,3,5,4];
var left = [2,4,3,5,1,6];
var right = [5,1,3,2,4,6];

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

    if (e.keyCode == '37' /*38*/) {
        // up arrow
        var tempArray = [];
        console.log("up");
        for(var i = 0; i < up.length; i++){
          console.log(i);
          tempArray[i] =  startArray[up[i] - 1];
        }
        startArray = tempArray;

        //box.removeClassName( panelClassName );
        panelClassName = panelNamesArray[startArray[0]-1];
        classes[1] = panelClassName;
        box.className = classes.join(" ");
        console.log("Removed " + panelClassName);
        
    }
    else if (e.keyCode == '39' /*40*/) {
        // down arrow
        console.log("down");
        var tempArray = [];
        for(var i = 0; i < down.length; i++){
          console.log(i);
          tempArray[i] =  startArray[down[i] - 1];
        }
        startArray = tempArray;

        panelClassName = panelNamesArray[startArray[0]-1];
        classes[1] = panelClassName;
        box.className = classes.join(" ");

    }
    else if (e.keyCode == '38' /*37*/) {
       // left arrow
       console.log("left");
       var tempArray = [];
        for(var i = 0; i < left.length; i++){
          console.log(i);
          tempArray[i] =  startArray[left[i] - 1];
        }
        startArray = tempArray;

        panelClassName = panelNamesArray[startArray[0]-1];
        classes[1] = panelClassName;
        box.className = classes.join(" ");
    }
    else if (e.keyCode == '40' /*39*/) {
       // right arrow
       console.log("right");
       var tempArray = [];
        for(var i = 0; i < right.length; i++){
          console.log(i);
          tempArray[i] =  startArray[right[i] - 1];
        }
        startArray = tempArray;

        panelClassName = panelNamesArray[startArray[0]-1];
        classes[1] = panelClassName;
        box.className = classes.join(" ");
    }

}
  
window.addEventListener( 'DOMContentLoaded', init, false);