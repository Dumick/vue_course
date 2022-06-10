<template>
  <div class="container">
    <h1>Your To Do List</h1>
    <v-item v-for="todo, key in todos" :key="key" :title="todo.title" :current="todo.counter" :max="todo.max"
      @back="makeBack(key)" @add="makeAdd(key)" @remove="makeRemove(key)" />

    <form class="form_add">
      <label for="title">
        Title
        <input id="title" type="text" v-model="newToDo.title">
      </label>
      <label for="max">
        Max Count Actions
        <input id="max" type="text" v-model="newToDo.max">
      </label>
      <button @click.prevent="addToDo" :disabled="emptyTitle">Add</button>
    </form>
  </div>
</template>

<script>
import vItem from '@/components/v-item.vue'

export default {
  name: 'App',
  components: { vItem },
  data() {
    return {
      newToDo: { title: '', counter: 0, max: 1 },
      todos: [
        { title: 'School', counter: 0, max: 11 },
        { title: 'Unifersity', counter: 0, max: 4 },
        { title: 'Work', counter: 0, max: 35 },
        { title: 'Shop', counter: 0, max: 20 }
      ]
    }
  },
  computed: {
    emptyTitle() {
      return this.newToDo.title.length > 0 ? false : true
    }
  },
  methods: {
    makeAdd(key) {
      this.todos[key].counter++
    },
    makeBack(key) {
      this.todos[key].counter--
    },
    makeRemove(key) {
      this.todos.splice(key, 1)
    },
    addToDo() {
      this.todos.push(this.newToDo)
      this.newToDo = { title: '', counter: 0, max: 1 }
    }
  }
}
</script>

<style>
@import '@/assets/main.css';
</style>