<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
	search: {{ route.query.q }}
</template>