const { createApp } = Vue

createApp({
  data() {
    return {
      todoList: [
        {
            text: "Go to the gym",
            done: false,
        },
        {
            text: "Home cleaning",
            done: false,
        },
        {
            text: "Bring the car to the mechanic",
            done: false,
        }
      ],

      inputValue: "",


    }
  },

  methods: {
    deleteItem(justDone) {
       justDone.done = !justDone.done;
    },

    addItem() {
        this.todoList.push({text:this.inputValue, done: false})
    }

  }
}).mount('#app')