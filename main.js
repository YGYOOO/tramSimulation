window.onload = function() {
  judgeLocation();
  setInterval(judgeLocation, 1000);
};

var y = 498,
  x = 233;
var s = 30;
var inCorner = false;
var running = false;
var haveStopped = [false, false, false, false, false];
setInterval(checkSpeed, 50);
setInterval(clock, 1000);
var move = setInterval(a, 50);
var begin = true;

function judgeLocation() {
  var width = document.documentElement.clientWidth;
  var height = document.documentElement.clientHeight;
  if (width <= 960) {
    document.getElementById('road2').style.left = "20px";
  } else {
    var left = (width - 920) / 2;
    document.getElementById('road2').style.left = left + "px";
  }
  if (height <= 510) {
    document.getElementById('road2').style.top = "20px";
  } else {
    var top = (height - 510) / 2;
    document.getElementById('road2').style.top = top + "px";
  }
}

function run() {
  if (running == false) {
    move = setInterval(control, 10);
    running = true;
  }
}

function stop() {
  clearInterval(move);
  running = false;
}

function control() {
  if (y > 145 && y < 148 && x == 8 && !haveStopped[1]) {
    openD2();
    showBoard("<br>Now At:<br>Shelby<br>Mall");
    document.getElementById('boardLine').classList.add('showBoardLine');
    document.getElementById('board').classList.add('showBoard');
    var duration = document.getElementById('stopDuration').value;
    stop();
    setTimeout(run, duration * 1000);
    haveStopped[1] = true;
    setTimeout(function() {
      closeD2()
    }, duration * 1000 - 2000);
    setTimeout(function() {
      haveStopped[1] = false;
    }, duration * 1000 + 1000);
  } else if (x > 456 && x < 459 & y == 8 && !haveStopped[2]) {
    openD2();
    showBoard("<br>Now At:<br>George<br>St");
    var duration = document.getElementById('stopDuration').value;
    stop();
    setTimeout(run, duration * 1000);
    haveStopped[2] = true;
    setTimeout(function() {
      closeD2()
    }, duration * 1000 - 2000);
    setTimeout(function() {
      haveStopped[2] = false;
    }, duration * 1000 + 1000);
  } else if (x == 908 && y > 145 && y < 148 && !haveStopped[3]) {
    openD2();
    showBoard("<br>Now At:<br>Valley View<br>Mall");
    var duration = document.getElementById('stopDuration').value;
    stop();
    setTimeout(run, duration * 1000);
    haveStopped[3] = true;
    setTimeout(function() {
      closeD2()
    }, duration * 1000 - 2000);
    setTimeout(function() {
      haveStopped[3] = false;
    }, duration * 1000 + 1000);
  } else if (x > 682 && x < 685 && y == 498 && !haveStopped[4]) {
    openD2();
    showBoard("<br>Now At:<br>Target");
    var duration = document.getElementById('stopDuration').value;
    stop();
    setTimeout(run, duration * 1000);
    haveStopped[4] = true;
    setTimeout(function() {
      closeD2()
    }, duration * 1000 - 2000);
    setTimeout(function() {
      haveStopped[4] = false;
    }, duration * 1000 + 1000);
  } else if (x > 231 && x < 234 && y == 498 && !haveStopped[0]) {
    begin = false;
    openD2();
    showBoard("<br>Now At:<br>Transition Center");
    var duration = document.getElementById('stopDuration').value;
    stop();
    setTimeout(run, duration * 1000);
    haveStopped[0] = true;
    setTimeout(function() {
      closeD2()
    }, duration * 1000 - 2000);
    setTimeout(function() {
      haveStopped[0] = false;
    }, duration * 1000 + 1000);
  } else if (y <= 458 && y >= 48 && x == 8) {
    runUp();
  } else if (y < 48 && x == 8 && !inCorner) {
    inCorner = true;
    runUL();
  } else if (x >= 48 && x < 868 && y == 8) {
    runRight();
  } else if (x >= 868 && y == 8 && !inCorner) {
    runUR();
    inCorner = true;
  } else if (x == 908 && y >= 48 && y < 458) {
    runDown();
  } else if (x == 908 && y >= 458 && !inCorner) {
    runDR();
    inCorner = true;
  } else if (x > 48 && x <= 868 && y == 498) {
    runLeft();
  } else if (x <= 48 && y == 498 && !inCorner) {
    runDL();
    inCorner = true;
  }
}

function runUp() {
  y = y - s;
  document.getElementById('point').style.top = y + "px";

  document.getElementById('locationX').innerHTML = x;
  document.getElementById('locationY').innerHTML = y;
}

function runUL() {
  var t = 1.2 / s;
  document.getElementById('point').style['-webkit-transition'] = '-webkit-transform ' + t + 's ' + 'linear';
  document.getElementById('point').classList.add("pointUL");
  document.getElementById('tram1').style['-webkit-transition'] = '-webkit-transform ' + t + 's ' + 'linear';
  document.getElementById('tram1').classList.add("tramCorner");

  setTimeout(
    function() {
      endOfCorner = true;
      document.getElementById('point').style['-webkit-transition'] = '-webkit-transform 0s linear';
      document.getElementById('point').style.left = "48px";
      document.getElementById('point').style.top = "8px";
      document.getElementById('point').classList.remove("pointUL");
      x = 48;
      y = 8;
      document.getElementById('tram1').style['-webkit-transition'] = '-webkit-transform 0s linear';
      document.getElementById('tram1').classList.remove("tramCorner");
      document.getElementById('tram1').style.width = "50px";
      document.getElementById('tram1').style.height = "30px";
      document.getElementById('tram1').style.top = "-14px";
      document.getElementById('tram1').style.left = "-25px";
      document.getElementById('tram1').style
    }, t * 1000);
  setTimeout(function() {
    inCorner = false;
  }, t * 2000);
}

function runRight() {
  x = x + s;
  document.getElementById('point').style.left = x + "px";

  document.getElementById('locationX').innerHTML = x;
  document.getElementById('locationY').innerHTML = y;
}

function runUR() {
  var t = 1.2 / s;
  document.getElementById('point').style['-webkit-transition'] = '-webkit-transform ' + t + 's ' + 'linear';
  document.getElementById('point').classList.add("pointUR");
  document.getElementById('tram1').style['-webkit-transition'] = '-webkit-transform ' + t + 's ' + 'linear';
  document.getElementById('tram1').classList.add("tramCorner");

  setTimeout(
    function() {
      document.getElementById('point').style['-webkit-transition'] = '-webkit-transform 0s linear';
      document.getElementById('point').style.left = "908px";
      document.getElementById('point').style.top = "48px";
      document.getElementById('point').classList.remove("pointUR");
      x = 908;
      y = 48;
      document.getElementById('tram1').style['-webkit-transition'] = '-webkit-transform 0s linear';
      document.getElementById('tram1').classList.remove("tramCorner");
      document.getElementById('tram1').style.width = "30px";
      document.getElementById('tram1').style.height = "50px";
      document.getElementById('tram1').style.top = "-25px";
      document.getElementById('tram1').style.left = "-12px";
      document.getElementById('tram1').style;
    }, t * 1000);
  setTimeout(function() {
    inCorner = false;
  }, t * 2000);
}

function runDown() {
  y = y + s;
  document.getElementById('point').style.top = y + "px";

  document.getElementById('locationX').innerHTML = x;
  document.getElementById('locationY').innerHTML = y;
}

function runDR() {
  var t = 1.2 / s;
  document.getElementById('point').style['-webkit-transition'] = '-webkit-transform ' + t + 's ' + 'linear';
  document.getElementById('point').classList.add("pointDR");
  document.getElementById('tram1').style['-webkit-transition'] = '-webkit-transform ' + t + 's ' + 'linear';
  document.getElementById('tram1').classList.add("tramCorner");

  setTimeout(
    function() {
      document.getElementById('point').style['-webkit-transition'] = '-webkit-transform 0s linear';
      document.getElementById('point').style.left = "868px";
      document.getElementById('point').style.top = "498px";
      document.getElementById('point').classList.remove("pointDR");
      x = 868;
      y = 498;
      document.getElementById('tram1').style['-webkit-transition'] = '-webkit-transform 0s linear';
      document.getElementById('tram1').classList.remove("tramCorner");
      document.getElementById('tram1').style.width = "50px";
      document.getElementById('tram1').style.height = "30px";
      document.getElementById('tram1').style.top = "-12px";
      document.getElementById('tram1').style.left = "-25px";
      document.getElementById('tram1').style;
    }, t * 1000);
  setTimeout(function() {
    inCorner = false;
  }, t * 2000);
}

function runLeft() {
  x = x - s;
  document.getElementById('point').style.left = x + "px";

  document.getElementById('locationX').innerHTML = x;
  document.getElementById('locationY').innerHTML = y;
}

function runDL() {
  var t = 1.2 / s;
  document.getElementById('point').style['-webkit-transition'] = '-webkit-transform ' + t + 's ' + 'linear';
  document.getElementById('point').classList.add("pointDL");
  document.getElementById('tram1').style['-webkit-transition'] = '-webkit-transform ' + t + 's ' + 'linear';
  document.getElementById('tram1').classList.add("tramCorner");

  setTimeout(
    function() {
      document.getElementById('point').style['-webkit-transition'] = '-webkit-transform 0s linear';
      document.getElementById('point').style.left = "8px";
      document.getElementById('point').style.top = "458px";
      document.getElementById('point').classList.remove("pointDL");
      x = 8;
      y = 458;
      document.getElementById('tram1').style['-webkit-transition'] = '-webkit-transform 0s linear';
      document.getElementById('tram1').classList.remove("tramCorner");
      document.getElementById('tram1').style.width = "30px";
      document.getElementById('tram1').style.height = "50px";
      document.getElementById('tram1').style.top = "-25px";
      document.getElementById('tram1').style.left = "-14px";
      document.getElementById('tram1').style;
    }, t * 1000);
  setTimeout(function() {
    inCorner = false;
  }, t * 2000);
}

function checkSpeed() {
  var speed = document.getElementById('speed').value;
  s = speed / 100;
}

function clock() {
  var time = new Date();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();

  if ($('.h').text() != ((hours < 10 ? "0" : "") + hours)) {
    $('.h').text((hours < 10 ? "0" : "") + hours);
    shake($('.h'));
  }

  if ($('.m').text() != ((minutes < 10 ? "0" : "") + minutes)) {
    $('.m').text((minutes < 10 ? "0" : "") + minutes);
    shake($('.m'));
  }

  if ($('.s').text() != ((seconds < 10 ? "0" : "") + seconds)) {
    $('.s').text((seconds < 10 ? "0" : "") + seconds);
    shake($('.s'));
  }
}

function shake(t) {
  t.addClass('shake-constant');
  setTimeout(function() {
    t.removeClass('shake-constant');
  }, 470)
}

$(document).load(function() {
  clock();
});

function shake(t) {
  t.addClass('shake-constant');
  setTimeout(function() {
    t.removeClass('shake-constant');
  }, 470)
};

$(function() {
  $(".knob1").knob({
    'min': 0,
    'max': 100,
    'angleOffset': -120,
    'angleArc': 240,
    "width": "110",
    "inputColor": "#FFFFFF",
    "fgColor": "#99CCCC",
    "skin": "tron",
  });
  $({
    value: 0
  }).animate({
    value: 50
  }, {

    duration: 1000,
    easing: 'swing',
    step: function() {
      return $('.knob1').val(Math.ceil(this.value)).trigger('change');
    }
  });

  $(".knob2").knob({
    'min': 0,
    'max': 12,
    'angleOffset': -120,
    'angleArc': 240,
    "width": "110",
    "inputColor": "#FFFFFF",
    "fgColor": "#99CCCC",
    "skin": "tron",
  });
  $({
    value: 0
  }).animate({
    value: 8
  }, {

    duration: 1000,
    easing: 'swing',
    step: function() {
      return $('.knob2').val(Math.ceil(this.value)).trigger('change');
    }
  });
});

function openD2() {
  document.getElementById('doorL2').classList.remove('doorL2Close');
  document.getElementById('doorR2').classList.remove('doorR2Close');
  document.getElementById('doorL2').classList.remove('doorL2Closed');
  document.getElementById('doorR2').classList.remove('doorR2Closed');
  document.getElementById('doorL2').classList.add('doorL2Open');
  document.getElementById('doorR2').classList.add('doorR2Open');
  setTimeout(function() {
    document.getElementById('doorL2').classList.add('doorL2Openned');
    document.getElementById('doorR2').classList.add('doorR2Openned');
/*    document.getElementById('doorState').innerHTML = "Door is open";*/
  }, 1600);
}

function closeD2() {
  document.getElementById('doorL2').classList.remove('doorL2Open');
  document.getElementById('doorR2').classList.remove('doorR2Open');
  document.getElementById('doorL2').classList.remove('doorL2Opened');
  document.getElementById('doorR2').classList.remove('doorR2Opened');
  document.getElementById('doorL2').classList.add('doorL2Close');
  document.getElementById('doorR2').classList.add('doorR2Close');
  setTimeout(function() {
    document.getElementById('doorL2').classList.add('doorL2Closed');
    document.getElementById('doorR2').classList.add('doorR2Closed');
/*    document.getElementById('doorState').innerHTML = "Door is closed";*/
  }, 1800);
}

function showBoard(content) {
  document.getElementById('boardLine').classList.add('showBoardLine');
  document.getElementById('board').classList.add('showBoard');
  document.getElementById('board').innerHTML = content;
  setTimeout(function() {
    document.getElementById('boardLine').classList.remove('showBoardLine');
    document.getElementById('board').classList.remove('showBoard');
  }, 8100);
}

function switch1() {
  if (running == false) {
    move = setInterval(control, 10);
    running = true;
    document.getElementById('switch').classList.remove('stopped');
    document.getElementById('switch').classList.add('running');
    document.getElementById('switch').innerHTML = "Stop";
    var T = document.getElementById('stopDuration').value;
           if(begin){
      begin=false;
      setTimeout(function(){document.getElementById('m6').classList.add('m6');},T*1000+4000);
             setTimeout(function(){document.getElementById('m7').classList.add('m7');},T*1000+8000);
    } /*document.getElementById('switchContext').innerHTML="Running";*/
  } else {
    clearInterval(move);
    running = false;
    document.getElementById('switch').classList.add('stopped');
    document.getElementById('switch').classList.remove('running');
    document.getElementById('switch').innerHTML = "Start";
    /*document.getElementById('switchContext').innerHTML="Stopped";*/
  }
}

function a() {}

$(".station").hover(function(){
  $(this).next().addClass("animated");
  $(this).next().on("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
    $(this).removeClass("animated")
  })
});
