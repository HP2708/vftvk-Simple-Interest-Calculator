function compute()
{
    var p,n,r,si;
    p = document.getElementById("principal").value;
    n = document.getElementById("years").value;
    r = document.getElementById("rate").value;
    si = (p * n * r) / 100;
    var y=2021+n;
    document.write("If you deposit " +p+"\n,at an interest of"+r+".\n You will recieve an amount of "+si+",\nin the year"+y);    
}
