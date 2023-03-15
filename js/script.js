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
      ],

      inputValue: "",


    }
  },

  methods: {
    deleteItem(todoIndex) {
        this.todoList.splice(todoIndex, 1)
    },

    addItem() {
        this.todoList.push({text:this.inputValue, done: true})
    }

  }
}).mount('#app')