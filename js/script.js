const question = document.getElementById('question');
const FAQquestion = document.getElementById('FAQ-question');

question.addEventListener('click', () => {
    if(question.classList.contains('active')){
        question.classList.remove('active');
        FAQquestion.classList.remove('show-animation');
    }else{
        question.classList.add('active');
        FAQquestion.classList.add('show-animation');
    }
})

const question2 = document.getElementById('question-child-2');
const FAQquestion2 = document.getElementById('FAQ-question-2');

question2.addEventListener('click', () => {
    if(question2.classList.contains('active')){
        question2.classList.remove('active');
        FAQquestion2.classList.remove('show-animation');
    }else{
        question2.classList.add('active');
        FAQquestion2.classList.add('show-animation');
    }
})

const question3 = document.getElementById('question-child-3');
const FAQquestion3 = document.getElementById('FAQ-question-3');

question3.addEventListener('click', () => {
    if(question3.classList.contains('active')){
        question3.classList.remove('active');
        FAQquestion3.classList.remove('show-animation');
    }else{
        question3.classList.add('active');
        FAQquestion3.classList.add('show-animation');
    }
})

const question4 = document.getElementById('question-child-4');
const FAQquestion4 = document.getElementById('FAQ-question-4');

question4.addEventListener('click', () => {
    if(question4.classList.contains('active')){
        question4.classList.remove('active');
        FAQquestion4.classList.remove('show-animation');
    }else{
        question4.classList.add('active');
        FAQquestion4.classList.add('show-animation');
    }
})

const question5 = document.getElementById('question-child-5');
const FAQquestion5 = document.getElementById('FAQ-question-5');

question5.addEventListener('click', () => {
    if(question5.classList.contains('active')){
        question5.classList.remove('active');
        FAQquestion5.classList.remove('show-animation');
    }else{
        question5.classList.add('active');
        FAQquestion5.classList.add('show-animation');
    }
})
