const router = new VueRouter({
    routes: [
      // dynamic segments start with a colon
      { path: '/student/:student_no', component: studentComp, props: true},
      { path: '/course/:course_id', component: courseComp, props: true },
      { path: '/', component: mainComp }
    ]
  })