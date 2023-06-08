<template>
  <div class="lg:grid mb-6 grid-cols-3 gap-6">
    <a
      class="flex items-center p-4 justify-between border border-sky-300/10 bg-sky-600/10 hover:bg-sky-600/20 opacity-70 hover:opacity-100 rounded"
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
      class="flex items-center p-4 justify-between border border-sky-300/10 bg-sky-600/10 hover:bg-sky-600/20 opacity-70 hover:opacity-100 rounded"
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
      class="flex items-center p-4 justify-between border border-sky-300/10 bg-sky-600/10 hover:bg-sky-600/20 opacity-70 hover:opacity-100 rounded"
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
</template>
<script>
export default {
  name: "TopLinks",
};
</script>
