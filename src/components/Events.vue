<script lang="ts" setup>
import MediaObject from "./MediaObject.vue";
</script>
<template>
  <div
    class="px-8 py-6 border border-amber-600/10 bg-gradient-to-b from-amber-600/5 to-amber-600/10"
  >
    <div class="sm:flex justify-between items-center text-orange-100">
      <MediaObject
        color="text-orange-400"
        description="The legendary QuakeWorld LAN"
        title="QHLAN"
      />
      <a
        class="flex items-center justify-center mt-6 p-3 bg-gradient-to-b from-amber-700 to-amber-800 hover:bg-amber-700 text-white rounded-xl font-bold opacity-80 hover:opacity-100"
        href="https://qhlan.org/"
        >Visit QHLAN
        <img
          alt=""
          class="w-4 h-4 ml-2"
          src="/assets/img/icons/arrow_forward_ios.svg"
      /></a>
    </div>

    <img
      alt="QHLAN2024"
      class="max-w-full"
      height="354"
      src="/assets/img/logos/qhlan2024_logo.png"
    />
  </div>
</template>
