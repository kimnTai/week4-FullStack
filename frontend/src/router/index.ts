import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        name: "Home",
        path: "/",
        component: () => import("@/views/Home.vue"),
    },
    {
        name: "Publish",
        path: "/publish",
        component: () => import("@/views/Publish.vue"),
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
