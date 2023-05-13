<script lang="ts" setup>
import { ref } from "vue";
import { Server } from "#/types.ts";
import Flag from "./Flag.vue";
import MediaObject from "./MediaObject.vue";

const servers = ref<Server[]>([]);

async function getData() {
  const res = await fetch("/assets/servers.json");
  servers.value = await res.json();
}

getData();
</script>

<template>
  <div class="my-10 space-y-2">
    <MediaObject
      title="Servers"
      description="High quality Quake servers across the globe."
    />
    <div>
      <table class="border text-left my-6">
        <thead>
          <tr>
            <th class="p-2">Location</th>
            <th class="p-2">Hostname</th>
            <th class="p-2">Admin</th>
          </tr>
        </thead>
        <tbody class="border">
          <tr v-for="server in servers">
            <td class="p-2">
              <Flag :cc="server.country.cc" />
              {{ server.country.name }}
            </td>
            <td class="p-2">
              <code>{{ server.hostname }}</code>
            </td>
            <td class="p-2">
              <Flag :cc="server.admin.cc" />
              {{ server.admin.name }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
