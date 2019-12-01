import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {
  Menu, Submenu, MenuItem, Input, Container,
  Header,
  Aside,
  Main,
  Row,
  Col,
  Button,
  Table,
  TableColumn,
  Avatar,
  Card
} from 'element-ui';

Vue.config.productionTip = false

Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Input);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Row);
Vue.use(Col);
Vue.use(Button);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Avatar);
Vue.use(Card);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
