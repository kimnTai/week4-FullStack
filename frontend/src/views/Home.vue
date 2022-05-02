<script setup lang="ts">
import Sidebar from "../components/Sidebar.vue";
import { ref } from "vue";
</script>

<template>
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
                <li class="rounded-lg border-2 border-black-100 p-6 shadow-card">
                    <div class="mb-4 flex items-center">
                        <img
                            src="../assets/images/dynamic-wall/user.png"
                            alt="avatar"
                            class="mr-4 h-[45px] w-[45px] flex-shrink-0 object-cover"
                        />
                        <div class="flex-grow">
                            <a
                                href="./personal-wall.html"
                                class="font-bold text-black-100 hover:text-primary hover:underline"
                                >邊緣小杰</a
                            >
                            <div class="font-baloo text-xs leading-5 text-gray-300">2022/1/10 12:00</div>
                        </div>
                    </div>
                    <p class="text-black-100">
                        外面看起來就超冷....<br />
                        我決定回被窩繼續睡....
                    </p>
                    <picture>
                        <source media="(min-width: 1024px)" srcset="../assets/images/dynamic-wall/post-photo@2x.png" />
                        <img class="mt-4" src="../assets/images/dynamic-wall/post-photo.png" alt="post photo" />
                    </picture>
                    <button class="hidden lg:mt-4 lg:inline-block lg:text-xl lg:leading-none lg:text-primary">
                        <i class="fa-regular fa-thumbs-up mr-1"></i>
                        <span class="inline-block font-baloo leading-[27px] text-black-100">12</span>
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
                    <ul class="hidden lg:mt-[18px] lg:block lg:space-y-4">
                        <li class="flex rounded-[12px] bg-[#EFECE7]/30 py-[18px] px-4">
                            <img
                                src="../assets/images/dynamic-wall/user.png"
                                alt="avatar"
                                class="mr-3 h-10 w-10 flex-shrink-0 object-cover"
                            />
                            <div class="flex-grow text-black-100">
                                <a href="./personal-wall.html" class="hover:text-primary hover:underline">希琳</a>
                                <div class="mb-1 text-xs leading-5 text-gray-300">2022/1/11 10:00</div>
                                <p>真的～我已經準備冬眠了</p>
                            </div>
                        </li>
                        <li class="flex rounded-[12px] bg-[#EFECE7]/30 py-[18px] px-4">
                            <img
                                src="../assets/images/dynamic-wall/user.png"
                                alt="avatar"
                                class="mr-3 h-10 w-10 flex-shrink-0 object-cover"
                            />
                            <div class="flex-grow text-black-100">
                                <a href="./personal-wall.html" class="hover:text-primary hover:underline">波吉</a>
                                <div class="mb-1 text-xs leading-5 text-gray-300">2022/1/11 10:00</div>
                                <p>會嗎？我沒穿衣服都不覺得冷</p>
                            </div>
                        </li>
                    </ul>
                </li>
                <li class="hidden rounded-lg border-2 border-black-100 p-6 shadow-card lg:block">
                    <div class="mb-4 flex items-center">
                        <img
                            src="../assets/images/dynamic-wall/user.png"
                            alt="avatar"
                            class="mr-4 h-[45px] w-[45px] flex-shrink-0 object-cover"
                        />
                        <div class="flex-grow">
                            <a
                                href="./personal-wall.html"
                                class="font-bold text-black-100 hover:text-primary hover:underline"
                                >米卡莎</a
                            >
                            <div class="font-baloo text-xs leading-5 text-gray-300">2022/1/10 12:00</div>
                        </div>
                    </div>
                    <p class="text-black-100">搶到想要的 NFT 啦！ya~~</p>
                    <picture>
                        <source media="(min-width: 1024px)" srcset="../assets/images/dynamic-wall/post-photo1@2x.png" />
                        <img class="mt-4" src="../assets/images/dynamic-wall/post-photo1.png" alt="post photo" />
                    </picture>
                    <button class="hidden lg:mt-4 lg:inline-block lg:text-xl lg:leading-none lg:text-gray-300">
                        <i class="fa-regular fa-thumbs-up"></i>
                        <span class="inline-block text-base leading-[22px]">成為第一個按讚的朋友</span>
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
                                class="w-[28.89%] flex-shrink-0 border-2 border-black-100 bg-yellow-100 font-azeret text-black-100"
                            >
                                留言
                                <span class="animate-spin text-xs">
                                    <i class="fa-solid fa-spinner"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </li>
                <li class="rounded-lg border-2 border-black-100 p-6 shadow-card">
                    <div class="mb-4 flex items-center">
                        <img
                            src="../assets/images/dynamic-wall/user.png"
                            alt="avatar"
                            class="mr-4 h-[45px] w-[45px] flex-shrink-0 object-cover"
                        />
                        <div class="flex-grow">
                            <a
                                href="./personal-wall.html"
                                class="font-bold text-black-100 hover:text-primary hover:underline"
                                >波吉</a
                            >
                            <div class="font-baloo text-xs leading-5 text-gray-300">2022/1/10 12:00</div>
                        </div>
                    </div>
                    <p class="text-black-100">我一定要成為很棒棒的國王！</p>
                </li>
                <li class="rounded-lg border-2 border-black-100 p-6 shadow-card">
                    <div class="mb-4 flex items-center">
                        <img
                            src="../assets/images/dynamic-wall/user.png"
                            alt="avatar"
                            class="mr-4 h-[45px] w-[45px] flex-shrink-0 object-cover"
                        />
                        <div class="flex-grow">
                            <a
                                href="./personal-wall.html"
                                class="font-bold text-black-100 hover:text-primary hover:underline"
                                >阿爾敏</a
                            >
                            <div class="font-baloo text-xs leading-5 text-gray-300">2022/1/10 12:00</div>
                        </div>
                    </div>
                    <p class="text-black-100">各位我有一個作戰計畫</p>
                </li>
            </ul>
        </div>
        <Sidebar></Sidebar>
    </main>
</template>

<style lang="scss" scoped></style>
