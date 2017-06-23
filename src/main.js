// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'

import fastclick from 'fastclick'
fastclick.attach(document.body)


Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.emulateJSON = true;
var router = require("./config.js")(VueRouter);

/* eslint-disable no-new */

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
