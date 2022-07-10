var logininput,togleval=0,maintogleval=0,activitytogle=0,terminaltogle=0,filestogle=0;
window.onload=function(){
    console.log("tesr") 
    setInterval(function(){dateMaker()},1000);
    setTimeout(function(){document.getElementById("loadingscreen").style.display="none";},7000);
    logininput=document.getElementById("password");
    logininput.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("loginscreen").style.display="none";
      }
    });
}
function dateMaker(){
    var d = new Date();
    var dateString="";
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    dateString+= days[d.getDay()]+" ";
    dateString+= months[d.getMonth()]+" ";
    dateString+=d.getDate()+" ";
    dateString+=d.getHours()+":";
    dateString+=d.getMinutes()+":";
    dateString+=d.getSeconds();
    document.getElementById("date").innerHTML =dateString;
}
function showPowerOptions(){
    if(togleval==0){
        document.getElementById("powerOptions").style.display="flex";
        togleval=1;
    }else{
        document.getElementById("powerOptions").style.display="none";
        togleval=0;
    }
}
function showMainOptions(){
    if(maintogleval==0){
        document.getElementById("mainpowerOptions").style.display="flex";
        maintogleval=1;
    }else{
        document.getElementById("mainpowerOptions").style.display="none";
        maintogleval=0;
    }
}
function showActivities(){
    if(activitytogle==0){
        document.getElementById("activities").style.display="flex";
        activitytogle=1;
    }else{
        document.getElementById("activities").style.display="none";
        activitytogle=0;
    }
}
function showTerminal(){
    if(terminaltogle==0){
        document.getElementById("terminal").style.display="flex";
        terminaltogle=1;
    }else{
        document.getElementById("terminal").style.display="none";
        terminaltogle=0;
    }
}
function showFiles(){
    if(filestogle==0){
        document.getElementById("files").style.display="flex";
        filestogle=1;
    }else{
        document.getElementById("files").style.display="none";
        filestogle=0;
    }
}