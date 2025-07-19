<script lang="ts" setup>
import siteConfig from '@/site-config'
</script>

<!-- 页尾 -->

<template>
  <footer class="w-full mt-18 pt-6 pb-8 max-w-3xl text-sm flex flex-col gap-4 border-main border-t !border-op-50 text-dark dark:text-white">
    <div flex>
      <a nav-link href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</a>
      <span op-70>&nbsp;&nbsp;&copy;&nbsp;&nbsp;{{ new Date().getFullYear() }}&nbsp;&nbsp;{{ siteConfig.author }}.</span>
    </div>
    <div flex>
      <span op-70>Derived&nbsp;&nbsp;from&nbsp;&nbsp;the&nbsp;&nbsp;transformation&nbsp;&nbsp;of&nbsp;&nbsp;{{ siteConfig.originAuthor }}'s&nbsp;&nbsp;{{ siteConfig.originProject }}&nbsp;&nbsp;project.</span>
    </div>
  </footer>
</template>
