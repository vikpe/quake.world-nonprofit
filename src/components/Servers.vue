<script lang="ts" setup>
import { ref } from "vue";
import { Server } from "./../types.ts";
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
  <div
    class="mb-6 md:mb-0 px-8 py-6 border border-sky-600/30"
    style="
      background: #040d21 url(/assets/img/globe.jpg) no-repeat right center;
      background-size: contain;
    "
  >
    <div class="text-blue-200">
      <MediaObject
        color="text-blue-400"
        description="High quality QuakeWorld servers"
        title="Servers"
      />
    </div>
    <div class="mt-4 text-left">
      <table>
        <tbody>
          <tr v-for="server in servers">
            <td class="p-1">
              <Flag :cc="server.country.cc" />
            </td>
            <td class="p-1">
              <code>{{ server.hostname }}</code>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
