var wss_i = 0;
var wss_array = ["HELLO WORLD!", "WELCOME!", "DON'T WORRY!", "BE HAPPY!"];
var wss_elem;
wss_elem = document.getElementById("wss");

function wssSlide() {
    wss_elem.innerHTML = wss_array[wss_i];
    wss_elem.style.opacity = 1;
    setTimeout('wssNext()', 2000);
}

function wssNext() {
    wss_i++;
    wss_elem.style.opacity = 0;
    if (wss_i > (wss_array.length - 1)) {
        wss_i = 0;
    }
    setTimeout('wssSlide()', 2000);
}
wssSlide();

var currentElem;
var enterElem;
var orderOfCurrentElem = 0;
var orderOfEnterElem = 0;



function handleDragStart(e) {
  // Target (this) element is the source node.
  currentElem = this;
  orderOfCurrentElem = $(this).css('order');
  e.dataTransfer.effectAllowed = 'move';
}

// function handleDragStart(e) {
//   // this / e.target is the source node.
//   console.log(this);
//   currentElem = this;
//   orderOfCurrentElem = $(this).css('order');
//   console.log(orderOfCurrentElem);
// }

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
  }
  e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

  return false;
}

function handleDragEnter(e) {
  // this / e.target is the current hover target.
  e.dataTransfer.dropEffect = 'move';
  this.classList.add('over');
  enterElem = this;
  orderOfEnterElem = $(this).css('order');
  console.log(orderOfEnterElem);
}

function handleDragLeave(e) {
  this.classList.remove('over');
  orderOfEnterElem = 0;
    // this / e.target is previous target element.
}

function handleDrop(e) {
  // this/e.target is current target element.
  if (e.stopPropagation) {
    e.stopPropagation(); // Stops some browsers from redirecting.
  }
  // Don't do anything if dropping the same column we're dragging.
  return false;
}

function handleDragEnd(e) {
  // this/e.target is the source node.
  [].forEach.call(elem, function (el) {
    el.classList.remove('over');
  });
  if (orderOfEnterElem !== 0) {
 $(currentElem).css("order", orderOfEnterElem);
 $(enterElem).css("order", orderOfCurrentElem);
  }

}

var elem = document.getElementsByClassName('canDrag');
[].forEach.call(elem, function(el) {
  el.addEventListener('dragstart', handleDragStart, false);
  el.addEventListener('dragenter', handleDragEnter, false);
  el.addEventListener('dragover', handleDragOver, false);
  el.addEventListener('dragleave', handleDragLeave, false);
  el.addEventListener('drop', handleDrop, false);
  el.addEventListener('dragend', handleDragEnd, false);
});