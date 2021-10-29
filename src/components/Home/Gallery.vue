<template>
  <div class="container">
    <div class="gallery">
      <div v-for="i in 20" :key="i" class="item">
        <img src="@/assets/home-banner.jpg" alt="photofy" />
        <div class="footer">
          <div class="author-info">
            <span>Mehmet Öztokay</span>
            <span>nature, moon</span>
          </div>
          <div class="action">
            <span class="download"
              ><img src="@/assets/icon-download.svg" alt=""
            /></span>
            <span class="like"
              ><img src="@/assets/icon-like.svg" alt=""
            /></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.gallery {
  width: 100%;
  overflow: hidden;
  margin-top: 4rem;
  columns: 3;
  column-gap: 20px;
}

.gallery .item {
  height: auto;
  margin-bottom: 1.5rem;
  break-inside: avoid;
  position: relative;
}

.gallery .item img {
  width: 100%;
  height: auto;
  object-fit: cover;
  min-height: 20rem;
  display: block;
}

.gallery .item:hover .footer {
  visibility: visible;
  opacity: 1;
}

.gallery .item .footer {
  background: rgb(0, 0, 0);
  background: linear-gradient(0deg, rgb(0 0 0) 0%, rgb(0 0 0 / 0%) 100%);
  position: absolute;
  bottom: 0;
  width: 100%;
  min-height: 70px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  transition: opacity 0.5s linear;
  visibility: hidden;
  opacity: 0;
  align-items: center;
}

.gallery .item .footer .author-info {
  display: flex;
  flex-direction: column;
  color: #fff;
}

.gallery .item .footer .author-info span:first-child {
  font-weight: 500;
  font-size: 16px;
}
.gallery .item .footer .author-info span:nth-child(2) {
  font-weight: 200;
  font-size: 14px;
}

.gallery .item .footer .action {
  display: flex;
  align-items: center;
}

.gallery .item .footer .action .download,
.gallery .item .footer .action .like {
  padding: 5px;
  display: block;
  margin-left: 13px;
}

.gallery .item .footer .action .download img,
.gallery .item .footer .action .like img {
  min-height: unset;
  height: 20px;
  width: auto;
}

@media screen and (max-width: 1280px) {
    .gallery{
        columns: 2;
        column-gap: 10px;
    }

    .gallery .item{
        margin-bottom: 10px;
    }
}
</style>
