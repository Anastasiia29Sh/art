<template>
  <v-container fluid class="fourth-block">
    <v-container fluid class="fourth-block-content">
      <h3>Все программы обучения</h3>
      <div class="list-courses">
        <div v-for="el in showListCourses" :key="el.id">
          <div
            class="course"
            @click="$emit('goCourse', el.id)"
            @click.native="scrollToTop"
          >
            <div class="course">
              <div class="course-info">
                <img :src="el.image" alt="" />
                <h4 class="course-title">{{ el.name }}</h4>
                <p class="course-time">{{ el.time }}</p>
                <p v-if="el.price" class="course-price">{{ el.price }} ₽</p>
              </div>
              <a @click="$emit('goCourse', el.id)">ПОДРОБНЕЕ</a>
            </div>
          </div>
        </div>
      </div>
      <button type="button" @click="moreShow()" class="show-more">
        {{ text }}
      </button>
    </v-container>
  </v-container>
</template>

<script setup>
import json from "../../courses.json";
import { ref } from "vue";

const text = ref("Показать ещё");

const countCourses = ref(9);
const endCours = ref();
let windowSize = document.documentElement.clientWidth;
getCountCourses();

const listCourses = json.data;

const showListCourses = ref([]);

masFilling();

function moreShow() {
  if (text.value === "Свернуть список") {
    endCours.value = countCourses.value;
    text.value = "Показать ещё";
  } else endCours.value += countCourses.value;
  if (endCours.value >= listCourses.length) text.value = "Свернуть список";
  masFilling();
}

function getCountCourses() {
  text.value = "Показать ещё";
  if (windowSize > 1200) countCourses.value = 9;
  else if (windowSize > 750 && windowSize <= 1200) countCourses.value = 6;
  else if (windowSize > 600 && windowSize <= 750) countCourses.value = 4;
  else countCourses.value = 3;
  endCours.value = countCourses.value;
}

function masFilling() {
  showListCourses.value = [];
  for (let i = 0; i < endCours.value; i++) {
    if (i < listCourses.length) {
      showListCourses.value.push(listCourses[i]);
    }
  }
}

window.addEventListener("resize", function (event) {
  windowSize = document.documentElement.clientWidth;
  getCountCourses();
  masFilling();
});

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
$dopColor: #dfb561;

@font-face {
  font-family: UKIJSls;
  src: url("/src/assets/fonts/UKIJSls.ttf");
}

.fourth-block {
  margin: 0;
  padding: 0;
  margin-top: 10px;
  .fourth-block-content {
    width: 70%;
    padding: 50px 20px;
    h3 {
      font-family: UKIJSls;
      font-weight: bold;
      font-size: 34px;
      margin-bottom: 25px;
    }
    .list-courses {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 40px;
      .course {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border: 1px solid $dopColor;
        box-shadow: none;
        min-height: 450px;
        text-decoration: none;
        color: #000;
        cursor: pointer;
        h4 {
          padding: 10px;
          font-family: UKIJSls;
          font-size: 18px;
          line-height: 1.2em;
        }
        p {
          padding: 0 10px;
        }
        .course-time {
          color: #747272;
          margin-bottom: 10px;
        }
        .course-price {
          font-size: 18px;
        }
        img {
          object-fit: cover;
          width: 100%;
          height: 250px;
        }
        &:hover {
          -webkit-box-shadow: 0px 0px 40px 0px rgba(230, 181, 83, 0.2);
          -moz-box-shadow: 0px 0px 40px 0px rgba(230, 181, 83, 0.2);
          box-shadow: 0px 0px 40px 0px rgba(230, 181, 83, 0.2);
        }
        a {
          padding: 0 10px 10px 10px;
          align-items: end;
          color: #343434;
          cursor: pointer;
          &:hover {
            color: $dopColor;
          }
        }
      }
    }
    .show-more {
      font-size: 20px;
      color: $dopColor;
      box-shadow: none;
      border-radius: 22px;
      height: auto;
      padding: 10px 30px;
      border: 1px solid $dopColor;
      width: 100%;
      margin-top: 40px;
      &:hover {
        background-color: $dopColor;
        color: $secondaryColor2;
      }
    }

    // (<1200)
    @media screen and (max-width: $xl) {
      // background-color: red;
      width: 85%;
      h3 {
        font-size: 30px;
      }
      .list-courses {
        gap: 30px;
      }
      // (<992)
      @media screen and (max-width: $lg) {
        // background-color: #deb35e;
        width: 90%;
        h3 {
          font-size: 28px;
        }
        .list-courses {
          gap: 50px;
          grid-template-columns: repeat(2, 1fr);
        }
        .show-more {
          font-size: 18px;
        }
        // (<750)
        @media screen and (max-width: $md) {
          // background-color: cadetblue;
          width: 100%;
          padding-left: 40px;
          padding-right: 40px;
          // (<600)
          @media screen and (max-width: $sm) {
            // background-color: rgb(141, 95, 160);
            text-align: center;
            padding-left: 60px;
            padding-right: 60px;
            .list-courses {
              grid-template-columns: repeat(1, 1fr);
              text-align: left;
            }
            // (<490)
            @media screen and (max-width: $xs) {
              // background-color: rgb(126, 160, 95);
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
