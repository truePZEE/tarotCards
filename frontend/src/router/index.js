import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Reading from '../views/Reading.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/reading', component: Reading }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router