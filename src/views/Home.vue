<template>
  <div class="common_width home">
    <div class="home-title">XPlore Your Imagination with X Design Studio</div>
    <div class="banner">
      <div class="mask">
        <div class="mask-item" v-for="item in 10" :key="item"></div>
      </div>
    </div>
    <div class="partner">
      <div class="partner-left">
        Our passion for creativity knows no bounds, and we're dedicated to
        bringing fresh, innovative ideas to life. <br />
        <br />
        At X Design, we believe in the power of transformative design to elevate
        brands and shape unforgettable experiences.
      </div>
      <div class="partner-right">
        <div class="partner-right-item" v-for="item in partnerList" :key="item">
          <img :src="getStaticResource(item)" alt="partner" />
        </div>
      </div>
    </div>
    <!-- Our Services -->
    <div class="our-services common_padding">
      <div class="module_title">
        <img :src="getStaticResource('home/Vector.svg')" alt="module_title" />
        Our Services
      </div>
      <div class="our-services-content">
        <div
          class="our-services-content-item"
          v-for="item in ourServicesList"
          :key="item"
        >
          <img
            :src="getStaticResource(item.image)"
            alt="our-services"
            class="our-services-content-item-image"
          />
          <div class="our-services-content-item-title">{{ item.title }}</div>
          <img
            :src="getStaticResource('home/add.png')"
            alt="add"
            class="our-services-content-item-add"
          />
        </div>
      </div>
    </div>
    <!--Recent Work -->
    <div class="recent-work common_padding">
      <div class="module_title">
        <img :src="getStaticResource('home/Vector.svg')" alt="module_title" />
        Recent Work
      </div>
      <div class="recent-work-content">
        <div
          class="recent-work-content-item"
          v-for="item in recentWorkList"
          :key="item"
        >
          <img
            :src="getStaticResource(item.image)"
            alt="recent-work"
            class="recent-work-content-item-image"
          />
          <div class="recent-work-content-item-title">{{ item.title }}</div>
        </div>
      </div>
      <div class="recent-work-content-item-more">
        View all Work
        <img
          :src="getStaticResource('home/arrow-up-right.png')"
          alt="arrow-up-right"
        />
      </div>
    </div>
    <!-- Our Service -->
    <div class="our-service common_padding">
      <div class="module_title">
        <img :src="getStaticResource('home/Vector.svg')" alt="module_title" />
        Our Service
      </div>
      <div class="our-service-content">
        XDesign offers comprehensive creative solutions, specializing in brand
        identity, visual communication, and strategic design excellence.
      </div>
      <div class="pentagon">
        <div
          v-for="(item, index) in pentagonList"
          class="pentagon-item"
          :class="`pentagon-item-${index + 1}`"
          :key="item.title"
        >
          <span>{{ item }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getStaticResource } from "@/unit";

const partnerList = [
  "home/bosch.png",
  "home/abbott.png",
  "home/loreal.png",
  "home/drager.png",
  "home/m&g.png",
  "home/hitachi.png",
];
const ourServicesList = [
  {
    title: "Branding Design",
    image: "home/Branding Design.png",
  },
  {
    title: "Visual Design",
    image: "home/Visual Design.png",
  },
  {
    title: "Video Design",
    image: "home/Video Design.png",
  },
  {
    title: "Space Design",
    image: "home/Space Design.png",
  },
  {
    title: "Social Media Development",
    image: "home/Social Media Development.png",
  },
];

const serviceCircles = [
  { title: "Branding Design" },
  { title: "Video Design" },
  { title: "Visual Design" },
  { title: "Space Design" },
  { title: "Packaging Design" },
];
const recentWorkList = [
  {
    title: "Branding Design",
    image: "home/randing Design.png",
  },
  {
    title: "Bosch Office Renovation",
    image: "home/Bosch Office Renovation.png",
  },
  {
    title: "Drager Product Video",
    image: "home/Drager Product Video.png",
  },
  {
    title: "IP Design for INNOVATION",
    image: "home/IP Design for INNOVATION.png",
  },
];

const pentagonList = [
  "Branding Design",
  "Visual Design",
  "Packaging Design",
  "Space Design",
  "Vidoe Design",
];
</script>

<style lang="less" scoped>
.home-title {
  padding: 0 128px;
  font-size: 80px;
  font-weight: 600;
  color: #fff;
  text-align: center;
  line-height: 1.1;
  margin-bottom: 72px;
  margin-top: 16px;
}
.banner {
  width: 100%;
  height: 610px;
  background: url("@/assets/images/home/banner.png") no-repeat center center;
  background-size: cover;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  margin-bottom: 40px;
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .mask-item {
      width: 110px;
      height: 100%;
      border-radius: 55px;
      background: rgba(0, 0, 0, 0.5);
      border: 2px solid #8d4cfe;
    }
  }
}
.partner {
  width: 100%;
  margin: 120px 0;
  display: flex;
  justify-content: space-between;
  .partner-left {
    width: 783px;
    height: 300px;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 36px;
    font-weight: 600;
    line-height: 1.2;
  }
  .partner-right {
    width: 432px;
    height: 300px;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;

    .partner-right-item {
      width: 216px;
      height: 40px;
      margin: 8px 0;
      text-align: right;
    }
  }
}
.module_title {
  height: 86px;
  padding: 24px 0;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 22px;
  font-weight: 600;
  color: #fff;
  img {
    height: 22px;
  }
}
.common_padding {
  padding-bottom: 80px;
}

.our-services-content-item {
  display: flex;
  align-items: center;
  height: 104px;
  border-bottom: 1px solid #282828;
  cursor: pointer;

  .our-services-content-item-image {
    width: 150px;
    margin-right: 32px;
  }
  .our-services-content-item-add {
    width: 24px;
    height: 24px;
    margin-left: auto;
  }
  .our-services-content-item-title {
    font-size: 28px;
    font-weight: 600;
    color: #fff;
  }
}
.recent-work-content {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  .recent-work-content-item {
    width: 626px;
    height: 627px;
    border-radius: 24px;
    border: 2px solid #282828;
    .recent-work-content-item-image {
      width: 624px;
      height: 513px;
      object-fit: cover;
      border-radius: 24px 24px 0 0;
      display: block;
    }
    .recent-work-content-item-title {
      padding: 40px;
      height: 114px;
      font-size: 28px;
      font-weight: 600;
      line-height: 34px;
      color: #fff;
    }
  }
}
.recent-work-content-item-more {
  height: 62px;
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  border: 1px solid #282828;
  border-radius: 32px;
  img {
    width: 24px;
    height: 24px;
    margin-left: 12px;
  }
}
.our-service-content {
  padding-top: 46px;
  width: 410px;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  color: #fff;
}

.pentagon {
  width: 772px;
  height: 754px;
  margin: 0 auto;
  margin-top: 32px;
  position: relative;
  .pentagon-item {
    position: absolute;
    width: 330px;
    height: 330px;
    background: #000;
    border-radius: 50%;
    border: 1px solid #282828;
    text-align: center;
    line-height: 330px;
    font-size: 32px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    display: none;
  }
  .pentagon-item-1 {
    top: 0;
    left: 220px;
    display: block;
  }
  .pentagon-item-2 {
    top: 167px;
    right: 0;
    display: block;
  }
  .pentagon-item-3 {
    bottom: 0;
    right: 100px;
    display: block;
  }
  .pentagon-item-4 {
    bottom: 0;
    left: 76px;
    display: block;
  }
  .pentagon-item-5 {
    top: 167px;
    left: 0px;
    display: block;
  }
}
</style>
