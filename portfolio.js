function playMusic() {
    var audio = document.getElementById("music");
    var btn = document.getElementById("musicBtn");
    if (audio.paused) {
        audio.play();
        if (btn) btn.innerHTML = '<i class="fas fa-pause"></i> Pause Music';
    } else {
        audio.pause();
        if (btn) btn.innerHTML = '<i class="fas fa-play"></i> Play Music';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll, .hero-text, .hero-image-wrap, .abt, .card1, .card2, .card3, .contact-container, #cn, .contact-main h2, .profile-card, .profile-text');
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

//normal users
let username;
let password;
let firstname;
let secondname;
let email;




document.getElementById("submit").onclick = function() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    firstname = document.getElementById("firstname").value;
    secondname = document.getElementById("lastname").value;
    email = document.getElementById("email").value;
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("firstname", firstname);
    localStorage.setItem("secondname", secondname);
    localStorage.setItem("email", email);
    
//admin -- mods
    let admins = [
    { username: "maged", password: "12345" },
    { username: "mohamed", password: "54321" }
];

    if (username === "" || password === "" || firstname === "" || secondname === "" || email === "") {
        alert("Please fill in all fields.");
        return;
    }
    const admin = admins.find(admin => admin.username === username && admin.password === password);
    if (admin) {
        alert("Welcome, admin " + username + "!");
        window.location.href = "index.html";
    } else {
        alert("Welcome, " + username + "!");
        window.location.href = "register.html";
    }
};