<script lang="ts" setup>
import MediaObject from "./MediaObject.vue";
</script>
<template>
  <div class="text-purple-200">
    <div class="sm:flex justify-between items-center">
      <MediaObject
        color="text-purple-400"
        description="Watch QuakeWorld non-stop, from anywhere, on any device."
        title="Twitch Stream"
      />
      <a
        class="flex items-center p-3 border-white/10 text-white rounded-xl font-bold justify-center my-6 sm:my-0 bg-gradient-to-b from-purple-700 to-purple-800 hover:bg-purple-700"
        href="https://www.twitch.tv/quakeworld"
        >Watch now
        <img
          alt=""
          class="w-4 h-4 ml-2"
          src="/assets/img/icons/arrow_forward_ios.svg"
      /></a>
    </div>

    <a class="block my-8" href="https://www.twitch.tv/quakeworld">
      <img
        alt="QuakeWorld Twitch Stream"
        class="max-w-full border border-white/20 mx-auto shadow-xl shadow-purple-500/50 mb-16"
        src="/assets/img/twitch_quakeworld.png"
      />
    </a>
  </div>
</template>
