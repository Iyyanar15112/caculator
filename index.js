// window.alert("Iyyanar");
// document.write("Iyyanar");

// var a = 10;
// var b = 20;  //GLOBAL VARIABLE
// if(true){
//     var x=100;
// }
// if(true){
//     let y=200; //loacal variable
//     document.getElementById('para2').innerHTML = y; //can access
// }
// // var age=17;
// var weight=120;

// if(age>18 ){
//     if(weight<120){
// document.getElementById('para1').innerHTML = "he is eligible to vote";
// } else{
//     document.getElementById('para1').innerHTML="extra ropes will be aded";
// }}

// else{
//     document.getElementById('para1').innerHTML="he cant jump";
// }
// var mn=4;
// switch(mn){
//     case 1:
//     document.getElementById('para1').innerHTML="january";
//     break;
//     case 2:
//     document.getElementById('para1').innerHTML="february";
//     break;
//     case 3:
//     document.getElementById('para1').innerHTML="March";
//     break;
//     default:
//     document.getElementById('para1').innerHTML="INVALID INPUT";
//     break;
// }
// //for(let i=1;i<=10;i++){
//     document.getElementById('para1').innerHTML+=i+" ";
// }
// const Array=["Mahesh","kavin","Sree","Hari"];
// document.getElementById('para1').innerHTML=Array[2];
// //function add(){
//     return a+b;}
//     var a=10;
//     var b=20;
//     var c=add();
//     document.getElementById('para1').innerHTML=c;
// add();
while(true){
var a=parseInt(prompt("Enter First Number:"));
var b=parseInt(prompt("Enter Second Number:"));
var op=prompt("Enter opertor:");


var res;
if(op==='+'){
    res=a+b;
    document.getElementById('para1').innerHTML+='OutPut is '+res;
    break;
}
else if(op==='-'){
    res=a-b;
    document.getElementById('para1').innerHTML+='OutPut is '+res;
    break;
}
else if(op==='*'){
    res=a*b;
    document.getElementById('para1').innerHTML+='OutPut is '+res;
    break;
}
else if(op==='/'){
    res=a/b;
    document.getElementById('para1').innerHTML+='OutPut is '+res;
    break;
}
else {
    res='Invalid operator';
}
    }