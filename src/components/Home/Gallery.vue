<template>
  <div class="container">
    <div class="gallery">
      <div v-for="item in photos" :key="item.id" class="item">
        <img :src="item.url" alt="photofy" />
        <div class="footer">
          <div class="author-info">
            <span>#{{ item.code }}-Resim</span>
            <span>{{ item.author }} | {{ item.category }}</span>
          </div>
          <div class="action">
            <a download :href="item.url"  target="_blank" class="download"
              ><img src="@/assets/icon-download.svg" alt=""
            /></a>
            <span @click="likeAction(item)" class="like">
              <img v-if="item.liked" src="@/assets/icon-like.svg" alt="" />
              <img v-else src="@/assets/icon-liked.svg" alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photos: [
        {
          id: 1,
          author: "Mehmet Oztokay",
          code: 1234,
          url: "https://images.pexels.com/photos/9880104/pexels-photo-9880104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          category: "moon",
          liked: true,
        },
        {
          id: 2,
          author: "Mehmet Oztokay",
          code: 1214,
          url: "https://images.pexels.com/photos/9880104/pexels-photo-9880104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          category: "sun",
          liked: false,
        },
        {
          id: 3,
          author: "Mehmet Oztokay",
          code: 1784,
          url: "https://images.pexels.com/photos/9880104/pexels-photo-9880104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          category: "phone",
          liked: false,
        },
        {
          id: 4,
          author: "Mehmet Oztokay",
          code: 7856,
          url: "https://images.pexels.com/photos/9880104/pexels-photo-9880104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          category: "book",
          liked: true,
        },
        {
          id: 5,
          author: "Mehmet Oztokay",
          code: 8654,
          url: "https://images.pexels.com/photos/9880104/pexels-photo-9880104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          category: "auth",
          liked: false,
        },
        {
          id: 6,
          author: "Mehmet Oztokay",
          code: 2365,
          url: "https://images.pexels.com/photos/9880104/pexels-photo-9880104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          category: "sound",
          liked: true,
        },
      ],
    };
  },
  methods: {
    likeAction(item) {
      if (item.liked) {
        item.liked = false;
      } else {
        item.liked = true;
      }
    },
    downImg(item){
        console.log(`object`, item)
    }
  },
};
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

.gallery .item .footer .author-info .download {
  font-weight: 500;
  font-size: 16px;
}
.gallery .item .footer .author-info .like{
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
  cursor: pointer;
}

.gallery .item .footer .action .download img,
.gallery .item .footer .action .like img {
  min-height: unset;
  height: 20px;
  width: auto;
}

@media screen and (max-width: 1280px) {
  .gallery {
    columns: 2;
    column-gap: 10px;
  }

  .gallery .item {
    margin-bottom: 10px;
  }
}

@media screen and (max-width: 640px) {
  .gallery {
    columns: 1;
    column-gap: 10px;
  }
}
</style>
