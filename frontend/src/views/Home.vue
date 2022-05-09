<script setup lang="ts">
import Sidebar from "../components/Sidebar.vue";
import { ref } from "vue";
import axios from "axios";

const result = ref<IPost[]>();
try {
    const { data } = await axios.get("http://localhost:3005/posts");
    result.value = data.result;
    console.log(data.result);
} catch (error) {}
</script>

<template>
    <div class="bg_pattern">
        <main class="px-3 pt-4 pb-[102px] lg:mx-auto lg:flex lg:max-w-[869px] lg:px-0 lg:py-[49px]">
            <div class="lg:mr-[27px] lg:flex-grow">
                <div class="mb-4 lg:flex lg:space-x-3">
                    <div class="relative mb-[6px] lg:mb-0 lg:w-[29.26%] lg:flex-shrink-0">
                        <select
                            class="block w-full appearance-none border-2 border-black-100 bg-white py-3 pl-4 pr-[28px] font-azeret leading-[22px] text-black-100"
                        >
                            <option value="" disabled>請選擇</option>
                            <option value="new" selected>最新貼文</option>
                        </select>
                        <i class="fa-solid fa-angle-down absolute right-4 top-1/2 -translate-y-1/2 text-black-100"></i>
                    </div>
                    <div class="flex lg:flex-grow">
                        <input
                            type="text"
                            class="flex-grow rounded-none border-y-2 border-l-2 border-black-100 py-3 px-4 font-azeret leading-[22px] text-black-100"
                            placeholder="搜尋貼文"
                        />
                        <button class="w-[46px] flex-shrink-0 border-2 border-black-100 bg-primary text-xl text-white">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                </div>
                <ul class="space-y-4">
                    <li v-for="item in result" class="bg-white rounded-lg border-2 border-black-100 p-6 shadow-card">
                        <div class="mb-4 flex items-center">
                            <img
                                :src="item.user.photo"
                                alt="avatar"
                                class="mr-4 h-[45px] w-[45px] flex-shrink-0 object-cover"
                            />
                            <div class="flex-grow">
                                <a href="#" class="font-bold text-black-100 hover:text-primary hover:underline">
                                    {{ item.user.name }}
                                </a>
                                <div class="font-baloo text-xs leading-5 text-gray-300">{{ item.createdAt }}</div>
                            </div>
                        </div>
                        <p class="text-black-100">
                            {{ item.content }}
                        </p>
                        <picture>
                            <img class="mt-4" :src="item.image" alt="post photo" />
                        </picture>
                        <button class="hidden lg:mt-4 lg:inline-block lg:text-xl lg:leading-none lg:text-primary">
                            <i class="fa-regular fa-thumbs-up mr-1"></i>
                            <span class="inline-block font-baloo leading-[27px] text-black-100">{{ item.likes }}</span>
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
                        <!-- <ul class="hidden lg:mt-[18px] lg:block lg:space-y-4">
                            <li class="flex rounded-[12px] bg-[#EFECE7]/30 py-[18px] px-4">
                                <img
                                    src="../assets/images/dynamic-wall/user.png"
                                    alt="avatar"
                                    class="mr-3 h-10 w-10 flex-shrink-0 object-cover"
                                />
                                <div class="flex-grow text-black-100">
                                    <a href="#" class="hover:text-primary hover:underline">希琳</a>
                                    <div class="mb-1 text-xs leading-5 text-gray-300">2022/1/11 10:00</div>
                                    <p>真的～我已經準備冬眠了</p>
                                </div>
                            </li>
                        </ul> -->
                    </li>
                </ul>
            </div>
            <Sidebar></Sidebar>
        </main>
    </div>
</template>

<style lang="scss" scoped></style>
