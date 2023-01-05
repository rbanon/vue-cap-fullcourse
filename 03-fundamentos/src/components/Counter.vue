<template>
  <h3>{{customTitle}}</h3>
  <p>{{counter}}<sup>2</sup> = {{squareCounter}}</p>
  
  <div>
    <button @click="increase()">+1</button>
    <button @click="decrease()">-1</button>
  </div>

</template>

<script>

export default {
  props:{
    title: String,
    start: {
      type: Number,
      default:100,
      validator(value){
        return (value >= 0)
      }
    }
  },
  data(){
    return{
      counter: this.start
    }
  },
  methods:{
    getSquareValue(){
      console.log("GetSqareValue")
      return this.counter*this.counter
    },
    increase(){
      console.log("Suma")
      this.counter++
    },
    decrease(){
      console.log("Resta")
      this.counter--
    }

  },
  computed: {
    squareCounter(){
      console.log("computed squareCounter")
      return this.counter*this.counter
    },
    customTitle(){
      return this.title || "Counter"
      //return this.title ? this.title:"Counter"
    }
  }

}
</script>

<style>
  button{
    background-color: #64bb87;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    margin: 0 5px;
    padding: 5px 15px;
    transition: 0.3s ease-in-out;
  }

  button:hover{
    background-color: #5aa67b;
    transition: 0.3s ease-in-out;
  }
</style>