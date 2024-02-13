<template>
  <v-container fluid class="third-block">
    <v-container fluid class="third-block-content">
      <h3>Для кого подходит обучение</h3>
      <div class="who-study">
        <div class="who">
          <img src="../assets/who1.jpg" alt="Для новичков и любителей" />
          <p>Для новичков и любителей</p>
        </div>
        <div class="who">
          <img src="../assets/who2.jpg" alt="Для мастеров и самоучек" />
          <p>Для мастеров и самоучек</p>
        </div>
        <div class="who">
          <img src="../assets/who3.jpg" alt="Для владельцев салонов красоты" />
          <p>Для владельцев салонов красоты</p>
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

.third-block {
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
  .third-block-content {
    width: 70%;
    padding: 45px 20px;
    h3 {
      font-family: UKIJSls;
      font-weight: bold;
      font-size: 34px;
      margin-bottom: 25px;
    }
    .who-study {
      display: flex;
      flex-direction: row;
      text-align: center;
      justify-content: space-between;
      .who {
        width: 240px;
        font-size: 22px;
        line-height: 1.3em;
        display: flex;
        flex-direction: column;
        gap: 15px;
        img {
          width: 100%;
          height: 80%;
          border-radius: 100%;
        }
      }
    }
    // (<1200)
    @media screen and (max-width: $xl) {
      width: 85%;
      h3 {
        font-size: 30px;
      }
      .who-study {
        .who {
          width: 230px;
          font-size: 20px;
        }
      }
      // (<992)
      @media screen and (max-width: $lg) {
        width: 90%;
        h3 {
          font-size: 28px;
        }
        .who-study {
          .who {
            width: 200px;
            font-size: 18px;
          }
        }
        // (<750)
        @media screen and (max-width: $md) {
          width: 100%;
          padding-left: 40px;
          padding-right: 40px;
          .who-study {
            .who {
              width: 170px;
            }
          }
          // (<600)
          @media screen and (max-width: $sm) {
            text-align: center;
            padding-left: 60px;
            padding-right: 60px;
            .who-study {
              flex-direction: column;
              align-items: center;
              gap: 35px;
              .who {
                width: 230px;
                font-size: 20px;
              }
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
