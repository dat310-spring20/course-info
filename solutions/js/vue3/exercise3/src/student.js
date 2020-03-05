const studentComp = Vue.component('student-grades',{
    props: ["student_no"],
    template: `
    <div>
    <h1>Grades for {{ student.student_name }} ({{ student.student_no }})</h1>
    <my-table
        v-bind:headings="headings"
        v-bind:rows="grades"
    ></my-table>

    <button v-on:click="$emit('error')">Error</button>
    <button v-on:click="$router.push('/')">To main</button>
    </div>
    `,
    computed: {
        grades(){
            return store.studentGrades(this.student_no);
        },
        student(){
            return store.student(this.student_no);
        },
        headings: ()=> {
            return [
                { name: "Course", 
                  key: "course_id" },
                { name: "Grade", 
                  key: "grade" }];
        }
    }
});