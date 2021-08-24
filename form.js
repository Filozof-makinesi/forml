
function isValid(){
    var adi, text;
    var tc = document.getElementById("tc").value;
  var adi = document.getElementById("adi").value;
var soyad = document.getElementById("soyad").value;
var tel = document.getElementById("tel").value;
var adress = document.getElementById("adress").value;
document.getElementById("demo").innerHTML = text;
document.getElementById("tc1").innerHTML = tc;    
document.getElementById("ad").innerHTML = adi;  
document.getElementById("soy").innerHTML = soyad;  
document.getElementById("tel1").innerHTML = tel; 
document.getElementById("adress1").innerHTML = adress;   

if ( adi==null || adi=="")
{
    alert("Ad alanı boş olamaz");
    return false;
}
if ( soyad==null || soyad=="")
{
    alert("Soyad alanı boş olamaz");
   
    return false;
}
if ( tel==null || tel=="")
{
    alert("Telefon No alanı boş olamaz");
    return false;
}
 return true;


}
function sayiuret(){
    var x = document.getElementById("tc")
    let tcNumber = Math.floor((Math.random() * 100000000000) + 1);
    x.innerHTML = tcNumber
    tc.value = tcNumber
}
 


