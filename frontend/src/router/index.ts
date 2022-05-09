import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        name: "Home",
        path: "/home",
        component: Home,
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
