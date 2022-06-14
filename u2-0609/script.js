window.onload = function() {
   
   let a = -1347;
   console.log(verciamNeigiamaITeigiama(a));
   let b = Math.pow(verciamNeigiamaITeigiama(a),3);
   console.log(b);

}

function verciamNeigiamaITeigiama(skaicius) {
   return Math.abs(skaicius);
}

