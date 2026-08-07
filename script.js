/*==================================================
        EMMA RESEARCH HUB BELLA v2.0
                PART 3A
==================================================*/

console.log("EMMA RESEARCH HUB BELLA Loaded");

/*=========================
        SEARCH
=========================*/

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

if (searchBtn) {

searchBtn.addEventListener("click", () => {

const keyword = searchInput.value.trim();

if(keyword===""){

alert("Please enter something to research.");

return;

}

alert("Searching for: " + keyword);

});

}

/*=========================
        AI CHAT
=========================*/

const sendAI = document.getElementById("sendAI");
const aiInput = document.getElementById("aiInput");
const chatWindow = document.querySelector(".chat-window");

if(sendAI){

sendAI.addEventListener("click",sendMessage);

}

if(aiInput){

aiInput.addEventListener("keypress",function(e){

if(e.key==="Enter"){

sendMessage();

}

});

}

function sendMessage(){

const message=aiInput.value.trim();

if(message==="") return;

const user=document.createElement("div");

user.className="bot-message";

user.style.background="#2f3d54";

user.style.borderLeft="4px solid #00bfff";

user.innerHTML="<strong>You:</strong><br>"+message;

chatWindow.appendChild(user);

setTimeout(()=>{

const bot=document.createElement("div");

bot.className="bot-message";

bot.innerHTML="<strong>EMMA AI:</strong><br>I received your question:<br><br><em>"+message+"</em><br><br>This feature will later connect to a real AI engine.";

chatWindow.appendChild(bot);

chatWindow.scrollTop=chatWindow.scrollHeight;

},700);

aiInput.value="";

chatWindow.scrollTop=chatWindow.scrollHeight;

}

/*=========================
        MOBILE MENU
=========================*/

const menu=document.querySelector(".menu");

const nav=document.querySelector("nav");

if(menu){

menu.onclick=function(){

if(nav.style.display==="block"){

nav.style.display="none";

}else{

nav.style.display="block";

}

}

}

/*=========================
        SMOOTH SCROLL
=========================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*=========================
        BUTTON EFFECT
=========================*/

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

/*=========================
        PAGE LOADED
=========================*/

window.onload=function(){

console.log("Website Ready!");

};
/*==================================================
        EMMA RESEARCH HUB BELLA v2.0
                PART 3B
==================================================*/

/*=========================
      ANIMATED COUNTERS
=========================*/

const counters = document.querySelectorAll(".stat h1");

function animateCounter(counter){

let target = parseInt(counter.innerText.replace(/\D/g,'')) || 100;

let count = 0;

let speed = Math.max(10, Math.floor(target/80));

const update = ()=>{

count += speed;

if(count >= target){

counter.innerText = target + "+";
}else{

counter.innerText = count + "+";

requestAnimationFrame(update);

}

};

update();

}

const statObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target.querySelector("h1");

if(counter && !counter.dataset.done){

counter.dataset.done = "true";

animateCounter(counter);

}

}

});

},{threshold:.4});

document.querySelectorAll(".stat").forEach(stat=>{

statObserver.observe(stat);

});

/*=========================
      SCROLL ANIMATION
=========================*/

const hiddenElements = document.querySelectorAll(
".about-box,.category-card,.research-card,.news-card,.login-box,.contact-info,.contact-form"
);

const revealObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.2});

hiddenElements.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(50px)";

el.style.transition=".8s";

revealObserver.observe(el);

});

/*=========================
      BACK TO TOP BUTTON
=========================*/

const topBtn = document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topButton";

document.body.appendChild(topBtn);

Object.assign(topBtn.style,{
position:"fixed",
right:"25px",
bottom:"25px",
width:"55px",
height:"55px",
borderRadius:"50%",
border:"none",
background:"gold",
color:"#111",
fontSize:"24px",
fontWeight:"bold",
cursor:"pointer",
display:"none",
zIndex:"9999",
boxShadow:"0 10px 30px rgba(0,0,0,.3)"
});

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/*=========================
      PROGRESS BAR
=========================*/

const progress=document.createElement("div");

progress.id="progressBar";

document.body.appendChild(progress);

Object.assign(progress.style,{

position:"fixed",

top:"0",

left:"0",

height:"4px",

width:"0%",

background:"gold",

zIndex:"10000"

});

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const percent=(window.scrollY/total)*100;

progress.style.width=percent+"%";

});

/*=========================
      HERO TYPING EFFECT
=========================*/

const heroTitle=document.querySelector(".hero-left h4");

if(heroTitle){

const text="WELCOME TO";

heroTitle.innerHTML="";

let i=0;

const typing=setInterval(()=>{

heroTitle.innerHTML+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(typing);

}

},120);

}

/*=========================
      RANDOM NEWS EFFECT
=========================*/

const newsTitles=document.querySelectorAll(".news-card h3");

setInterval(()=>{

newsTitles.forEach(card=>{

card.style.color=Math.random()>.5?"gold":"white";

});

},3000);

/*=========================
      SEARCH ENTER KEY
=========================*/

if(searchInput){

searchInput.addEventListener("keyup",(e)=>{

if(e.key==="Enter"){

searchBtn.click();

}

});

}

/*=========================
      LOADING COMPLETE
=========================*/

console.log("Part 3B Loaded Successfully");
/*==================================================
        EMMA RESEARCH HUB BELLA v2.0
                PART 3C
==================================================*/

/*=========================
      WELCOME MESSAGE
=========================*/

window.addEventListener("load",()=>{

setTimeout(()=>{

alert("👋 Welcome to EMMA RESEARCH HUB BELLA!\n\nYour professional research platform is ready.");

},1000);

});

/*=========================
      LOGIN FORM
=========================*/

const loginForms=document.querySelectorAll(".login-box form");

loginForms.forEach(form=>{

form.addEventListener("submit",(e)=>{

e.preventDefault();

const email=form.querySelector('input[type="email"]');

const password=form.querySelector('input[type="password"]');

if(email && password){

if(email.value.trim()==="" || password.value.trim()===""){

alert("Please complete all required fields.");

return;

}

}

alert("✅ Request received.\n\nIn Version 3.0 this form will connect to Firebase Authentication.");

form.reset();

});

});

/*=========================
      CONTACT FORM
=========================*/

const contactForm=document.querySelector(".contact-form form");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert("📩 Thank you for contacting EMMA RESEARCH HUB BELLA.\n\nWe'll add real email sending in Version 3.0.");

contactForm.reset();

});

}

/*=========================
      DARK MODE
=========================*/

const themeButton=document.createElement("button");

themeButton.innerHTML="🌙";

Object.assign(themeButton.style,{
position:"fixed",
left:"25px",
bottom:"25px",
width:"55px",
height:"55px",
borderRadius:"50%",
border:"none",
background:"gold",
fontSize:"22px",
cursor:"pointer",
zIndex:"9999"
});

document.body.appendChild(themeButton);

let dark=true;

themeButton.onclick=()=>{

if(dark){

document.body.style.background="#ffffff";
document.body.style.color="#111111";
themeButton.innerHTML="☀️";

}else{

document.body.style.background="#070b14";
document.body.style.color="white";
themeButton.innerHTML="🌙";

}

dark=!dark;

};

/*=========================
      AI QUICK REPLIES
=========================*/

const aiReplies=[

"That's an interesting research topic.",
"I recommend checking trusted academic sources.",
"Version 3.0 will connect this assistant to a real AI model.",
"Try searching with more specific keywords.",
"Research is the foundation of innovation.",
"Technology and AI are changing education worldwide."

];

if(sendAI){

sendAI.addEventListener("click",()=>{

const messages=document.querySelectorAll(".bot-message");

const lastMessage=messages[messages.length-1];

setTimeout(()=>{

const reply=document.createElement("div");

reply.className="bot-message";

reply.innerHTML="<strong>EMMA AI:</strong><br>"+aiReplies[Math.floor(Math.random()*aiReplies.length)];

chatWindow.appendChild(reply);

chatWindow.scrollTop=chatWindow.scrollHeight;

},1200);

});

}

/*=========================
      BUTTON RIPPLE
=========================*/

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

circle.style.position="absolute";
circle.style.width="10px";
circle.style.height="10px";
circle.style.borderRadius="50%";
circle.style.background="rgba(255,255,255,.7)";
circle.style.left=e.offsetX+"px";
circle.style.top=e.offsetY+"px";
circle.style.transform="scale(0)";
circle.style.transition=".6s";

this.style.position="relative";
this.style.overflow="hidden";

this.appendChild(circle);

setTimeout(()=>{

circle.style.transform="scale(25)";
circle.style.opacity="0";

},10);

setTimeout(()=>{

circle.remove();

},700);

});

});

/*=========================
      CONSOLE MESSAGE
=========================*/

console.log("🚀 EMMA RESEARCH HUB BELLA v2.0 Fully Loaded");
