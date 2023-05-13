<script lang="ts" setup>
import Supporters from "#/components/Supporters.vue";
import Servers from "./components/Servers.vue";
import MediaObject from "./components/MediaObject.vue";
</script>

<template>
  <div class="container mx-auto max-w-5xl space-y-3">
    <div class="my-10 space-y-4">
      <div class="space-y-1">
        <h1 class="text-5xl">Quake.World</h1>
        <div>
          A non-profit supporting critical parts of the QuakeWorld community
        </div>
      </div>
    </div>

    <div
      class="border-left border-l-8 pl-8 border-sky-400/30 bg-gradient-to-r from-sky-600/10 py-0.5"
    >
      <Servers />
    </div>

    <div
      class="border-left border-l-8 pl-8 border-green-400/30 bg-gradient-to-b from-green-600/10 py-1"
    >
      <div class="my-10 space-y-4">
        <MediaObject
          description="Quake related software and tools."
          title="Software"
        />
        <div class="flex gap-10">
          <div
            class="p-3 border border-white/10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center space-x-4"
          >
            <div class="space-y-1">
              <div class="font-bold text-lg">ezQuake</div>
              <div>a modern QuakeWorld client</div>
            </div>
            <img
              class="w-6 opacity-50"
              src="/assets/icons/arrow_forward_ios.svg"
            />
          </div>

          <div
            class="p-3 border border-white/10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center space-x-4"
          >
            <div class="space-y-1">
              <div class="font-bold text-lg">KTX</div>
              <div>QuakeWorld Server addon</div>
            </div>
            <img
              class="w-6 opacity-50"
              src="/assets/icons/arrow_forward_ios.svg"
            />
          </div>

          <div
            class="p-3 border border-white/10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center space-x-4"
          >
            <div class="space-y-1">
              <div class="font-bold text-lg">MVDSV</div>
              <div>QuakeWorld server</div>
            </div>
            <img
              class="w-6 opacity-50"
              src="/assets/icons/arrow_forward_ios.svg"
            />
          </div>
        </div>
      </div>
    </div>

    <div
      class="border-left border-l-8 pl-8 border-purple-400/30 bg-gradient-to-r from-purple-600/10 py-0.5"
    >
      <div class="my-10 space-y-4">
        <MediaObject
          description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque autem commodi."
          title="Events"
        />
        <div class="flex gap-10">
          <div
            class="p-3 border border-white/10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center space-x-4"
          >
            <div class="space-y-1">
              <div class="font-bold text-lg">QHLAN</div>
              <div>The legendary QuakeWorld LAN since 199x.</div>
            </div>
            <img
              class="w-6 opacity-50"
              src="/assets/icons/arrow_forward_ios.svg"
            />
          </div>
        </div>
      </div>
    </div>

    <div
      class="border-left border-l-8 pl-8 border-amber-400/30 bg-gradient-to-r from-amber-600/10 py-0.5"
    >
      <div class="my-10 space-y-4">
        <MediaObject
          description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque autem commodi."
          title="Websites"
        />
        <div class="flex gap-10">
          <div
            class="p-3 border border-white/10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center space-x-4"
          >
            <div class="space-y-1">
              <div class="font-bold text-lg">Quake.World Discord</div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </div>
            </div>
            <img
              class="w-6 opacity-50"
              src="/assets/icons/arrow_forward_ios.svg"
            />
          </div>
          <div
            class="p-3 border border-white/10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center space-x-4"
          >
            <div class="space-y-1">
              <div class="font-bold text-lg">twitch.tv/quakeworld</div>
              <div>QuakeWorld non-stop controlled via Twitch chat.</div>
            </div>
            <img
              class="w-6 opacity-50"
              src="/assets/icons/arrow_forward_ios.svg"
            />
          </div>
          <div
            class="p-3 border border-white/10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center space-x-4"
          >
            <div class="space-y-1">
              <div class="font-bold text-lg">QuakeWorld.nu</div>
              <div>News and forum</div>
            </div>
            <img
              class="w-6 opacity-50"
              src="/assets/icons/arrow_forward_ios.svg"
            />
          </div>
        </div>
      </div>
    </div>

    <div
      class="border-left border-l-8 pl-8 border-pink-400/30 bg-gradient-to-r from-pink-600/10 py-0.5"
    >
      <Supporters />
    </div>

    <div class="my-10">asdasd</div>
  </div>
</template>
