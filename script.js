var myphone = document.getElementById("myphone");
var myemail = document.getElementById("myemail");
var copie_phone = document.getElementById("copie_phone");
var copie_email = document.getElementById("copie_email");
copie_phone.addEventListener("click",function(){
    myphone.select();
    document.execCommand("copy");
})
copie_email.addEventListener("click",function(){
    myemail.select();
    document.execCommand("copy");
})