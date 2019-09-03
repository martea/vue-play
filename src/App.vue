<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>Button</h1>
    <Button>Hej</Button>
    <h1>List</h1>
    <List></List>
    <h1>ListItem</h1>
    <ListItem>Item example</ListItem>

    <h1>List And Item</h1>
    <List>
      <ListItem>Item1</ListItem>
      <ListItem>Item2</ListItem>
    </List>

    <h1>ToDo</h1>
    <Todo msg="Todo Header"></Todo>
  </div>
</template>

<script>
import Button from "./components/Button.vue.js";
import List from "./components/List.vue";
import ListItem from "./components/ListItem.vue";
import Todo from "./components/Todo.vue";

export default {
  name: "app",
  components: {
    Button,
    List,
    ListItem,
    Todo
  }
};
</script>
<style scoped lang="scss">
h1 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  &::before {
    content: "-------------- Component ";
  }

  &:after {
    font-size: 50%;
    content: " scoped styling on h1----";
  }
}
</style>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
