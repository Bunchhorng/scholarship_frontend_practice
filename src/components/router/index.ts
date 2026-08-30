import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/Home.vue";
import About from "../view/About.vue";
import ProductList from "../view/product/ProductList.vue";
import ProductDetails from "../view/product/ProductDetails.vue";
import Product from "../view/FetchFackeStore/Product.vue";

const routes = [
    {
        path:'/',
        component: Home
    },
    {
        path:'/about',
        component: About
    },

    // product route
    {
        path:'/products',
        component:ProductList
    },
    // product detail
    {
        path: '/products/:id',
        component:ProductDetails
    },
    {
        path: '/products-api',
        component:Product
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router