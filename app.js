var app = new Vue({
  el: '#app',
  data: {
    imgSrc: 'obrazek.jpg',
    schoolName: 'Szkoła Podstawowa nr. 3',
    foundationYear: 1970,
    students: [
      { firstName: 'Jacek', lastName: 'Kowalski', isPresent: false },
      { firstName: 'Kuba', lastName: 'Jackowski', isPresent: true },
      { firstName: 'Jan', lastName: 'Nowak', isPresent: false },
    ],
    tescik: ''
  },
  methods: {
    deleteStudent: function(index) {
      this.students.splice(index, 1)
    }
  },
  computed: {
    studentsCount: function() {
      return this.students.length
    }
  }
})