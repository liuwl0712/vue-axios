<template>
  <div class="hello">
    HelloWorld
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  mounted() {
    this.$axios.findAllPost("all").then((res) => {
      console.log(res);
    });
  },
};
</script>
