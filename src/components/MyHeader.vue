<template>
  <v-container fluid class="fon-header">
    <v-container fluid class="fon-content">
      <v-row justify="space-between" align="center">
        <v-col cols="auto">
          <div class="logo" @click="$emit('goMain', -1)">
            <div class="logo">
              <img src="@/assets/logo-art.png" alt="logo-art" />
            </div>
          </div>
        </v-col>

        <v-col cols="auto">
          <v-row>
            <v-col cols="auto" class="contacts">
              <p>г. Алапаевск</p>
              <p>+7 (982) 763-03-03</p>
              <div class="icons-contacts">
                <div class="visually-impaired">
                  <img
                    id="specialButton"
                    style="cursor: pointer"
                    src="@/assets/icons/visually-impaired.png"
                    alt="ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ"
                    title="ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ"
                  />
                </div>
                <div class="social">
                  <a
                    class="vk"
                    href="https://vk.com/the_beauty_art"
                    target="_blank"
                  >
                    <img src="@/assets/icons/vk_icon.svg" alt="" />
                  </a>
                  <a class="telegram" target="_blank" style="display: none">
                    <img src="@/assets/icons/telegram_icon.svg" alt="" />
                  </a>
                  <a class="whatsapp" target="_blank" style="display: none">
                    <img src="@/assets/icons/whatsApp_icon.svg" alt="" />
                  </a>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
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

.fon-header {
  margin: 0;
  padding: 0;
  background-color: $mainColor1;
  color: $secondaryColor2;
  .fon-content {
    width: 70%;
    .logo {
      max-width: 200px;
      text-align: center;
      cursor: pointer;
      img {
        width: 100%;
      }
    }
    .contacts {
      text-align: end;
      font-family: UKIJSls;
      font-size: 20px;
      .icons-contacts,
      .social {
        display: flex;
        flex-direction: row;
        gap: 25px;
        justify-content: end;
        .visually-impaired,
        .social a {
          width: 40px;
          height: 40px;
          img {
            width: 80%;
            &:hover {
              opacity: 0.5;
            }
          }
        }
        .social {
          gap: 3px;
        }
      }
    }
  }
  // (<1200)
  @media screen and (max-width: $xl) {
    .fon-content {
      width: 85%;
    }
    // (<992)
    @media screen and (max-width: $lg) {
      .fon-content {
        width: 90%;
      }
      // (<750)
      @media screen and (max-width: $md) {
        .fon-content {
          width: 100%;
          padding-left: 40px;
          padding-right: 40px;
          .logo {
            max-width: 165px;
          }
          .contacts {
            font-size: 18px;
            .icons-contacts,
            .social {
              gap: 20px;
              .visually-impaired,
              .social a {
                width: 30px;
                height: 30px;
              }
            }
          }
        }
        // (<600)
        @media screen and (max-width: $sm) {
          .fon-content {
            padding-left: 60px;
            padding-right: 60px;
            .contacts {
              font-size: 16px;
              .visually-impaired {
                display: none;
              }
            }
          }
          // (<490)
          @media screen and (max-width: $xs) {
            .fon-content {
              padding-left: 30px;
              padding-right: 30px;
              .logo {
                width: 155px;
              }
              .contacts {
                display: none;
              }
            }
          }
        }
      }
    }
  }
}
</style>
