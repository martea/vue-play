<template>
  <div class="todo-component">
    <h1>{{msg}}</h1>
    <button @click="addNewTodo">Add new</button>
    <List>
      <ListItem v-for="(item,index) in items" :key="index" @click="toggleTodo(item)">
        <span>{{item.msg}}</span>
        <span>{{item.checked}}</span>
      </ListItem>
    </List>
  </div>
</template>

<script>
import List from "./List";
import ListItem from "./ListItem";

class TodoItem {
  constructor($index) {
    this.msg = "replace todo " + $index;
    this.checked = false;
  }
}

export default {
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      items: []
    };
  },
  components: {
    List,
    ListItem
  },
  methods: {
    toggleTodo(item) {
      item.checked = !item.checked;
    },
    addNewTodo() {
      this.items.push(new TodoItem(this.items.length));
    },
    removeTodo(todo) {
      this.items.remove(todo);
    }
  }
};
</script>

<style lang="scss">
.todo-component {
  button {
    border: 0;
    background-color: indigo;
    color: #fff;
    font-weight: bold;
    padding: 1rem;
  }
}
</style>