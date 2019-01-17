var actions = [];
var ranNum = 0;
function actionList(x) {
/*  let i = 0
  while (actions[i] == null) {
    i++;
  }
  var actions[i] = x;
  */
  actions[actions.length] = x
}

function start(){
setInterval(work, 30);
}

function work(){
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.rect(50, 50, ranNum, 100);
  ctx.stroke();
  ranNum++;
}

function wander() {
  actionlist("wander");
}
