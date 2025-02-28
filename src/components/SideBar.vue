<script setup>
import { RouterLink } from 'vue-router'
defineProps({
	class: String,
	links: /** @type {import('vue').PropType<{ path: string, name: string }[]>} */(Array),
})
</script>

<template>
	<aside class="flex-col gap-4 p-2" :class="$props.class">
		<RouterLink v-for="r of $props.links" :to="r.path" :key="r.path" class="hover:text-gray-600">
			{{ r.name }}
		</RouterLink>
		<hr class="border-gray/40" />
	</aside>
</template>