<template>
  <div class="common_width footer">
    <div class="footer-left">
      <img :src="Logo" alt="logo" />
    </div>
    <div class="footer-right">
      <div class="footer-right-top">
        <div class="footer-right-top-left">
          <span>Projects</span>
          <span>About</span>
          <span>Service</span>
          <span>Contact</span>
        </div>
        <div class="footer-right-top-right">
          <span>www.xdesignsh.com</span>
        </div>
      </div>
      <div class="footer-right-bottom">
        <div class="content">
          <img :src="Edit" alt="edit" />
          <span class="text">沪ICP备2023027147号</span>
        </div>
        <div class="about-us">
          <div class="about-us-item">
            <img :src="linkedin" alt="linkedin" />
          </div>
          <div class="about-us-item">
            <img :src="Photo" alt="photo" />
          </div>
          <div class="about-us-item">
            <img :src="Youtube" alt="youtube" />
          </div>
          <div class="about-us-item">
            <img :src="Mail" alt="mail" />
          </div>
        </div>
        <div class="copyright">
          <span class="text">©X Design</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Logo from "@/assets/images/logo.svg";
import Edit from "@/assets/images/footer/edit.svg";
import linkedin from "@/assets/images/footer/linkedin.svg";
import Photo from "@/assets/images/footer/photo.svg";
import Youtube from "@/assets/images/footer/youtube.svg";
import Mail from "@/assets/images/footer/mail.svg";
</script>

<style scoped lang="less">
.footer {
  width: 1280px;
  display: flex;
  margin: 48px auto;
  .footer-left {
    width: 298px;
    height: 208px;
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
  .footer-right {
    flex: 1;
    border-radius: 0 24px 24px 0;
    border: 2px solid #282828;
    border-left: none;
    .footer-right-top {
      height: 104px;
      border-bottom: 2px solid #282828;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .footer-right-top-left {
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
      .footer-right-top-right {
        flex: 1;
        height: 100%;
        border-left: 2px solid #282828;
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
        }
      }
    }
    .footer-right-bottom {
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .content {
        flex: 1;
        height: 100%;
        display: flex;
        border-right: 2px solid #282828;
        align-items: center;
        justify-content: center;
      }
      .about-us {
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: 2px solid #282828;
        gap: 12px;
        .about-us-item {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;
          background: #282828;
          img {
            width: 18px;
            object-fit: contain;
          }
        }
      }
      .copyright {
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .text {
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
      }
    }
  }
}
</style>
