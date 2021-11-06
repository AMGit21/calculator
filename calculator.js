function dis(NumOrOperator)
{ 
    document.getElementById('screen').innerHTML += NumOrOperator;
}
//function that evaluates the digit and return result
function solve()
{
    var x = document.getElementById("screen").innerHTML;
    var y = eval(x);
    document.getElementById('screen').innerHTML += ` = ${y}`;
}
function clear()
{
    document.getElementById('screen').innerHTML = "";
}
for(let i = 0; i <= 9; i++)
{
    document.getElementById(`id${i}`).addEventListener("click", (e) => { dis(`${i}`); e.preventDefault();});
}
var opbtn = ['pls','mns','dvs','mul','dot'];
var op = [' + ',' - ',' / ',' * ','.'];
for(let i = 0; i < opbtn.length; i++)
{
    document.getElementById(`${opbtn[i]}`).addEventListener("click", (e) => { dis(`${op[i]}`); e.preventDefault();});
}
document.getElementById('clr').addEventListener("click", (e) => { clear(); e.preventDefault();});
document.getElementById('equ').addEventListener("click", (e) => { solve(); e.preventDefault();});