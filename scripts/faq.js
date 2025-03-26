const faqArray = [
  {question: "What kind of power outlets does Taniti have?",
    answer: "Power outlets are 120 volts (the same as in the United States).",
    id: 1
  },
  {question: "Can I buy alcohol at any time?",
    answer: "Alcohol is not allowed to be served or sold between the hours of midnight and 9:00 a.m.",
    id: 2
  },
  {question: "What's the drinking age in Taniti?",
    answer: "The drinking age on Taniti is 18 and the drinking age is not strictly enforced.",
    id: 3
  },
  {question: "Do people in Taniti speak English?",
    answer: "Many younger Tanitians speak fluent English. Very little English is spoken in rural areas, especially by the older residents.",
    id: 4
  },
  {question: "Is there medical care on the island?",
    answer: "There is one hospital and several clinics. The hospital has many multilingual employees.",
    id: 5
  },
  {question: "Is Taniti a safe place to visit?",
    answer: "Violent crime is very rare on Taniti, but as tourism increases, there are more reports of pickpocketing and other petty crimes.",
    id: 6
  },
  {question: "Will places be open on holidays?",
    answer: "Taniti enjoys a large number of national holidays, and many tourist attractions and restaurants will be closed on holidays, so visitors should plan accordingly.",
    id: 7
  },
  {question: "What money can I use in Taniti?",
    answer: "Taniti uses the U.S. dollar as its currency, but many businesses will also accept euros and yen. Several banks facilitate currency exchange, and many businesses accept major credit cards.",
    id: 8
  },
];

function generateFaq(array) {

  const container = document.querySelector('.faq-container');

  array.forEach((item) => {
    container.innerHTML += `
    <div class="item">
      <div class="question collapsed" id="q${item.id}">
        <p class="question-text">${item.question}</p>
        <img class="expand-icon" id="icon${item.id}" src="Images/Icons/icon-down-pink.svg" alt="Toggle question" />
      </div>
      <div class="answer collapsed" id="a${item.id}">
        <p class="answer-text">${item.answer}</p>
      </div>
    </div>`
  });

  document.querySelectorAll('.question').forEach(question => {
    question.addEventListener('click', function() {
      const idNum = this.id.replace('q', '');
      if(this.classList.contains('collapsed')) {
        expandItem(idNum);
      } else if(this.classList.contains('expanded')) {
        collapseItem(idNum);
      }
    });
  });
}

function expandItem(id) {
  const question = document.getElementById(`q${id}`);
  const answer = document.getElementById(`a${id}`);
  const icon = document.getElementById(`icon${id}`);

  question.classList.remove('collapsed');
  question.classList.add('expanded');

  answer.classList.remove('collapsed');
  answer.classList.add('expanded');

  icon.src = 'Images/Icons/icon-x-pink.svg';
  icon.classList.remove('expand-icon');
  icon.classList.add('collapse-icon');
}

function collapseItem(id) {
  const question = document.getElementById(`q${id}`);
  const answer = document.getElementById(`a${id}`);
  const icon = document.getElementById(`icon${id}`);

  question.classList.remove('expanded');
  question.classList.add('collapsed');

  answer.classList.remove('expanded');
  answer.classList.add('collapsed');

  icon.src = 'Images/Icons/icon-down-pink.svg';
  icon.classList.remove('collapse-icon');
  icon.classList.add('expand-icon');
}

generateFaq(faqArray);