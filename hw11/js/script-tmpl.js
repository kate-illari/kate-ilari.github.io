(function(){
    'use strict';

    var users = {
        title: 'Contacts:',
        members: [{
            avatar: 'https://goo.gl/XGjbiL',
            fullname: 'Fred Freddsonovych',
            phone1: '(093)922-61-93',
            phone2: '(058)675-54-33',
            addressLine1: 'Ukraine, Donetsk',
            addressLine2: 'Shevchenka blv. 22, app.54',
            email: 'kakulena@gmail.com',
            website: 'virtualpiano.net'
        },
            {
                avatar: 'https://goo.gl/VqV3tG',
                fullname: 'Barney Barneysonovych',
                phone1: '(093)922-61-28',
                phone2: '(066)333-53-93',
                addressLine1: 'Ukraine, Kyiv',
                addressLine2: 'I.Franka st. 115, app.58',
                email: 'blablabla@gmail.com',
                website: 'savethesounds.info'
            },
            {
                avatar: 'https://goo.gl/BJoJbj',
                fullname: 'Eric Ericssonovych',
                phone1: '(093)752-61-11',
                phone2: '(999)922-61-93',
                addressLine1: 'Zimbabwe, Harare',
                addressLine2: 'Limpopo st. 8, app.3',
                email: 'ynkytynkooo@gmail.com',
                website: 'rainfor.me'
            }]
    };


    var html = document.getElementById('contactslist').textContent;
    var template = _.template(html);
    document.getElementById('root').innerHTML += template(users);

})();