<script setup lang="ts">
const router = useRouter()

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div
    class="w-[94%] md:container mx-auto my-4 text-center tracking-widest p-2 text-base rounded-sm select-none border dark:border-stone-700"
  >
    <h1 class="text-xl">
      About
    </h1>
    <p
      class="w-[60%] mx-auto mt-2"
    >
      <label>
        Vue Starter is base template of Vue. The main technology stack includes Vite, Vue and TailwindCSS.<br>
        It can help quickly start the construction of a Vue project and save time in the construction of development projects.
      </label>
    </p>
    <div class="text-lg mt-4 flex justify-center w-[80%] mx-auto space-x-6 cursor-pointer">
      <icon-line-md:sunny-outline-loop
        v-if="!isDark"
        @click="toggleDark(true)"
      />
      <icon-line-md:sunny-outline-to-moon-alt-loop-transition
        v-else
        @click="toggleDark(false)"
      />
      <icon-tabler:home-check @click="router.push({name: 'Home'})" />
      <a
        href="https://github.com/flingyp/vue-starter"
        target="_black"
      >
        <icon-mdi:github />
      </a>
    </div>
  </div>
</template>
