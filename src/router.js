import { createRouter, createWebHistory }from "vue-router";
import Index from "./pages/index.vue";
import About from "./pages/about.vue";
import Available from "./pages/available.vue";
import Quote from "./pages/quote.vue";
import Payment from "./pages/payment.vue";
import Login from "./pages/login.vue";
import NotFound from "./pages/404.vue";


const routes = [
    {
        path: "/",
        name: "Index",
        component: Index,
    },
    {
        path: "/about",
        name: "About Us",
        component: About,
    },
    {
        path: "/available",
        name: "Available",
        component: Available,
    },
    {
        path: "/quote",
        name: "Get a quote",
        component: Quote,
    },
    {
        path: "/payment",
        name: "Make a payment",
        component: Payment,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
