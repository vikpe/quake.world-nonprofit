<script lang="ts" setup>
import MediaObject from "./MediaObject.vue";
</script>
<template>
  <div class="flex justify-between items-center text-orange-100">
    <MediaObject
      color="text-orange-400"
      description="The legendary QuakeWorld LAN"
      title="QHLAN"
    />
    <a
      class="flex items-center p-3 border-white/10 bg-gradient-to-b from-amber-700 to-amber-800 hover:bg-amber-700 text-white rounded-xl font-bold"
      href="https://qhlan.org/"
      >Visit QHLAN
      <img
        alt=""
        class="w-4 h-4 ml-2"
        src="/assets/img/icons/arrow_forward_ios.svg"
    /></a>
  </div>

  <div
    class=""
    style="
      background: url(/assets/img/logos/qhlan2024_logo.png) no-repeat center
        center;
      background-size: contain;
      height: 256px;
    "
  ></div>
</template>
