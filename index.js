var katzDeli = [];

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    var i = katzDeliLine.length;
    return (`Welcome, ${name}. You are number ${i} in line.`)
  }

function nowServing(deliLine, name){
  var i = deliLine.length;
  if (deliLine.length == 0) {
    return ("There is nobody waiting to be served!")
  } else {
    var customer = deliLine.shift();
    return (`Currently serving ${customer}.`)
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0){
    return (`The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`)
  } else {
    return ("The line is currently empty.")
  }
}
