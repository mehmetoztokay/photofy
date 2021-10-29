<template>
  <div class="home-banner">
    <InputBar />
  </div>
</template>

<script>
import InputBar from "@/components/Home/InputBar";
export default {
  components: {
    InputBar,
  },
};
</script>

<style scoped>
.home-banner {
  width: 100%;
  min-height: 60vh;
  background-image: url("https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 0;
}
</style>