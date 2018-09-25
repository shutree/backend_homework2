import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import ProductCategory from './pages/ProductCategory.vue'
import ProductList from './pages/ProductList.vue'
import ModifyPassword from './pages/ModifyPassword.vue'
import ModifyUser from './pages/ModifyUser.vue'
import OrderList from './pages/OrderList.vue'


const router = new VueRouter({
  routes: [
    {
      path: '/productcategory',
      component: ProductCategory
    },
    {
      path: '/productlist',
      component: ProductList
    },
    {
      path: '/modifypassword',
      component: ModifyPassword
    },
    {
      path: '/modifyuser',
      component: ModifyUser
    },
    {
      path: '/orderlist',
      component: OrderList
    }

  ]
});

export default router;
