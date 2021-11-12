<template>
  <div class="register">
    <RegisterSec />
  </div>
</template>

<script>
import RegisterSec from "@/components/Register/RegisterSec";
export default {
  components: {
    RegisterSec,
  },
};
</script>

<style scoped>
.register {
  min-width: 100%;
  min-height: 100vh;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("https://images.unsplash.com/photo-1573126617899-41f1dffb196c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  display: flex;
  align-items: center;
  padding: 10vh 0;
}

@media screen and (max-width: 640px) {
  .register {
    justify-content: center;
    padding: 5vh 0 10vh 0;
  }
}
</style>