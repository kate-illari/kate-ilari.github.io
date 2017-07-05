(function () {
  'use strict';

    var data = {
            title: 'Тест по математике',
            questions: [
                {
                    title: '25 + 24',
                    answers: [
                        {
                            text: '> 25',
                            correct: true
                        },
                        {
                            text: '> 50',
                            correct: false
                        },
                        {
                            text: '> 48',
                            correct: true
                        }]
                },
                {
                    title: '512 / 32',
                    answers: [
                        {
                            text: '< 5',
                            correct: false
                        },
                        {
                            text: '< 10',
                            correct: false
                        },
                        {
                            text: '< 20',
                            correct: true
                        },
                        {
                            text: '< 30',
                            correct: true
                        }]
                },
                {
                    title: '1 + 1',
                    answers: [
                        {
                            text: '1',
                            correct: false
                        },
                        {
                            text: '2',
                            correct: true
                        }]
                }],
            getAnswers: function () {
                var myArray = [];
                this.questions.forEach(function (question) {
                    question.answers.forEach(function (answer) {
                       myArray.push(answer.correct);
                    });
                });
                return myArray;
            }
        };

    localStorage.setItem('data', JSON.stringify(data));


    var html = document.querySelector('#questionsList').textContent,
        template = _.template(html),
        myData = JSON.parse(localStorage.getItem('data'));

    document.querySelector('#root').innerHTML += template(myData);

    function toggleModal() {
        if (modal.style.display === "flex"){
            modal.style.display = "none";
        } else {
            modal.style.display = "flex";
        }
    }

    function checkAnswers() {
        var checkArray =[];

        checkboxes.forEach(function (box) {
            checkArray.push(box.checked);
        });
        return checkArray;
    }

    var butt = document.querySelector('#btn'),
        span = document.querySelectorAll(".popup__close")[0],
        greenbtn = document.querySelector('.popup__buttons-green'),
        checkboxes = document.querySelectorAll('.checkbox'),
        modal = document.querySelector('#popup');


    butt.addEventListener('click', function(){
        var entered = checkAnswers(),
            shouldbe = data.getAnswers(),
            results = entered.every(function (item, i) {
            return item === shouldbe[i];
        }),
            popupMessage = document.querySelector('#popup__text');

        toggleModal();

        if (results) {popupMessage.innerHTML = 'All correct, good job!';}
        else {popupMessage.innerHTML = 'Hmmm, something is wrong';}
        checkboxes.forEach(function(box) {
            box.checked = false;
        });
    });
    span.addEventListener('click', toggleModal);
    greenbtn.addEventListener('click', toggleModal);
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            toggleModal();
        }
    });
})();
