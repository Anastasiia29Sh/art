<template>
  <v-container fluid class="first-block">
    <v-container fluid class="first-block-content">
      <h2>Школа косметологии</h2>
      <div class="title">
        <p>ИСКУ</p>
        <p class="title-letter">С</p>
        <p class="title-part-2">СТВО</p>
        <p>КРА</p>
        <p class="title-part-2">ОТЫ</p>
      </div>
      <p class="main-text">
        Добро пожаловать в нашу школу косметологии и массажного дела Искусство
        Красоты, где ты сможешь стать настоящим специалистом в своей области!
      </p>
      <a href="#list-courses" class="btn-choose-course">Выбрать курс</a>
    </v-container>
    <!-- <img src="/src/assets/girl.png" class="logo-girl" alt="" /> -->
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

.first-block {
  position: relative;
  min-height: 600px;
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
  .logo-girl {
    position: absolute;
    top: 7%;
    right: 10%;
  }
  .first-block-content {
    width: 70%;
    height: 100%;
    padding: 2% 20px;
    color: $mainColor1;

    h2 {
      font-weight: normal;
      font-family: UKIJSls;
      font-size: 54px !important;
      opacity: 54%;
      margin-bottom: 2%;
    }
    .title {
      display: grid;
      grid: 80px auto / 1fr auto 1fr;
      width: 50%;
      font-family: UKIJSls;
      font-weight: bold;
      margin-bottom: 4%;
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;

      p {
        font-size: 80px !important;
        align-self: start;
        text-align: right;
        line-height: 0.8 !important;
        z-index: 5;
      }
      .title-letter {
        grid-row: 1 / 3;
        grid-column: 2;
        font-size: 200px !important;
        margin-left: -10px !important;
        z-index: 1;
      }
      .title-part-2 {
        text-align: left;
        margin-left: -4px !important;
      }
    }
    .main-text {
      font-size: 22px;
      width: 72%;
      margin-bottom: 3%;
    }
    .btn-choose-course {
      text-decoration: none;
      background-color: $mainColor1;
      color: $secondaryColor2;
      box-shadow: none;
      border-radius: 22px;
      height: auto;
      padding: 15px 30px !important;
      &:hover {
        color: $mainColor2;
      }
    }
  }

  // (<1200)
  @media screen and (max-width: $xl) {
    min-height: 500px;
    padding-top: 10px;
    .logo-girl {
      width: 20%;
      top: 8%;
      right: 8%;
    }
    .first-block-content {
      width: 85%;
      h2 {
        font-size: 44px !important;
      }
      .title {
        grid: 70px auto / 1fr auto 1fr;
        p {
          font-size: 70px !important;
        }
        .title-letter {
          font-size: 170px !important;
          margin-left: -8px !important;
        }
      }
      .main-text {
        width: 68%;
        font-size: 18px;
      }
      .btn-choose-course {
        font-size: 14px;
        padding: 10px 25px !important;
      }
    }
    // (<992)
    @media screen and (max-width: $lg) {
      padding-top: 30px;
      .logo-girl {
        width: 22%;
        top: 9%;
        right: 7%;
      }
      .first-block-content {
        width: 90%;
        h2 {
          font-size: 40px !important;
        }
        .title {
          grid: 65px auto / 1fr auto 1fr;
          p {
            font-size: 65px !important;
          }
          .title-letter {
            font-size: 165px !important;
          }
        }
        .main-text {
          width: 70%;
          font-size: 16px;
        }
      }
      // (<750)
      @media screen and (max-width: $md) {
        padding-top: 60px;
        .logo-girl {
          top: 10%;
          right: 5%;
        }
        .first-block-content {
          width: 100%;
          padding: 0 40px;
          h2 {
            font-size: 30px !important;
          }
          .title {
            grid: 55px auto / 1fr auto 1fr;
            p {
              font-size: 55px !important;
            }
            .title-letter {
              font-size: 140px !important;
              margin-left: -6px !important;
            }
          }
          .btn-choose-course {
            font-size: 12px;
          }
        }
        // (<600)
        @media screen and (max-width: $sm) {
          .logo-girl {
            display: none;
          }
          .first-block-content {
            text-align: center;
            padding: 0 60px;
            .title {
              width: 100%;
              margin-bottom: 10%;
            }
            .main-text {
              width: 100%;
              font-size: 16px;
              margin-bottom: 5%;
            }
          }
          // (<490)
          @media screen and (max-width: $xs) {
            .first-block-content {
              padding-left: 30px;
              padding-right: 30px;
              h2 {
                font-size: 28px !important;
                margin-bottom: 11%;
                line-height: 1em;
              }
              .title {
                grid: 40px auto / 1fr auto 1fr;
                margin-bottom: 15%;
                p {
                  font-size: 40px !important;
                }
                .title-letter {
                  font-size: 98px !important;
                }
              }
              .main-text {
                font-size: 14px;
                margin-bottom: 8%;
              }
            }
          }
        }
      }
    }
  }
}
</style>
