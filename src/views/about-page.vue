<script setup lang="ts">
import { useFormatDate } from '@flypeng/tool/browser'

const router = useRouter()
const isDark = useDark()
const toggleDark = useToggle(isDark)

interface RepoInfo {
  description: string;
  pushed_at: string;
  [key: string]: any
}
const repoInfo = ref<RepoInfo>({
  description: '',
  pushed_at: '',
})

onMounted(async () => {
  const { data } = await useRequest<RepoInfo>({ url: '/repos/flingyp/vue-starter', method: 'GET' })
  repoInfo.value = data
})
</script>

<template>
  <div
    class="w-[94%] md:container mx-auto my-4 text-center tracking-widest
    p-2 text-base rounded-sm select-none border dark:border-stone-700"
  >
    <h1 class="text-xl">
      <strong>About</strong>
    </h1>

    <section class="mt-4">
      <p class="text-base mb-2">
        <strong>Vue Starter Repo</strong>
      </p>
      <div class="flex flex-col space-y-1">
        <div>
          <strong>Description: </strong>
          <label>{{ repoInfo.description }}</label>
        </div>
        <div>
          <strong>Lasted time: </strong>
          <label>{{ useFormatDate('yyyy-MM-dd hh:mm:ss', repoInfo.pushed_at) }}</label>
        </div>
      </div>
    </section>

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
