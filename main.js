var x = document.getElementById('plus');
var y = document.getElementById('show');
var z = document.getElementById('moins');
z.addEventListener('click', calculate);
function calculate(){
    var y = document.getElementById('show').innerHTML;
    y++;
    document.getElementById('show').innerHTML=y++;
}