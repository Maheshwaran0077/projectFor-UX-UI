

var form=document.getElementById("form")


form.addEventListener("submit",(e)=>{
    
    var nam = document.getElementById("inputId").value.trim();
    var userEmail = document.getElementById("Email").value.trim();
    var YourMessage = document.getElementById("YourMessage").value.trim();

    if(nam&&userEmail&&YourMessage){
        send()


    }
    else{
        alert("white space are not allowed")
    }
    
function send(){
    var emailmsg={
        to_name:nam ,
        from_name:userEmail ,
        message:YourMessage ,
    };

    emailjs.send("service_map9xdh", "template_3xiaufe", emailmsg)
    .then(function (res) {
        console.log("sucess", res.status);
        alert("succesfully send")

    })
}
e.preventDefault()

})


// if(nam  !== "" && userEmail  !== "" && YourMessage  !== ""){
//     send()

    
// }



