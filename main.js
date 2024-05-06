function addUser() {
    user_name=document.getElementById("user_name").value;
    user_pass=document.getElementById("user_pass").value;
    localStorage.setItem("user_name",user_name);
    localStorage.setItem("user_pass",user_pass);
    window.location="blogle_room.html"
}