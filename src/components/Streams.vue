<script lang="ts" setup>
import MediaObject from "./MediaObject.vue";
</script>
<template>
  <div class="">
    <div class="flex justify-between items-center">
      <MediaObject
        description="Watch QuakeWorld non-stop, from anywhere, on any device."
        title="Streams"
      />
      <a
        class="flex items-center p-3 border-white/10 bg-purple-800 hover:bg-purple-700 text-white rounded-xl font-bold"
        href="https://www.twitch.tv/quakeworld"
        >Watch now
        <img
          alt=""
          class="w-4 h-4 ml-2"
          src="/assets/icons/arrow_forward_ios.svg"
      /></a>
    </div>

    <div class="bg-white/5 border border-white/20 h-64"></div>

    <hr />

    <div class="my-6 space-y-3">
      <h4 class="text-lg">Featured Streamers</h4>
      <div>SuddenDeathTV</div>
      <div>Milton</div>
      <div>bps</div>
      <div>dracs</div>
      <div>badsebitv</div>
    </div>
  </div>
</template>
