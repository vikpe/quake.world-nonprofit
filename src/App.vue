<script lang="ts" setup>
import Supporters from "#/components/Supporters.vue";
import Servers from "./components/Servers.vue";
import QuakeWorldNu from "./components/QuakeWorldNu.vue";
import MediaObject from "./components/MediaObject.vue";
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
      <QuakeWorldNu />
    </div>

    <div
      class="border-left border border-l-8 px-8 border-sky-400/30 bg-gradient-to-r from-sky-600/10"
    >
      <Servers />
    </div>

    <div
      class="border-left border border-l-8 py-4 px-8 border-purple-400/30 bg-gradient-to-r from-purple-600/10"
    >
      <div class="flex justify-between items-center">
        <MediaObject
          description="Watch QuakeWorld non-stop, from anywhere, on any device."
          title="Twitch Stream"
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

      <div class="bg-white/5 border border-white/20 h-64 mb-8"></div>
    </div>

    <div
      class="border-left border border-l-8 px-8 pb-8 border-amber-400/30 bg-gradient-to-r from-amber-600/10"
    >
      <MediaObject
        description="The legendary QuakeWorld LAN dating back to the 90s."
        title="QHLAN"
      />
      <div class="my-4 bg-white/5 border border-white/20 h-64"></div>

      <a
        class="p-3 border border-white/10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center space-x-4"
        href="https://qhlan.org/"
      >
        <div class="font-bold text-lg">Visit QHLAN.org</div>
        <img class="w-6 opacity-50" src="/assets/icons/arrow_forward_ios.svg" />
      </a>
    </div>

    <div
      class="border-left border border-l-8 pl-8 border-pink-400/30 bg-gradient-to-r from-pink-600/10 to-pink-600/5"
    >
      <Supporters />
    </div>

    <div class="m-10">
      <h3 class="text-xl font-bold">Friends of Quake.World</h3>

      <div class="flex gap-12 my-6 text-slate-300">
        <div>
          <div class="font-bold">Discords</div>
          <div class="columns-2">
            <ul class="list-disc ml-5">
              <li>Quake.World</li>
              <li>Quake Latino</li>
              <li>QWTF.RU</li>
              <li>QuakeWorld CTF</li>
              <li>Quake Latino</li>
            </ul>
            <ul class="list-disc ml-5">
              <li>US QuakeWorld</li>
              <li>FortressOne</li>
              <li>QuakeWorld.RU</li>
              <li>NA QuakeWorld</li>
            </ul>
          </div>
        </div>

        <div>
          <div class="font-bold">Websites</div>
          <ul class="list-disc ml-5">
            <li>QuakeWorld.nu</li>
            <li>QuakeWorld GFX</li>
          </ul>
        </div>

        <div>
          <div class="font-bold">Software</div>
          <ul class="list-disc ml-5">
            <li>ezQuake</li>
            <li>FTEQuake</li>
            <li>FortressOne</li>
            <li>MVDSV</li>
            <li>QTV</li>
            <li>KTX</li>
          </ul>
        </div>
      </div>
    </div>

    <hr />

    <div class="-mt-4 pb-6 text-slate-400 text-center">
      <span class="font-bold">Quake.World</span> - a non-profit supporting
      QuakeWorld
    </div>
  </div>
</template>
