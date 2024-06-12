<template>
  <v-container fluid class="card-course">
    <img class="img-course" :src="imgCourse" :alt="course.name" />
    <v-container fluid class="card-course-content">
      <h2>{{ course.name }}</h2>
      <p>{{ course.price }} ₽</p>
    </v-container>
  </v-container>

  <v-container fluid class="card-course-2">
    <v-container fluid class="card-course-content-2">
      <div>
        <img src="/src/assets/icons/med.png" alt="" />
        <span>Медицинское образование</span>
        <p>{{ medEducation }}</p>
      </div>
      <div>
        <img src="/src/assets/icons/time.png" alt="" />
        <span>Длительность курса</span>
        <p>{{ course.time }}</p>
      </div>
      <div class="certificate">
        <img src="/src/assets/icons/certificate.png" alt="" />
        <span>По окончанию</span>
        <p>Именной сертификат</p>
      </div>
    </v-container>
  </v-container>

  <v-container fluid class="card-course-3">
    <v-container fluid class="card-course-content-3">
      <p v-for="(description, i) in course.description" :key="i">
        <br v-if="description === ''" />
        {{ description }}
      </p>
      <div class="knowledge">
        <h3>На курсе Вы:</h3>
        <ul>
          <li v-for="(knowledge, i) in course.knowledge" :key="i">
            {{ knowledge }}
          </li>
        </ul>
      </div>
      <div v-if="course.program" class="knowledge">
        <h3>Программа курса:</h3>
        <div class="files">
          <v-icon icon="mdi-file" />
          <a :href="programFile" download> Скачать файл </a>
        </div>
      </div>
      <p class="end-course">
        По окончании курсов Вы получите именной сертификат Школы косметологии и
        массажного дела Искусство Красоты!!!
      </p>
    </v-container>
  </v-container>
</template>

<script setup>
import json from "../../courses.json";
import { ref, computed } from "vue";

const props = defineProps(["idCourse"]);

const idCourse = props.idCourse;

console.log(idCourse);

const listCourses = json.data;
const course = listCourses.filter((f) => f.id === idCourse)[0];

let windowSize = document.documentElement.clientWidth;

const medEducation = course.medEducation ? "Обязательно" : "Не обязательно";
const imgCourse = ref("");
getImageCourse();

const programFile = computed(() => `/files/${course.program}`);

function getImageCourse() {
  if (windowSize <= 600) imgCourse.value = course.image;
  else imgCourse.value = course.dopImage;
}

window.addEventListener("resize", function (event) {
  windowSize = document.documentElement.clientWidth;
  getImageCourse();
});
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

.card-course {
  position: relative;
  min-height: 600px;
  margin: 0;
  padding: 0;
  background-color: #000000;
  .img-course {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 600px;
    opacity: 0.3;
  }
  .card-course-content {
    width: 70%;
    min-height: 490px;
    padding: 2% 20px 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    text-align: center;
    font-family: UKIJSls;
    h2 {
      color: $secondaryColor2;
      font-weight: normal;
      font-size: 50px !important;
      line-height: 1.3;
    }
    p {
      color: $secondaryColor1;
      margin-top: 3%;
      font-size: 40px !important;
    }
  }
}

.card-course-2 {
  margin: 0;
  padding: 0;
  .card-course-content-2 {
    width: 70%;
    padding: 45px 20px;
    display: flex;
    flex-direction: row;
    gap: 10%;
    justify-content: space-between;
    span {
      display: block;
      opacity: 0.7;
      font-size: 18px;
      margin-top: -5px;
    }
    p {
      font-size: 22px;
      margin-top: 5px;
      font-weight: 500;
    }
    img {
      max-width: 50px;
      opacity: 0.7;
    }
  }
}

.card-course-3 {
  margin: 0;
  padding: 0;
  .card-course-content-3 {
    width: 70%;
    padding: 25px 20px 45px 20px;
    p {
      font-size: 20px;
      text-align: justify;
    }
    .knowledge {
      margin-top: 45px;
      margin-bottom: 45px;
      font-size: 20px;
      h3 {
        font-size: 26px;
        font-family: UKIJSls;
        margin-bottom: 10px;
      }
      ul {
        list-style: none;
      }
      li {
        padding-left: 35px;
        padding-top: 15px;
      }
      li::before {
        content: "";
        position: absolute;
        width: 30px;
        height: 30px;
        left: 16%;
        background: url("/src/assets/icons/check-mark.svg") no-repeat;
        background-size: cover;
      }
    }
    .files {
      display: flex;
      gap: 10px;
      color: $mainColor2;
      cursor: pointer;
      a {
        color: $mainColor1;
        &:hover {
          color: $mainColor2;
        }
      }
    }
    .end-course {
      margin-bottom: 15px;
      text-align: center;
      font-weight: 500;
      color: $mainColor2;
    }
  }
}

// (<1200)
@media screen and (max-width: $xl) {
  .card-course {
    min-height: 500px;
    .img-course {
      height: 500px;
    }
    .card-course-content {
      width: 85%;
      min-height: 450px;
      h2 {
        font-size: 44px !important;
      }
      p {
        font-size: 30px !important;
      }
    }
  }
  .card-course-2 {
    .card-course-content-2 {
      width: 85%;
    }
  }
  .card-course-3 {
    .card-course-content-3 {
      width: 85%;
      .knowledge {
        h3 {
          font-size: 24px;
        }
        li::before {
          left: 9%;
        }
      }
    }
  }

  // (<992)
  @media screen and (max-width: $lg) {
    .card-course {
      .card-course-content {
        width: 90%;
      }
    }
    .card-course-2 {
      .card-course-content-2 {
        width: 90%;
        gap: 5%;
        span {
          font-size: 16px;
        }
        p {
          font-size: 18px;
        }
        img {
          max-width: 30px;
        }
      }
    }
    .card-course-3 {
      .card-course-content-3 {
        width: 90%;
        padding-top: 10px;
        p {
          font-size: 16px;
        }
        .knowledge {
          margin-top: 35px;
          margin-bottom: 35px;
          h3 {
            font-size: 20px;
          }
          li {
            font-size: 18px;
          }
          li::before {
            left: 7%;
          }
        }
        .end-course {
          margin-bottom: 5px;
        }
      }
    }

    // (<750)
    @media screen and (max-width: $md) {
      .card-course {
        .card-course-content {
          width: 100%;
          padding: 0 40px;
          h2 {
            font-size: 36px !important;
          }
          p {
            font-size: 28px !important;
          }
        }
      }
      .card-course-2 {
        .card-course-content-2 {
          width: 100%;
          padding-left: 40px;
          padding-right: 40px;
          gap: 4%;
          span {
            font-size: 14px;
          }
          p {
            font-size: 16px;
          }
          img {
            max-width: 25px;
          }
        }
      }
      .card-course-3 {
        .card-course-content-3 {
          width: 100%;
          padding-left: 40px;
          padding-right: 40px;
          .knowledge {
            li::before {
              left: 6%;
            }
          }
        }
      }

      // (<600)
      @media screen and (max-width: $sm) {
        .card-course {
          .card-course-content {
            padding: 0 60px;
            h2 {
              font-size: 34px !important;
            }
            p {
              font-size: 26px !important;
            }
          }
        }
        .card-course-2 {
          .card-course-content-2 {
            padding-left: 60px;
            padding-right: 60px;
            .certificate {
              display: none;
            }
            img {
              max-width: 30px;
            }
          }
        }
        .card-course-3 {
          .card-course-content-3 {
            padding-left: 60px;
            padding-right: 60px;
            padding-top: 0px;
            p {
              font-size: 14px;
            }
            .knowledge {
              h3 {
                font-size: 18px;
              }
              li {
                font-size: 16px;
              }
              li::before {
                width: 25px;
                height: 25px;
                left: 12%;
              }
            }
            .end-course {
              margin-bottom: 0px;
            }
          }
        }

        // (<490)
        @media screen and (max-width: $xs) {
          .card-course {
            .card-course-content {
              padding: 0 30px;
              h2 {
                font-size: 30px !important;
              }
              p {
                font-size: 23px !important;
              }
            }
          }
          .card-course-2 {
            .card-course-content-2 {
              padding-left: 30px;
              padding-right: 30px;
              gap: 5%;
              img {
                max-width: 25px;
              }
            }
          }
          .card-course-3 {
            .card-course-content-3 {
              padding-left: 30px;
              padding-right: 30px;
              p {
                text-align: left;
              }
              .knowledge {
                li::before {
                  left: 6%;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
