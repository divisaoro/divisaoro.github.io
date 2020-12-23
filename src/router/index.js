import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contacto from "../views/Contacto.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/contacto",
        name: "Contacto",
        component: Contacto
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
