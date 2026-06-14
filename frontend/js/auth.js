const registerForm = document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener("submit", async (e)=>{

e.preventDefault();

const user = {

name:document.getElementById("name").value,

email:document.getElementById("email").value,

password:document.getElementById("password").value

};

const res = await fetch("http://localhost:5000/api/auth/register",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(user)

});

const data = await res.json();

alert(data.message);

window.location="login.html";

});
}

const loginForm = document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",async(e)=>{

e.preventDefault();

const user={

email:document.getElementById("email").value,

password:document.getElementById("password").value

};

const res=await fetch("http://localhost:5000/api/auth/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(user)

});

const data=await res.json();

if(data.token && data.user) {
    // Store user session data
    localStorage.setItem("token",data.token);
    localStorage.setItem("userId", data.user._id);
    localStorage.setItem("userName", data.user.name);
    localStorage.setItem("userEmail", data.user.email);
    
    // Initialize points for this user if not already set
    const userPointsKey = `userPoints_${data.user._id}`;
    const userNameKey = `userName_${data.user._id}`;
    
    if (!localStorage.getItem(userPointsKey)) {
        localStorage.setItem(userPointsKey, data.user.ecoPoints || 0);
    }
    localStorage.setItem(userNameKey, data.user.name);
    
    // Add user to global users list for leaderboard
    const users = JSON.parse(localStorage.getItem('ecochamp-users')) || [];
    if (!users.includes(data.user._id)) {
        users.push(data.user._id);
        localStorage.setItem('ecochamp-users', JSON.stringify(users));
    }
    
    // For backward compatibility, also set global userPoints
    localStorage.setItem("userPoints", data.user.ecoPoints || 0);
    localStorage.setItem("userLevel", data.user.level || 1);
    
    window.location="dashboard.html";
} else {
    alert(data.message || "Login failed");
}

});

}