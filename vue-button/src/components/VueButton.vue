<script>
export default {
  name: 'VueButton',
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <button @click="count++" id="vue-button">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" id="icon" />
    Vue clicked me {{ count }} times.
  </button>
</template>

<style>
#vue-button {
  font-family: 'Courier New', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #444;
  color: #fff;
  border: none;
  box-shadow: 5px 5px #000;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 60px;
  font-weight: bold;
}

#vue-button:hover {
  background-color: teal;
}

#icon {
  width: 20px;
  height: 20px;
  margin: 5px;
  margin-right: 10px;
}
</style>