Vue.component('animal', {
    template: '#animal-template',
    props: ['a', 'index'],
    methods: {
        deleteAnimal: function (id) {
            this.$emit('delete', id);
        }
    }
})