import Vue from 'vue';

Vue.component('button', {
    data: function () {
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++"><slot/>({{ count }})</button>'
  })