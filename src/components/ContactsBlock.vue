<template>
  <v-container fluid class="contacts-block">
    <v-container fluid class="contacts-block-content">
      <div class="col-1">
        <h3>Где нас найти</h3>
        <div>
          <p class="tel">+7 (982) 763-03-03</p>
          <p class="address">
            г. Алапаевск <br />
            ул. Северовосточная, д. 1Б
          </p>
        </div>
      </div>
      <div class="col-2">
        <img src="/src/assets/girl.png" class="logo-girl" alt="" />
      </div>
      <div class="col-3">
        <p class="email">isckusstvo.krasoty@yandex.ru</p>
        <div class="social">
          <a class="vk" href="https://vk.com/the_beauty_art" target="_blank" />
          <a target="_blank" class="telegram" style="display: none" />
          <a target="_blank" class="whatsapp" style="display: none" />
        </div>
      </div>
    </v-container>
  </v-container>
</template>

<style lang="scss" scoped>
$xs: 490px;
$sm: 600px;
$md: 750px;
$lg: 992px;
$xl: 1200px;

$mainColor1: #000;
$mainColor2: #deb35e;
$secondaryColor1: #feefbc;
$secondaryColor2: #fff;

@font-face {
  font-family: UKIJSls;
  src: url("/src/assets/fonts/UKIJSls.ttf");
}

.contacts-block {
  margin: 0;
  padding: 0;
  background: $mainColor2;
  background: linear-gradient(
    90deg,
    rgba($mainColor2, 1) 0%,
    rgba($secondaryColor1, 1) 38%,
    rgba($secondaryColor1, 1) 60%,
    rgba($mainColor2, 1) 100%
  );
  .contacts-block-content {
    width: 70%;
    padding: 45px 20px 20px 20px;
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    h3 {
      font-family: UKIJSls;
      font-weight: bold;
      font-size: 34px;
      margin-bottom: 25px;
    }
    .col-1 {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .col-3 {
      display: flex;
      flex-direction: column;
      justify-content: end;
    }
    .logo-girl {
      width: 70%;
    }

    p {
      position: relative;
      font-size: 22px;
      padding-left: 45px;
      margin-bottom: 10%;
    }

    .tel::before {
      content: "";
      position: absolute;
      width: 46px;
      height: 46px;
      left: -5px;
      top: -5px;
      background: url("/src/assets/icons/tel.png") no-repeat;
      background-size: cover;
    }
    .address::before {
      content: "";
      position: absolute;
      width: 50px;
      height: 50px;
      left: -10px;
      top: 10px;
      background: url("/src/assets/icons/address.png") no-repeat;
      background-size: cover;
    }
    .email {
      padding-left: 55px;
      &::before {
        content: "";
        position: absolute;
        width: 48px;
        height: 48px;
        left: 0px;
        top: -6px;
        background: url("/src/assets/icons/email.png") no-repeat;
        background-size: cover;
      }
    }
    .social {
      margin-bottom: 10%;
      display: flex;
      flex-direction: row;
      gap: 15px;
      a {
        width: 60px;
        height: 60px;
        &:hover {
          opacity: 0.5;
        }
      }
      .vk::before {
        content: "";
        position: absolute;
        width: 60px;
        height: 60px;
        background: url("/src/assets/icons/vk.svg") no-repeat;
        background-size: cover;
      }
      .telegram::before {
        content: "";
        position: absolute;
        width: 60px;
        height: 60px;
        background: url("/src/assets/icons/telegram.svg") no-repeat;
        background-size: cover;
      }
      .whatsapp::before {
        content: "";
        position: absolute;
        width: 60px;
        height: 60px;
        background: url("/src/assets/icons/whatsapp.svg") no-repeat;
        background-size: cover;
      }
    }

    // (<1200)
    @media screen and (max-width: $xl) {
      width: 85%;
      h3 {
        font-size: 30px;
      }
      p {
        font-size: 20px;
      }
      // (<992)
      @media screen and (max-width: $lg) {
        width: 90%;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        h3 {
          font-size: 28px;
        }
        .col-2 {
          display: none;
        }
        p {
          font-size: 18px;
          padding-left: 40px;
          margin-bottom: 5%;
        }
        .tel::before {
          width: 36px;
          height: 36px;
        }
        .address::before {
          width: 40px;
          height: 40px;
          left: -8px;
          top: 8px;
        }
        .email {
          padding-left: 45px;
          &::before {
            width: 38px;
            height: 38px;
            left: -3px;
          }
        }
        .social {
          margin-bottom: 5%;
          a {
            width: 45px;
            height: 45px;
          }
          .vk::before {
            width: 45px;
            height: 45px;
          }
          .telegram::before {
            width: 45px;
            height: 45px;
          }
          .whatsapp::before {
            width: 45px;
            height: 45px;
          }
        }
        // (<750)
        @media screen and (max-width: $md) {
          width: 100%;
          padding-left: 40px;
          padding-right: 40px;
          gap: 10px;
          // (<600)
          @media screen and (max-width: $sm) {
            padding-left: 60px;
            padding-right: 60px;
            grid-template-columns: 1fr;
            gap: 0;
            h3 {
              text-align: center;
            }
            // (<490)
            @media screen and (max-width: $xs) {
              padding-left: 30px;
              padding-right: 30px;
              h3 {
                font-size: 26px;
                line-height: 1.2em;
              }
            }
          }
        }
      }
    }
  }
}
</style>
