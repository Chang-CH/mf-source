<template>
  <div>
    <h1>Button app</h1>
    <VueButton />
  </div>
</template>

<script>
import { ref, defineAsyncComponent } from "vue";
export default {
  components: {
    VueButton: defineAsyncComponent(() => import("./components/VueButton")),
  },
  setup() {
    const count = ref(0);
    const inc = () => {
      count.value++;
    };

    return {
      count,
      inc,
    };
  },
};
</script>

<style scoped>
img {
  width: 200px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>