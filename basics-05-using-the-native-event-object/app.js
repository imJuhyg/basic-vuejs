const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      firstname: '',
      lastname: '',
      wFirstname: '',
      wLastname: '',
    };
  },
  computed: {
    /**
     * computed는 정의된 함수들을 캐시에 저장하고
     * 의존성(cName()의 경우에는 firstname)이 변경되는 경우에만 재평가한다.
     * (어떠한 값이 변경될 때만 재평가해야 하는 함수들을 정의해야한다.)
     */
    cName() {
      console.log("Called cName()");
      return this.firstname;
    }
  },
  methods: {
    /**
     * methods는 화면이 re-rendering 될 때마다 정의된 함수들을 재평가한다.
     * (무언가 하나라도 변경이 되면 재평가해야 하는 함수들만 정의해야한다.)
     */
    mLastname() {
      console.log("Called mLastname()");
      return this.lastname;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.firstname = '';
      this.lastname = '';
    }
  },
  /**
   * watch는 데이터 프로퍼티의 값이 변경될 때마다 동일 이름의 함수가 실행된다.
   */
  watch: {
    firstname(newValue, oldValue) {
      this.wFirstname = newValue;
    },
    lastname(newValue, oldValue) {
      this.wLastname = newValue;
    }, // watcher가 이런 용도는 아님.

    // ->
    counter(newValue, oldValue) {
      if(newValue > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    }
  }
});

app.mount('#events');
