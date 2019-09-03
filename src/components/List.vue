<template>
  <ul class="list-component">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "list-component"
};
</script>

<style lang="scss">
.list-component{
    list-style: none;
    padding:0;
    margin:0;
}
</style>