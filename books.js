const ideaText = document.getElementById('idea');
const ideaBtn = document.getElementById('new-idea');
const ideaCategory = document.getElementById('idea-category');
const loader = document.getElementById('loader');

const ideas = {
    fiction: [
        'A detective solves a mystery with the help of a ghost.',
        'In a world where dreams can be traded, a girl sells hers to save her family.',
        'Two strangers keep swapping bodies every time they fall asleep.'
    ],
    nonfiction: [
        'A deep dive into the history of forgotten inventions.',
        'Exploring the daily rituals of famous scientists.',
        'A travelogue of remote islands around the world.'
    ],
    selfhelp: [
        'How to organize your life using the power of tiny habits.',
        'Finding creativity through simple morning routines.',
        'A guide to building resilience during difficult times.'
    ]
};

function loading() {
    loader.hidden = false;
    ideaText.hidden = true;
}

function complete() {
    ideaText.hidden = false;
    loader.hidden = true;
}

function getIdea() {
    loading();
    const category = ideaCategory.value;
    const pool = ideas[category] || [];
    const idea = pool[Math.floor(Math.random() * pool.length)];
    ideaText.innerText = idea;
    complete();
}

ideaBtn.addEventListener('click', getIdea);
ideaCategory.addEventListener('change', getIdea);

getIdea();

