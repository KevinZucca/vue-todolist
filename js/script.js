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
    doneItem(justDone) {
       justDone.done = !justDone.done;
    },

    addItem() {
        if (this.todoList.length < 7) {
            this.todoList.push({text:this.inputValue, done: false})
            this.inputValue = "";
        }
    },

    deleteItem(canceledIndex) {
        this.todoList.splice(canceledIndex, 1)
    }

  }
}).mount('#app')