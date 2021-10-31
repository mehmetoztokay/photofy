<template>
  <div class="input-area">
    <div class="input">
      <input
        v-model="searchData"
        @keydown.enter="getSearchData"
        type="text"
        placeholder="Kodu yazın, enter'a basın. Ardından filtrele butonuna tıklayın."
      />
      <span class="search" @click="getSearchData"></span>
    </div>
    <!-- <div class="sugges">
      <span>öneriler: </span>
      <span>moon</span>
      <span>moon</span>
      <span>moon</span>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchData: null,
    };
  },
  methods: {
    getSearchData() {
      this.$emit("searchData", this.searchData);
    },
  },
};
</script>

<style scoped>
.input-area .input {
  position: relative;
  width: 550px;
}
.input-area .input input {
  background-color: #fff;
  border: none;
  box-shadow: none;
  outline: none;
  padding: 10px 20px;
  border-radius: 5px;
  min-height: 40px;
  font-size: 16px;
  line-height: 1;
  width: 100%;
  color: #545658;
}
.input-area .input .search {
  background-image: url("~@/assets/icon-search.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 22px;
  height: 22px;
  display: block;
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
}

.input-area .sugges {
  margin-left: 20px;
  margin-top: 7px;
  color: #fff;
}

.input-area .sugges span {
  padding: 5px;
  cursor: pointer;
}

.input-area .sugges span:first-child {
  font-weight: 500;
  padding: 0 5px 5px 0;
  cursor: default;
}

.input-area .sugges span:hover:not(.input-area .sugges span:first-child) {
  text-decoration: underline;
}

@media screen and (max-width: 640px) {
  .input-area .input {
    width: 300px;
  }
}
</style>
