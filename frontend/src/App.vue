<script setup lang="ts">
import Header from "./components/Header.vue";
</script>

<template>
    <Header></Header>
    <router-view v-slot="{ Component }">
        <suspense timeout="0">
            <template #default>
                <component :is="Component" :key="$route.path"></component>
            </template>
            <template #fallback>
                <div>Loading...</div>
            </template>
        </suspense>
    </router-view>
</template>

<style lang="scss"></style>
