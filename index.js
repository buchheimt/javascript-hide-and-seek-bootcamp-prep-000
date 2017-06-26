
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll(".ranked-list li")
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}

function deepestChild() {
  var target = document.querySelector("div#grand-node")
  while (true) {
    if (target.querySelector("*") != null) {
      target = target.querySelector("*")
    } else {
      return target
    }
  }
}
