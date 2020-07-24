var createTime; var clickedTime;
var hist = new Array();

function randomColor(){
    var mixer = "0123456789ABCDEF".split('');
    var color = "#";
    for(i=0; i<=5; i++)
    {
        color += mixer[Math.round(Math.random()*15)];
    }
    return color;
}

function generateBox(){
    setTimeout(function(){
        document.getElementById("box").style.backgroundColor= randomColor();
        document.getElementById("box").style.marginTop = Math.random()*300 +'px';
        document.getElementById("box").style.marginLeft = Math.random()*500 + 'px';
        document.getElementById("box").style.borderRadius = Math.round(Math.random()*100) + 'px';
        document.getElementById("box").style.display="block";
        createTime = Date.now();
    }, Math.random()*5000);
    


}

document.getElementById("box").onclick=function(){
    clickedTime = Date.now();
    clickedTime = (clickedTime-createTime)/1000;
    this.style.display="none";
    document.getElementById("time").innerHTML = "";
    document.getElementById("time").innerHTML += clickedTime + "sec";
    hist.push(clickedTime);
    document.getElementById("history").innerHTML = "";
    document.getElementById("history").innerHTML+= hist.reverse();
    hist.reverse();
    if(hist.length>=5){
    hist.splice(0,1);
    }
    
    // alert((clickedTime-createTime)/1000 + "seconds");
    generateBox();
}
generateBox();
