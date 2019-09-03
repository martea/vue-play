<template>
  <li class="list-item-component" @click="$emit('click')">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: "list-item-component"
};
</script>

<style lang="scss">
.list-item-component{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    padding:0.25rem 1rem ;
    margin:0.5rem;
    box-shadow: 0px 0px 1px rgba(0,0,0,0.25);
}
</style>