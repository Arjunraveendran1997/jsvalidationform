function verifyPassword() {  
  var pw = document.getElementById("inputPassword1").value;  
  //check empty password field  
  if(pw == "") {  
     document.getElementById("message").innerHTML = "**Fill the password please!";  
     return false;  
  }  
   
 //minimum password length validation  
  if(pw.length < 6) {  
     document.getElementById("message").innerHTML = "**Password length must be atleast 6 characters";  
     return false;  
  }  
  
//maximum length of password validation  
  if(pw.length > 8) {  
     document.getElementById("message").innerHTML = "**Password length must not exceed 8 characters";  
     return false;  
  } else {  
     alert("Password validation completed");  
  }  
  var pw2 = document.getElementById("inputPassword2").value;
  if(pw == pw2)  
    {   
      alert("Password created successfully");  
    } else {  
      alert("Passwords did not match");  
    }  
   
}  

