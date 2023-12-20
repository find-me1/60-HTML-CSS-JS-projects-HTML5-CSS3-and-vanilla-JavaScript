const testimonials = [
    {
        name: "- Terina B." ,
        photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        text : "I will refer everyone I know. Wow what great service, I love it! It's incredible.",

    },
    {
        name: "-Lillian Wilson." ,
        photoUrl: "https://images.unsplash.com/photo-1624797432677-6f803a98acb3?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text : "If you want to take your business to the next level, use apple and don't look any further.",

    },
    {
        name: "-Caroline Taylor." ,
        photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        text : "The apple arrived in a timely manner in perfect condition. I appreciated your personal note too.",

    },
]
const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const userNameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial(){
    const {name,photoUrl,text} = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    userNameEl.innerText = name;
    idx++;
    if(idx === testimonials.length){
        idx = 0;
    }
    setTimeout(()=>{
        updateTestimonial();
    },2000)
}