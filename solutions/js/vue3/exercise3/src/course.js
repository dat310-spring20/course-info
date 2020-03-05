const courseComp = Vue.component('course-grades',{
    props: ["course_id"],
    data: function(){
        return {
            grades: store.courseGrades(this.course_id),
            course: store.course(this.course_id),
        };
    },
    template: `
    <div>
    <h1>Grades for {{ course.course_id }}: {{ course.course_name }} </h1>
    <my-table
        v-bind:headings="headings"
        v-bind:rows="grades"
    ></my-table>

    <button v-on:click="goBack">To main</button>
    </div>
    `,
    methods: {
        goBack: function(){
            // go to main page:
            this.$router.push('/');
            // go back to last page (same as hitting back on browser)
            // this.$router.go(-1);

        }
    },
    computed: {
        headings: ()=> {
            return [
                { name: "Student number", 
                  key: "student_no" },
                { name: "Grade", 
                  key: "grade" }];
        }
    }
});