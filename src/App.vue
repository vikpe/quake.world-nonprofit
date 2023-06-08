<script lang="ts" setup>
import Supporters from "#/components/Supporters.vue";
import Servers from "./components/Servers.vue";
import Streams from "./components/Streams.vue";
import Events from "./components/Events.vue";
</script>

<template>
  <div class="container max-w-6xl">
    <div class="flex justify-between my-4">
      <div class="py-2">
        <h1 class="text-4xl mb-1">
          Quake<span class="text-sky-400">.</span>World
        </h1>
        <div class="text-sky-200">a non-profit supporting QuakeWorld</div>
      </div>
      <div class="flex gap-4 m-4 items-center">
        <div>
          <a
            class="bg-sky-300/10 hover:bg-sky-300/20 rounded-xl p-1 flex items-center border border-sky-300/10 opacity-70 hover:opacity-100"
            href="https://opencollective.com/quakeworld"
            title="Quake.World Open Collective"
          >
            <img class="w-8 h-8" src="/assets/img/logos/open_collective.svg" />
            <span class="hidden sm:inline ml-0.5 pr-1.5">Open Collective</span>
          </a>
        </div>
      </div>
    </div>

    <hr class="mt-0 mb-6" />

    <div class="lg:grid mb-6 grid-cols-3 gap-6">
      <a
        class="flex items-center p-4 justify-between border border-sky-300/10 bg-sky-600/10 hover:bg-sky-600/20 opacity-70 hover:opacity-100"
        href="http://discord.quake.world/"
      >
        <div class="flex items-center">
          <img class="h-10 mr-4" src="/assets/img/logos/discord.svg" />
          <div>
            <div class="app-font-slab">Discord</div>
            <div class="text-sm text-gray-300">Join 4000+ fellow Quakers</div>
          </div>
        </div>

        <img
          class="w-5 h-5 opacity-50"
          src="/assets/img/icons/arrow_forward_ios.svg"
        />
      </a>

      <a
        class="flex items-center p-4 justify-between border border-sky-300/10 bg-sky-600/10 hover:bg-sky-600/20 opacity-70 hover:opacity-100"
        href="http://hub.quakeworld.nu/"
      >
        <div class="flex items-center">
          <img
            class="h-5 lg:h-10 mr-4"
            src="/assets/img/logos/quakeworld_hub.png"
          />
          <div>
            <div class="app-font-slab">Hub</div>
            <div class="text-sm text-gray-300">
              Live games, streams and events
            </div>
          </div>
        </div>

        <img
          class="w-5 h-5 opacity-50"
          src="/assets/img/icons/arrow_forward_ios.svg"
        />
      </a>

      <a
        class="flex items-center p-4 justify-between border border-sky-300/10 bg-sky-600/10 hover:bg-sky-600/20 opacity-70 hover:opacity-100"
        href="http://wiki.quakeworld.nu/"
      >
        <div class="flex items-center">
          <img class="h-10 mr-4" src="/assets/img/logos/wiki.png" />
          <div>
            <div class="app-font-slab">Wiki</div>
            <div class="text-sm text-gray-300">Everything QuakeWorld</div>
          </div>
        </div>

        <img
          class="w-5 h-5 opacity-50"
          src="/assets/img/icons/arrow_forward_ios.svg"
        />
      </a>
    </div>

    <div class="md:grid grid-cols-2 gap-6">
      <div
        class="mb-6 border border-sky-600/20"
        style="
          background: #040d21 url(/assets/img/globe.png) no-repeat right center;
          background-size: contain;
        "
      >
        <div class="mx-8 my-6">
          <Servers />
        </div>
      </div>

      <div
        class="mb-6 border border-amber-600/10 bg-gradient-to-b from-amber-600/5 to-amber-600/10"
      >
        <div class="mx-8 my-6">
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

    <hr class="my-10" />

    <div class="-mt-4 pb-6 text-slate-400 text-center">
      <span class="font-bold">Quake.World</span> - a non-profit supporting
      QuakeWorld
    </div>
  </div>
</template>
