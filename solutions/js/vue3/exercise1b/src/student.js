Vue.component("student-page",{
    props: ["student_no"],
    template: `
    <div>
    <h1>Grades for {{ student.student_name }} ({{ student.student_no }})</h1>
    <my-table
        v-bind:headings="headings"
        v-bind:rows="grades"
    ></my-table>

    <button v-on:click="$emit('back')">To main</button>
    </div>
    `,
    computed: {
        grades(){
            return this.$store.getters.studentGrades(this.student_no);
        },
        student(){
            return this.$store.getters.student(this.student_no);
        },
        headings: ()=> {
            return [
                { name: "Course", 
                  key: "course_id" },
                { name: "Grade", 
                  key: "grade" }];
        }
    }
})