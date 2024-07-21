var create = function(){
    // random x and y
    var x = 0; // Start at the top-left corner
    var y = 0; // Start at the top-left corner
    var width = window.innerWidth;
    var height = window.innerHeight; 

    // random color
    var r = Math.floor(275 * Math.random());
    var g = Math.floor(275 * Math.random());
    var b = Math.floor(275 * Math.random());
    var color = 'rgb(' + r + ', ' + g + ', ' + b + ')';

    // set div attributes
    var div = document.createElement('div');
    div.id = 'ball';
    div.style.zIndex = '1';
    div.style.position = 'absolute';    
    div.style.left = x + 'px';    
    div.style.top = y + 'px';    
    div.style.width = '50px';    
    div.style.height = '50px';    
    div.style.borderRadius = '50%';
    div.style.background = `radial-gradient(circle, rgba(${r},${g},${b},0.5), rgba(${r},${g},${b},1))`;

    // Then append the whole thing onto the body
    document.getElementsByTagName('body')[0].appendChild(div);

    // default start position
    div.x = x;
    div.y = y;
    return div;        
}

var size = function(div, width, height){
    div.style.width = width + 'px';    
    div.style.height = height + 'px';    
}

var color = function(div, r, g, b){
    var color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    div.style.background = `radial-gradient(circle, rgba(${r},${g},${b},1), rgba(${r},${g},${b},1))`;
}

var zIndex = function(div, zIndex){
    div.style.zIndex = zIndex.toString(); 
}

var colorRandom = function(div){

    var counter = 0;
    var limit = 10;

    var timerColor = function(div, x, y){
        if(counter >= limit) return;
        counter += 1;

        setTimeout(function(){
            // random color
            var r = Math.floor(155 * Math.random());
            var g = Math.floor(155 * Math.random());
            var b = Math.floor(155 * Math.random());        
            var color = `radial-gradient(circle, rgba(${r},${g},${b},0.2), rgba(${r},${g},${b},1))`;
            div.style.background = color; 
            timerColor(div);
        }, 500);
    }
    timerColor(div);
}

var move = function(div, x, y){

    // add x coordinate
    div.x = div.x + x;
    div.style.left = div.x + 'px';

    // add y coordinate
    div.y = div.y + y;
    div.style.top = div.y + 'px';                  
}

var repeatMove = function(div, x, y, limit){
    var counter = 0;

    var timerMove = function(div, x, y){
        if(counter >= limit) return;
        counter += 1;

        setTimeout(function(){
            move(div, x, y);
            timerMove(div, x, y);
        }, 1000);
    }
    timerMove(div, x, y);
}
