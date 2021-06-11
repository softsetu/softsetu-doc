/* global options, TIMEOUT */

import Vue from "vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

Vue.use(Loading, options);
export default {
  mounted() {
    let loader = null;

    this.$router.beforeEach((to, from, next) => {
      loader = Vue.$loading.show();
      next();
    });

    this.$router.afterEach(() => {
      setTimeout(() => {
        loader.hide();
      }, TIMEOUT);
    });
  },
};
