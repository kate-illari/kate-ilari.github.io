(function() {
    'use strict';


    var button = document.getElementById('btn');
    var myInput = document.getElementById('inpt');
    var searchform = document.getElementById('searchform');


    var myContent = function () {

        var inputValue = myInput.value;
        var container = document.getElementById('container');
        var fetchText = 'https://pixabay.com/api/?key=5837779-ac3ba737206b541ae294f1119&image_type=photo&q=' + inputValue;

        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild);
        }

        var promise = fetch(fetchText)
            .then(function (response) {
                if (response.ok){
                    return response.json();
                }
                throw new Error ('Error fetching data');
            })
            .then(function (data) {
                if (data.hits.length > 0) {
                    data.hits.forEach(function (hits) {
                        var img = document.createElement('img');

                        container.appendChild(img);
                        img.setAttribute('src', hits.webformatURL);
                    });
                } else {
                    container.innerHTML = 'No search result, please try something else';
                }
            })
            .catch(function (error) {
                alert(error);
            });
    };

    button.addEventListener('click', myContent);
    myInput.addEventListener('keyup', function (event) {
        if (event.keyCode === 13) return myContent();
    });


})();