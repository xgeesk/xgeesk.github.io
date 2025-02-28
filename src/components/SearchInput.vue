<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const { name, query: qq } = router.currentRoute.value
const query = ref((name === 'search' ? qq.q : '') || '')
const goSearch = () => {
	const q = query.value
	if (!q) return
	router.push({
		name: 'search',
		query: { ...router.currentRoute.value.query, q },
	})
}
</script>

<template>
	<input v-model="query" v-bind="$attrs" @keyup.enter="goSearch" />
</template>