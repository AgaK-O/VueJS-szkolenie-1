var app = new Vue({
    el: '#app2',
    data: {
        pageName: 'Atlas zwierząt',
        animals: [
            { name: 'Lew', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg' },
            { name: 'Kot', imgSrc: 'http://www.catster.com/wp-content/uploads/2017/06/small-kitten-meowing.jpg' },
            { name: 'Pies', imgSrc: 'https://s7d2.scene7.com/is/image/PetSmart/PB1201_STORY_CARO-Authority-HealthyOutside-DOG-20160818?$PB1201$' },
            { name: 'Zebra', imgSrc: 'https://a-z-animals.com/media/animals/images/470x370/zebra_8.jpg' }
        ]
    },
    methods: {
        deleteAnimal: function (index) {
            this.animals.splice(index, 1);
        }
    },
    computed: {
        animalsCount: function () {
            return this.animals.length;
        }
    }
})