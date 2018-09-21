import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import ProductCategory from './pages/ProductCategory.vue'
import ProductList from './pages/ProductList.vue'


const router = new VueRouter({
  routes: [
    {
      path: '/productcategory',
      component: ProductCategory
    },
    {
      path: '/productlist',
      component: ProductList
    }

  ]
});

export default router;
