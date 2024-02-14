<template>
  <v-app>
    <MyHeader @goMain="(id) => (idCourse = id)" />
    <v-main>
      <template v-if="idCourse === -1">
        <FirstBlock />
        <SecondBlock />
        <TrirdBlock />
        <ListCourses id="list-courses" @goCourse="(id) => (idCourse = id)" />
      </template>
      <template v-else>
        <CoursePage :idCourse="idCourse" />
      </template>

      <ContactsBlock />
    </v-main>
    <MyFooter @goMain="(id) => (idCourse = id)" />
  </v-app>
</template>

<script setup>
import MyHeader from "@/components/MyHeader.vue";
import ContactsBlock from "@/components/ContactsBlock.vue";
import MyFooter from "@/components/MyFooter.vue";
import FirstBlock from "@/components/FirstBlock.vue";
import SecondBlock from "@/components/SecondBlock.vue";
import TrirdBlock from "@/components/ThirdBlock.vue";
import ListCourses from "@/components/ListCourses.vue";

import CoursePage from "@/views/CoursePage.vue";

import { ref, watch } from "vue";

const ls = localStorage.getItem("idCourse");

const idCourse = ref(ls === null ? -1 : +ls);

watch(idCourse, () => {
  localStorage.setItem("idCourse", idCourse.value);
});
</script>
