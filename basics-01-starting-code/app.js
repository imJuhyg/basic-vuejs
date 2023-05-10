/**
 * 요약
 * 1) Vue프레임워크는 선언형 접근 방식을 사용한다.
 *    : 개발자가 앱에서 사용할 로직 또는 값들을 Vue 앱(Vue 프레임워크를 사용한 자바스크립트)에 정의하고
 *      컨텐츠를 HTML 템플릿으로 정의해놓기만 하면 나머지 작업들(데이터 바인딩 등)은 Vue 프레임워크가 알아서 작업하여 처리한다.
 * 2) Vue앱은 하나의 HTML 요소에만 연결할 수 있으므로
 *    app.mount()에 ID 선택자같은 CSS 선택자를 사용하여 지정해야한다.
 * 3) data() {}는 HTML에서 사용할 데이터를 Object 형식으로 정의하여 return 한다.
 *    HTML 코드에서는 {{ }} 형식으로써 정의된 데이터를 사용할 수 있다.
 * 4) methods: {}는 HTML에서 사용할 데이터를 함수 형식으로 정의한다.
 *    HTML 코드에서는 {{ }} 형식으로써 정의된 데이터를 사용할 수 있다.
 * 5) v-bind을 HTML속성에 바인딩하면 HTML 태그 속성의 값을 Vue 앱에서 정의한 값으로 사용할 수 있게 한다.
 * 6) v-html은 반환되는 데이터에 HTML 태그가 포함되어 있을 경우 해당 태그로 감싸진 값으로 출력한다.
 * 7) Vue 앱내에서의 this 키워드는 동일 Vue 앱의 전체 범위에 해당한다. 
 */

const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: 'Master Vue and build amazing apps!',
            vueLink: 'https://vuejs.org'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if(randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});
app.mount('#user-goal');