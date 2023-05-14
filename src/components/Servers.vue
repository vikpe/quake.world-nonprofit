<script lang="ts" setup>
import { ref } from "vue";
import { Server } from "#/types.ts";
import Flag from "./Flag.vue";
import MediaObject from "./MediaObject.vue";

const servers = ref<Server[]>([]);

async function getData() {
  const res = await fetch("/data/servers.json");
  servers.value = await res.json();
}

getData();
</script>

<template>
  <div class="my-10 space-y-2">
    <MediaObject
      description="High quality QuakeWorld servers across the globe."
      title="Servers"
    />
    <div>
      <table class="border border-white/10 text-left my-6">
        <tbody class="border border-white/10">
          <tr v-for="server in servers">
            <td class="p-2">
              <Flag :cc="server.country.cc" />
            </td>
            <td class="p-2">
              <code>{{ server.hostname }}</code>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
