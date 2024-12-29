console.log('Hello')
let climateBtn=document.getElementById("climate");
let consumptionBtn=document.getElementById("consumption");
let resourceBtn=document.getElementById("resources");
let peopleBtn=document.getElementById("people");
let iframe=document.getElementById("frame");
let tagline=document.getElementById("save");

climateBtn.addEventListener("click",()=>{
    document.body.style.backgroundImage="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png')";
    iframe.src="https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";
    tagline.innerText='Do your bit! Save trees, use renewable energy soureces and prefer to travel green';
    climateBtn.style.backgroundColor="cornflowerblue";
    climateBtn.style.color="whitesmoke";
    consumptionBtn.style.backgroundColor="transparent";
    resourceBtn.style.backgroundColor="transparent";
    peopleBtn.style.backgroundColor="transparent";
});

consumptionBtn.addEventListener("click",()=>{
    document.body.style.backgroundImage="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png')";
    iframe.src="https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";
    tagline.innerText='Do your bit! Shop only what you need,eat only what you need and always save the left overs.';
    consumptionBtn.style.backgroundColor="forestgreen";
    consumptionBtn.style.color="whitesmoke";
    climateBtn.style.backgroundColor="transparent";
    resourceBtn.style.backgroundColor="transparent";
    peopleBtn.style.backgroundColor="transparent";
});

resourceBtn.addEventListener("click",()=>{
    document.body.style.backgroundImage="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png')";
    iframe.src="https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";
    tagline.innerText='Do your bit! Avoid all things plastic. Believe in Reduce, Reuse and Recycle';
    resourceBtn.style.backgroundColor="sandybrown";
    resourceBtn.style.color="whitesmoke";
    climateBtn.style.backgroundColor="transparent";
    consumptionBtn.style.backgroundColor="transparent";
    peopleBtn.style.backgroundColor="transparent";
});

peopleBtn.addEventListener("click",()=>{
    document.body.style.backgroundImage="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png')";
    iframe.src="https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";
    tagline.innerText='Do your bit! Never waste  food.Rather offer it to people or animals who are in need.';
    peopleBtn.style.backgroundColor="crimson";
    peopleBtn.style.color="whitesmoke";
    resourceBtn.style.backgroundColor="transparent";
    climateBtn.style.backgroundColor="transparent";
    consumptionBtn.style.backgroundColor="transparent";
});
