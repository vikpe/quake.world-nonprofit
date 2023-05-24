<script lang="ts" setup>
import MediaObject from "./components/MediaObject.vue";
</script>
<template>
  <div class="flex justify-between items-center">
    <MediaObject
      description="The legendary QuakeWorld LAN dating back to the 90s."
      title="QHLAN"
    />
    <a
      class="flex items-center p-3 border-white/10 bg-amber-800 hover:bg-amber-700 text-white rounded-xl font-bold"
      href="https://qhlan.org/"
      >Visit QHLAN
      <img
        alt=""
        class="w-4 h-4 ml-2"
        src="/assets/icons/arrow_forward_ios.svg"
    /></a>
  </div>

  <div class="bg-white/5 border border-white/20 h-64"></div>
</template>
