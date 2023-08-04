
let questions = [
    {
        id: 1,
        question: "What's your favorite pastime activity?",
        answer:"Napping in the sun",
        options: [
          "Bird watching",
          "Chasing laser pointers",
          "Napping in the sun",
          "Climbing tall furniture"
        ]   
    },
    {
        id: 2,
        question: "What's your preferred method of communication?",
        answer: "Rubbing against legs",
        options: [
          " Purring",
          " Meowing",
          "Rubbing against legs",
          "Playing with toys"
        ]
      },
      {
        id: 3,
        question: "How would you describe your ideal date?",
        answer: "Playfully chasing each other around",
        options: [
          " A romantic candlelit dinner",
          " Cuddling and watching a movie",
          "Exploring new environments together",
          "Playfully chasing each other around"
        ]
      },
      {
        id: 4,
        question: "What's your opinion on catnip?",
        answer: "It's alright, but I don't go crazy for it.",
        options: [
          "Love it! Can't get enough!",
          " It's alright, but I don't go crazy for it.",
          "Not a fan, it makes me feel weird.",
          "What's catnip?"
        ]
      },
      {
        id: 5,
        question: "Are you a fan of belly rubs?",
        answer: "No way, I'll scratch anyone who tries.",
        options: [
          " Yes, I absolutely love them!",
          "I'm not a big fan, but I tolerate them",
          "No way, I'll scratch anyone who tries.",
          "I haven't experienced them before."
        ]
      },
      {
        id: 6,
        question: "What's your opinion on dogs?",
        answer: "They're terrifying, I can't stand them!",
        options: [
          "Love them! I'm great with dogs.",
          " I can tolerate them, but I prefer my own kind.",
          "They're terrifying, I can't stand them!",
          "I'm not sure, I've never met a dog."
        ]
      },
      {
        id: 7,
        question: "How do you feel about catnip-infused toys?",
        answer: "They're the best! I could play with them all day",
        options: [
          "They're the best! I could play with them all day.",
          "They're fun, but I enjoy other toys too",
          " don't really care for them.",
          " I've never tried them"
        ]
      },
      {
        id: 8,
        question: "What's your stance on scratching furniture? ",
        answer: "I'll scratch anything I can find!",
        options: [
          "I have my own scratching post, so I don't scratch furniture.",
          "It's a habit I'm trying to break.",
          " I'll scratch anything I can find!",
          "I prefer not to scratch furniture, but sometimes I can't resist."
        ]
      },
      {
        id: 9,
        question: "How do you react when you see a laser pointer dot?",
        answer: "I find it entertaining and enjoy chasing it",
        options: [
          " I go absolutely crazy and try to catch it!",
          "I find it entertaining and enjoy chasing it.",
          " I'm not interested, it's too unpredictable",
          "I've never seen a laser pointer dot."
        ]
      },
      {
        id: 10,
        question: "What's your ideal living environment?",
        answer: "Any place where I can be with my human companion.",
        options: [
          " A cozy apartment with lots of windows for sunbathing",
          "A spacious house with plenty of hiding spots.",
          " A farm or a large outdoor area where I can explore.",
          "Any place where I can be with my human companion."
          
        ]
      },
];

let question_count = 0;
let points = 0;


window.onload = function(){
    show(question_count);
};

function show(count){
    let question = document.getElementById("questions");
    let[first, second, third, fourth] = questions[count].options;

    question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;
    toggleActive();  
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i < option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i < option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

function next(){

    if(question_count == questions.length -1){
        location.href = "final.html";
    }
    console.log(question_count);


let user_answer = document.querySelector("li.option.active").innerHTML;

if(user_answer == questions[question_count].answer){
    points += 10;
    sessionStorage.setItem("points",points);
}
console.log(points);
question_count++;
show(question_count);
}