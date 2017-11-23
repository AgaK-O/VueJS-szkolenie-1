Vue.component('student', {
    template: '#student-template',
    props: ['s', 'index'],
    methods: {
        deleteStudent: function (id) {
            this.$emit('delete', id);
        }
    }
})