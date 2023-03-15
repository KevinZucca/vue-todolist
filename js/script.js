const { createApp } = Vue

createApp({
  data() {
    return {
      todoList: [
        {
            text: "Go to the gym",
            done: true,
        },
        {
            text: "Home cleaning",
            done: false,
        },
        {
            text: "Bring the car to the mechanic",
            done: true,
        }
      ]


    }
  },

  methods: {
    deleteItem(todoIndex) {
        this.todoList.splice(todoIndex, 1)
    }

  }
}).mount('#app')