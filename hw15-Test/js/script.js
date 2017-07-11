(function () {
    'use strict';

    var addQbutton = document.getElementById('butn'),
        checkbtn = document.getElementById('checkbtn'),
        modal = document.querySelector('#popup'),
        span = document.querySelectorAll(".popup__close")[0],
        greenbtn = document.querySelector('.popup__buttons-green'),
        shouldbe = [];

// create new question to the test
    addQbutton.addEventListener('click', function () {
        var myObj = {
            title: prompt('Введите вопрос', ''),
            answers: prompt('Варианты ответов через запятую', ''),
            correct: prompt('Номера правильных ответов через запятую', '')
        };
        var newQuestion = new Test(myObj);
        shouldbe.concat(newQuestion.getAnswers());

        var html = document.querySelector('#questionsList').textContent,
            template = _.template(html);

        document.querySelector('#container').innerHTML += template(newQuestion);
    });

// check answers
    checkbtn.addEventListener('click', function () {
        var checkboxes = document.querySelectorAll('.checkbox'),
            entered = checkAnswers(),
            results = entered.every(function (item, i) {
                return item === shouldbe[i];
            }),
            popupMessage = document.querySelector('#popup__text');

        function checkAnswers() {
            var checkArray = [];

            checkboxes.forEach(function (box) {
                checkArray.push(box.checked);
            });
            return checkArray;
        }

        toggleModal();

        if (results) {
            popupMessage.innerHTML = 'All correct, good job!';
        }
        else {
            popupMessage.innerHTML = 'Hmmm, something is wrong';
        }
        checkboxes.forEach(function (box) {
            box.checked = false;
        });
    });

// popup hiders
    span.addEventListener('click', toggleModal);
    greenbtn.addEventListener('click', toggleModal);
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            toggleModal();
        }
    });

// function to show/hide popup
    function toggleModal() {
        if (modal.style.display === "flex") {
            modal.style.display = "none";
        } else {
            modal.style.display = "flex";
        }
    }

// new question constructor function
    function Test(data) {
        this.title = data.title;
        this.answers = this.createAnswers(data);
    }

    Test.prototype.createAnswers = function (data) {
        var separ = /\s*,\s*/,
            answersArr = data.answers.split(separ),
            correct = data.correct.split(separ).map(function (el) {
                return (parseInt(el) - 1);
            }),
            answerObjArr = [];

        answersArr.forEach(function (answer, index) {
            answerObjArr.push(
                {
                    text: answer,
                    correct: correct.some(function (item) {
                        return item === index;
                    })
                }
            );
        });
        return answerObjArr;
    };

    Test.prototype.getAnswers = function () {
        this.answers.forEach(function (answer) {
            shouldbe.push(answer.correct);
        });
    };

// insertion of a sample question to the test page:
    var firstQuestion = {
            title: '1+1',
            answers: '2, 3, 4',
            correct: '1'
        },
        html = document.querySelector('#questionsList').textContent,
        template = _.template(html),
        sampleQ = new Test(firstQuestion);

    shouldbe.concat(sampleQ.getAnswers());
    document.querySelector('#container').innerHTML += template(sampleQ);

}());
