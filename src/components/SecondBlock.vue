<template>
  <v-container fluid class="second-block">
    <v-container fluid class="second-block-content">
      <h3>О нас</h3>
      <p>
        В нашей школе ты сможешь получить все необходимые знания и практические
        навыки в области косметологии и массажа. Наша команда опытных
        преподавателей и профессионалов поможет тебе раскрыть свой творческий
        потенциал и освоить разнообразные методы и техники для работы в этой
        индустрии. Мы предлагаем уютную и современно оборудованную учебную
        среду, где ты сможешь получить высококачественное образование и достичь
        своих профессиональных целей.
      </p>
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

.second-block {
  margin: 0;
  padding: 0;
  .second-block-content {
    width: 70%;
    padding: 50px 20px;
    h3 {
      font-family: UKIJSls;
      font-weight: bold;
      font-size: 34px;
      margin-bottom: 7px;
    }
    p {
      font-size: 22px;
    }
  }
  // (<1200)
  @media screen and (max-width: $xl) {
    .second-block-content {
      width: 85%;
      h3 {
        font-size: 30px;
      }
      p {
        font-size: 18px;
      }
    }
    // (<992)
    @media screen and (max-width: $lg) {
      .second-block-content {
        width: 90%;
        h3 {
          font-size: 28px;
        }
        p {
          font-size: 16px;
        }
      }
      // (<750)
      @media screen and (max-width: $md) {
        .second-block-content {
          width: 100%;
          padding-left: 40px;
          padding-right: 40px;
        }
        // (<600)
        @media screen and (max-width: $sm) {
          .second-block-content {
            text-align: center;
            padding-left: 60px;
            padding-right: 60px;
          }
          // (<490)
          @media screen and (max-width: $xs) {
            .second-block-content {
              padding-left: 30px;
              padding-right: 30px;
              h3 {
                font-size: 26px;
              }
              p {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
