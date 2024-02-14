<template>
  <v-container fluid class="fon-footer">
    <v-container fluid class="fon-content">
      <v-row justify="space-between" align="center">
        <v-col cols="auto">
          <router-link class="logo" @click.native="scrollToTop" to="/">
            <div class="logo">
              <img src="@/assets/logo-art.png" alt="logo-art" />
            </div>
          </router-link>
        </v-col>

        <v-col cols="auto" class="contacts">
          <p>г. Алапаевск</p>
          <p>+7 (982) 763-03-03</p>
        </v-col>
      </v-row>

      <hr class="line" />
      <p class="protection">© {{ year }} Все права защищены</p>
    </v-container>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const startYear = ref(2024);
const endYear = ref(new Date().getFullYear());
const year = ref("");

if (startYear.value === endYear.value) year.value = startYear.value;
else year.value = startYear.value + " - " + endYear.value;

function scrollToTop() {
  window.scrollTo(0, 0);
}
</script>

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

.fon-footer {
  margin: 0;
  padding: 0;
  background-color: $mainColor1;
  color: $secondaryColor2;
  .fon-content {
    width: 70%;
    padding: 45px 20px 30px 20px;
    .logo {
      max-width: 200px;
      text-align: center;
      img {
        width: 100%;
      }
    }
    .contacts {
      text-align: end;
      font-family: UKIJSls;
      font-size: 22px;
    }
    .line {
      margin-top: 10px;
      opacity: 59%;
      border-color: $secondaryColor1;
    }
    .protection {
      margin-top: 10px;
      text-align: center;
    }
    // (<1200)
    @media screen and (max-width: $xl) {
      width: 85%;
      // (<992)
      @media screen and (max-width: $lg) {
        width: 90%;
        // (<750)
        @media screen and (max-width: $md) {
          width: 100%;
          padding-left: 40px;
          padding-right: 40px;
          .logo {
            max-width: 165px;
          }
          .contacts {
            font-size: 20px;
          }
          // (<600)
          @media screen and (max-width: $sm) {
            text-align: center;
            padding-left: 60px;
            padding-right: 60px;
            .contacts {
              font-size: 18px;
            }
            // (<490)
            @media screen and (max-width: $xs) {
              padding-left: 30px;
              padding-right: 30px;
              .logo {
                width: 155px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
