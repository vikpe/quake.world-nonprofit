<script lang="ts" setup>
import Supporters from "#/components/Supporters.vue";
import Servers from "./components/Servers.vue";
import MediaObject from "./components/MediaObject.vue";
import Streams from "./components/Streams.vue";
import Events from "./components/Events.vue";
</script>

<template>
  <div class="container mx-auto max-w-6xl">
    <div
      class="my-4 py-4"
      style="
        background: url(/assets/img/quake_ranger.png) no-repeat left center;
        background-size: contain;
      "
    >
      <div class="space-y-3 ml-24">
        <h1 class="text-5xl">Quake.World</h1>
        <div class="text-lg font-bold">A non-profit supporting QuakeWorld</div>
      </div>
    </div>

    <div
      class="my-6 p-6 text-green-100 border border-l-8 border-green-400/20 bg-green-600/10 text-green-200"
    >
      <MediaObject
        color="text-green-400"
        description="Supporting critical parts of the QuakeWorld community such as
          software, servers, websites, competitions and events."
        icon="goal"
        title="Our Mission"
      />
    </div>

    <div class="md:grid grid-cols-2 gap-6">
      <div
        class="mb-6 border border-sky-600/20"
        style="
          background: #040d21 url(/assets/img/globe.png) no-repeat right center;
          background-size: contain;
        "
      >
        <div class="m-8">
          <Servers />
        </div>
      </div>

      <div
        class="mb-6 border border-amber-600/10 bg-gradient-to-b from-amber-600/5 to-amber-600/10"
      >
        <div class="m-8">
          <Events />
        </div>
      </div>
    </div>

    <div
      class="mb-6 border border-purple-600/20 bg-gradient-to-b from-purple-600/10 via-purple-600/20 to-purple-600/10"
    >
      <div class="m-8">
        <Streams />
      </div>
    </div>

    <div class="border border-pink-600/20 bg-pink-600/10">
      <Supporters />
    </div>

    <hr />

    <div class="-mt-4 pb-6 text-slate-400 text-center">
      <span class="font-bold">Quake.World</span> - a non-profit supporting
      QuakeWorld
    </div>
  </div>
</template>
