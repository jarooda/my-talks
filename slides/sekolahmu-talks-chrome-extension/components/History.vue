<script setup lang="ts">
import { ref } from 'vue'
import Timeline from './Timeline.vue';

const events = ref([
  {
    version: "Internet Explorer & Toolbar",
    date: "Early 1990 - Early 2000",
    description:
      "Initially, browser extensions appeared in the form of toolbars in Internet Explorer (IE). For example: Yahoo Toolbar, Google Toolbar, etc."
  },
  {
    version: "Firefox & Add-ons Revolution",
    date: "2004 - 2017",
    description:
      "The first version of Firefox was released in 2004. The first version of the add-ons was released in 2005. Written using XUL (XML User Interface Language)"
  },
  {
    version: "Google Chrome & Modern Extensions",
    date: "2009 - now",
    description:
      "The first version of Google Chrome was released in 2008. The first version of the modern extensions was released in 2010."
  },
  {
    version: "Manifest V3 & Future of Chrome Extensions",
    date: "2020 - now",
    description:
      "Manifest V3 was announced in 2018. The first version of Manifest V3 was released in 2020."
  }
])
</script>

<template>
  <Timeline :events="events" />
</template>