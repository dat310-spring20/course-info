const store = new Vue({
    data: {
        courses,
        students,
        grades
    },
    computed: {
        studentGrades: function(){
            let grades = this.grades;
            return function(student_no){
                return grades.filter(grade => grade.student_no === student_no );
            }
        },
        courseGrades(){
            return (course_id)=>{
                return this.grades.filter(grade => grade.course_id === course_id);
            }
        },
        student(){
            return (student_no)=>{
                return this.students.find( stud => stud.student_no === student_no);
            }
        },
        course(){
            return (course_id)=> {
                return this.courses.find( course => course.course_id === course_id );
            }
        }
    },
    methods: {
        addGrade(student_no, course_id, grade){
            if (this.student(student_no) &&
                this.course(course_id) &&
                grade){
                    this.grades.push({ 
                        student_no: student_no,
                        course_id: course_id,
                        grade: grade
                    });
                    console.log("added grade");
                }
            else console.log("could not validate input");
        }
    }
})