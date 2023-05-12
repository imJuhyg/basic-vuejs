const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: '',
      id: '',
    };
  },
  methods: {
    add(num) {
      this.counter+=num;
    },
    reduce(num) {
      this.counter-=num;
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    inputId(event) {
      this.id = event.target.value;
    },
    submitForm(event) {
      // event.preventDefault();
      alert(`Submitted(ID: ${this.id})`);
    },
    confirmInput() {
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
