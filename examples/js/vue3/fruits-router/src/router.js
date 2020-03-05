let router = new VueRouter({
    routes: [
      { path: '/', component: myFavorites },
      { path: '/all', component: allFruits},
      { path: '/student/:id', component: student, props: true}

    ]
});
let student = { props: ['id'], template: `<div>Student {{ id }}</div>`}