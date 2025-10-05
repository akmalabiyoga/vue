import Layout from '../main/layout.vue'
import Home from '../main/home.vue'
// import About from '../main/about.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '', component: Home },
      // { path: 'about', component: About }
    ]
  }
]

// For navlink store being used on navlink component
export const mainlink = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contasct', path: '/contact' },
  {
    name: 'Class', child: [
      { name: 'Add Task', path: 'class/addtask' },
      { name: 'Task List', path: 'class/tasklist' }
    ]
  }
]

export default routes
