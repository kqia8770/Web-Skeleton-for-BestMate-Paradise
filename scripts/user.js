const loginText = document.querySelector(".title-text .login");
    const loginForm = document.querySelector("form.login");
    const loginBtn = document.querySelector("label.login");
    const signupBtn = document.querySelector("label.signup");
    const login = document.querySelector("#loginfinal");
    const signup = document.querySelector("#signupfinal");
    const signupLink = document.querySelector("form .signup-link a");
    

    loginBtn.addEventListener("click", function(){
      event.preventDefault();
      loginForm.style.marginLeft = "0%";
      loginText.style.marginLeft = "0%"; 
    });

    signupBtn.onclick = (()=>{
      loginForm.style.marginLeft = "-50%";
      loginText.style.marginLeft = "-50%";
    });
    
    login.onclick = (()=>{
      loginForm.style.marginLeft = "0%";
      loginText.style.marginLeft = "0%";
        setTimeout(function(){
        alert("Your Booking is succesfully confirmed!");
        window.location.href="index.html";  
        // location.reload();
      },800);
    });

    signup.onclick = (()=>{
      loginForm.style.marginLeft = "0%";
      loginText.style.marginLeft = "0%";
        setTimeout(function(){
        alert("Your Booking is succesfully confirmed!");
        window.location.href="index.html";  
        // location.reload();
      },800);
    });

    signupLink.onclick = (()=>{
      signupBtn.click();
      return false;
    });