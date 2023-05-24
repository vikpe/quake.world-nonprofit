<script lang="ts" setup>
import Supporters from "#/components/Supporters.vue";
import Servers from "./components/Servers.vue";
import Websites from "./components/Websites.vue";
import MediaObject from "./components/MediaObject.vue";
import Streams from "./components/Streams.vue";
import Events from "./Events.vue";
import Friends from "./Friends.vue";
</script>

<template>
  <div class="container mx-auto max-w-6xl">
    <div class="my-8">
      <div class="space-y-3">
        <h1 class="text-5xl">Quake.World</h1>
        <div class="text-lg font-bold">A non-profit supporting QuakeWorld</div>
      </div>
    </div>

    <div
      class="border-left border-4 border-purple-400/30 bg-purple-600/20 px-6 my-6"
    >
      <MediaObject
        color="text-purple-300"
        description="Supporting critical parts of the QuakeWorld community such as
          software, servers, websites, competitions and events."
        icon="assignment"
        title="Our Mission"
      />
    </div>

    <div
      class="border-left border border-l-8 px-8 border-slate-400/30 bg-gradient-to-r from-slate-600/30"
    >
      <Websites />
    </div>

    <div
      class="border-left border border-l-8 px-8 border-sky-400/30 bg-gradient-to-r from-sky-600/10"
    >
      <Servers />
    </div>

    <div
      class="border-left border border-l-8 px-8 border-purple-400/30 bg-gradient-to-r from-purple-600/10"
    >
      <Streams />
    </div>

    <div
      class="border-left border border-l-8 px-8 pb-8 border-amber-400/30 bg-gradient-to-r from-amber-600/10"
    >
      <Events />
    </div>

    <div
      class="border-left border border-l-8 pl-8 border-pink-400/30 bg-gradient-to-r from-pink-600/10 to-pink-600/5"
    >
      <Supporters />
    </div>

    <div class="m-10">
      <Friends />
    </div>

    <hr />

    <div class="-mt-4 pb-6 text-slate-400 text-center">
      <span class="font-bold">Quake.World</span> - a non-profit supporting
      QuakeWorld
    </div>
  </div>
</template>
