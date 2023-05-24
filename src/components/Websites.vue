<script lang="ts" setup>
import { ref } from "vue";
import MediaObject from "#/components/MediaObject.vue";
import { Link } from "#/types.ts";

const links = ref<Link[]>([]);

async function getData() {
  const res = await fetch("/data/websites.json");
  links.value = await res.json();
}

getData();
</script>
<template>
  <div class="mt-6 mb-8">
    <MediaObject
      description="A network of QuakeWorld related websites."
      title="Websites"
    />

    <div class="grid gap-4 grid-cols-2 my-4">
      <a
        v-for="link in links"
        :href="link.url"
        class="p-8 border border-white/10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-between"
      >
        <div>
          <div class="font-bold text-lg">{{ link.title }}</div>
        </div>
        <img class="w-6 opacity-50" src="/assets/icons/arrow_forward_ios.svg" />
      </a>
    </div>

    <hr />

    <div>
      <h4 class="text-lg">File Repositories</h4>

      <div class="grid gap-4 grid-cols-3 my-4">
        <a href="https://builds.quakeworld.nu/">
          <span class="font-bold">Download latest clients, software</span><br />
          <span class="opacity-70 font-mono">builds.quakeworld.nu</span>
        </a>

        <a href="https://maps.quakeworld.nu/">
          <span class="font-bold">Download maps</span><br />
          <span class="opacity-70 font-mono">maps.quakeworld.nu</span>
        </a>

        <a href="https://gfx.quakeworld.nu/">
          <span class="font-bold">Download graphics</span><br />
          <span class="opacity-70 font-mono">gfx.quakeworld.nu</span>
        </a>
      </div>
    </div>

    <hr />

    <div>
      <h4 class="text-lg">Tools</h4>

      <div class="grid gap-4 grid-cols-3 my-4">
        <a href="https://builds.quakeworld.nu/">
          <span class="font-bold">Charset Editor</span>
        </a>

        <a href="https://maps.quakeworld.nu/">
          <span class="font-bold">Recent demos</span>
        </a>

        <a href="https://gfx.quakeworld.nu/">
          <span class="font-bold">Model texture editor</span>
        </a>

        <a href="https://gfx.quakeworld.nu/">
          <span class="font-bold">Simple items texture editor</span>
        </a>

        <a href="https://gfx.quakeworld.nu/">
          <span class="font-bold">HUD numbers texture editor</span>
        </a>
      </div>
    </div>

    <hr />

    <div>
      <h4 class="text-lg">Legacy/Archive</h4>

      <div class="grid gap-4 grid-cols-3 my-4">
        <a href="https://eql.quakeworld.nu/">European Quake League (EQL)</a>
        <a href="https://nqr.quakeworld.nu/">Nations Quake Rank (NQR)</a>
        <a href="https://qwdrama.quakeworld.nu/">qwdrama</a>
      </div>
    </div>
  </div>
</template>
