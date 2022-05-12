<script setup lang="ts">
import Sidebar from "../components/Sidebar.vue";
import { reactive, watch, onMounted } from "vue";
import axios from "axios";

const search = reactive({ sort: "new", keyword: "" });
const result = reactive<IPost[]>([]);

const getPosts = async (array: IPost[]) => {
    try {
        const { data } = await axios.get("http://localhost:3005/posts", { params: search });
        array.length = 0;
        data.result.forEach((item: IPost) => array.push(item));
    } catch (error) {}
};

onMounted(() => getPosts(result));
watch(
    () => search.sort,
    () => getPosts(result)
);
</script>

<template>
    <div class="bg_pattern">
        <main class="px-3 pt-4 pb-[102px] lg:mx-auto lg:flex lg:max-w-[869px] lg:px-0 lg:py-[49px]">
            <div class="lg:mr-[27px] lg:flex-grow">
                <div class="mb-4 lg:flex lg:space-x-3">
                    <div class="relative mb-[6px] lg:mb-0 lg:w-[29.26%] lg:flex-shrink-0">
                        <select
                            v-model="search.sort"
                            class="block w-full appearance-none border-2 border-black-100 bg-white py-3 pl-4 pr-[28px] font-azeret leading-[22px] text-black-100"
                        >
                            <option value="new" selected>最新貼文</option>
                            <option value="old" selected>最舊貼文</option>
                        </select>
                        <i class="fa-solid fa-angle-down absolute right-4 top-1/2 -translate-y-1/2 text-black-100"></i>
                    </div>
                    <div class="flex lg:flex-grow">
                        <input
                            v-model.trim="search.keyword"
                            type="text"
                            class="flex-grow rounded-none border-y-2 border-l-2 border-black-100 py-3 px-4 font-azeret leading-[22px] text-black-100"
                            placeholder="搜尋貼文"
                        />
                        <button
                            @click="getPosts(result)"
                            class="w-[46px] flex-shrink-0 border-2 border-black-100 bg-primary text-xl text-white"
                        >
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                </div>
                <ul class="space-y-4">
                    <li
                        v-for="{ user, content, image, createdAt, likes } of result"
                        class="bg-white rounded-lg border-2 border-black-100 p-6 shadow-card"
                    >
                        <div class="mb-4 flex items-center">
                            <img
                                :src="user.photo"
                                alt="avatar"
                                class="mr-4 h-[45px] w-[45px] flex-shrink-0 object-cover"
                            />
                            <div class="flex-grow">
                                <a href="#" class="font-bold text-black-100 hover:text-primary hover:underline">
                                    {{ user.name }}
                                </a>
                                <div class="font-baloo text-xs leading-5 text-gray-300">{{ createdAt }}</div>
                            </div>
                        </div>
                        <p class="text-black-100">
                            {{ content }}
                        </p>
                        <picture>
                            <img class="mt-4" :src="image" alt="post photo" />
                        </picture>
                        <button class="hidden lg:mt-4 lg:inline-block lg:text-xl lg:leading-none lg:text-primary">
                            <i class="fa-regular fa-thumbs-up mr-1"></i>
                            <span class="inline-block font-baloo leading-[27px] text-black-100">{{ likes }}</span>
                        </button>
                        <div class="hidden lg:mt-[18px] lg:flex lg:items-center">
                            <img
                                src="../assets/images/dynamic-wall/user.png"
                                alt="avatar"
                                class="mr-2 h-10 w-10 flex-shrink-0 object-cover"
                            />
                            <div class="flex flex-grow">
                                <input
                                    type="text"
                                    class="flex-grow rounded-none border-y-2 border-l-2 border-black-100 py-2 px-4 text-black-100"
                                    placeholder="留言..."
                                />
                                <button
                                    class="w-[28.89%] flex-shrink-0 border-2 border-black-100 bg-primary font-azeret text-white"
                                >
                                    留言
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <Sidebar></Sidebar>
        </main>
    </div>
</template>

<style lang="scss" scoped></style>
