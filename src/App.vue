<template>
  <v-app>
    <MyHeader />
    <v-main>
      <router-view />
      <ContactsBlock />
    </v-main>
    <MyFooter />
  </v-app>
</template>

<script setup>
import MyHeader from "@/components/MyHeader.vue";
import ContactsBlock from "@/components/ContactsBlock.vue";
import MyFooter from "@/components/MyFooter.vue";
</script>
