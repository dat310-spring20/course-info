const vuexStore = new Vuex.Store({
    state: {
        // like data in the vue instance
        courses,
        students,
        grades
    },
    getters: {
        // like computed in vue instance, but use state argument instead of this.
        studentGrades: function(state){
            let grades = state.grades;
            return function(student_no){
                return grades.filter(grade => grade.student_no === student_no );
            }
        },
        courseGrades(state){
            return (course_id)=>{
                return state.grades.filter(grade => grade.course_id === course_id);
            }
        },
        student(state){
            return (student_no)=>{
                return state.students.find( stud => stud.student_no === student_no);
            }
        },
        course(state){
            return (course_id)=> {
                return state.courses.find( course => course.course_id === course_id );
            }
        }
    },
    mutations: {
        // mutation takes state as argument, and one additional arguement (payload)
        addGrade: function(state, grade){
            state.grades.push(grade);
            console.log("added grade");
        }
    }
})