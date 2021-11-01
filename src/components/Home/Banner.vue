<template>
  <div class="home-banner">
    <InputBar @searchData="searchData($event)" />
  </div>
</template>

<script>
import InputBar from "@/components/Home/InputBar";
export default {
  components: {
    InputBar,
  },
  methods: {
    searchData($event) {
      this.$emit("searchData", $event);
    },
  },
};
</script>

<style scoped>
.home-banner {
  width: 100%;
  min-height: 60vh;
  /* background-image: url("https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"); */
  background-image: url("~@/assets/home-banner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 0;
  position: relative;
}
/* .home-banner::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: -1;
} */
</style>
