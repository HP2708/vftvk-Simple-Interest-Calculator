function compute()
{
    var p,n,r,si;
    p = document.getElementById("principal").value;
    n = document.getElementById("years").value;
    r = document.getElementById("rate").value;
    si = (p * t * r) / 100;
    var t=2021+n;
    document.write("If you deposit "+p+",at an interest of "+r+"%.You will recieve an amount of "+si+",in the year"+t);    
}
