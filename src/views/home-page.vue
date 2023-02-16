<script setup lang="ts">
const router = useRouter()
const { isDark, toggleDark } = useTheme()
</script>

<template>
  <div
    class="w-[94%] md:container mx-auto my-4 text-center tracking-widest
    p-2 text-base rounded-sm select-none border dark:border-stone-700"
  >
    <h1 class="text-xl">
      <strong>Home</strong>
    </h1>

    <section class="w-[60%] mx-auto mt-4">
      <p class="text-base mb-2">
        <strong>Introduce</strong>
      </p>
      <label>
        Vue Starter is base template of Vue.
        The main technology stack includes Vite, Vue and TailwindCSS.
        <br>
        It can help quickly start the construction of a Vue project
        and save time in the construction of development projects.
      </label>
    </section>

    <div class="text-lg mt-5 flex justify-center w-[80%] mx-auto space-x-6 cursor-pointer">
      <icon-line-md:sunny-outline-loop
        v-if="!isDark"
        @click="toggleDark(true)"
      />
      <icon-line-md:sunny-outline-to-moon-alt-loop-transition
        v-else
        @click="toggleDark(false)"
      />
      <icon-mdi:about-circle-outline @click="router.push({name: 'About'})" />
      <a
        href="https://github.com/flingyp/vue-starter"
        target="_black"
      >
        <icon-mdi:github />
      </a>
    </div>
  </div>
</template>
