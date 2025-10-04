<template>
  <div class="common_width header">
    <div class="header-left">
      <img :src="Logo" alt="logo" />
    </div>
    <div class="header-right">
      <div class="header-right-top">
        <div class="header-right-top-left">
          <span>Projects</span>
          <span>About</span>
          <span>Service</span>
          <span>Contact</span>
        </div>
        <div class="menu-icon">
          <img :src="MenuIcon" alt="menu" />
        </div>
      </div>
      <div class="header-right-bottom">
        <div class="header-right-bottom-left">
          <div class="x-design">©X Design</div>
        </div>
        <div class="header-right-bottom-right">
          <div class="touch">
            <img :src="Touch" alt="touch" />
            <span>Get in Touch</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Logo from "@/assets/images/logo.svg";
import MenuIcon from "@/assets/images/header/menu_icon.svg";
import Touch from "@/assets/images/header/touch.svg";
</script>

<style scoped lang="less">
.header {
  display: flex;
  margin: 48px auto;
  .header-left {
    width: 192px;
    height: 112px;
    border-radius: 24px 0 0 24px;
    border: 2px solid #282828;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 34px;
      height: 44px;
      object-fit: contain;
    }
  }
  .header-right {
    flex: 1;
    border-radius: 0 24px 24px 0;
    border: 2px solid #282828;
    border-left: none;
    .header-right-top {
      height: 56px;
      border-bottom: 2px solid #282828;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .header-right-top-left {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 34px;
        span {
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
        }
      }
      .menu-icon {
        width: 232px;
        height: 100%;
        border-left: 2px solid #282828;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 72px;
          height: 15px;
        }
      }
    }
    .header-right-bottom {
      height: 52px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .header-right-bottom-left {
        flex: 1;
        height: 100%;
        display: flex;
        border-right: 2px solid #282828;
        align-items: center;
        justify-content: center;
        .x-design {
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
        }
      }
      .header-right-bottom-right {
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .touch {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
        }
        span {
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
        }
        img {
          width: 18px;
          height: 18px;
        }
      }
    }
  }
}
</style>
