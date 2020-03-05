const mainComp = {
    data: function(){
        return {
            students: store.students,
            courses: store.courses
        }
    },
    template: `
    <div>
    <h1>Students</h1>
    <table>
        <thead>
            <tr>
                <th>Student number</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in students">
                <td>
                    <router-link v-bind:to="'/student/' + row.student_no">
                    {{ row.student_no }}
                    </router-link>
                </td>
                <td>
                    {{ row.student_name }}
                </td>
            </tr>
        </tbody>
    </table>
    <h1>Courses</h1>
    <table>
        <thead>
            <tr>
                <th>Course code</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in courses">
                <td>
                    <router-link v-bind:to="'/course/' + row.course_id">
                    {{ row.course_id }}
                    </router-link>
                </td>
                <td>
                    {{ row.course_name }}
                </td>
            </tr>
        </tbody>
    </table>
    </div>
    `
};



Vue.component('my-table',{
    props: {
        headings: {
            type:Array,
            // each element must have name and key
            validate: function(value){
                value.forEach(element => {
                    if (!element.name || !element.key )
                        return false;
                });
                return true;
            }
        },
        rows: Array,
    },
    template: `
    <table>
        <thead>
            <tr>
                <th v-for="head in headings">
                    {{ head.name }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in rows">
                <td v-for="head in headings">
                    {{ row[head.key] }}
                </td>
            </tr>
        </tbody>
    </table>
    `
})