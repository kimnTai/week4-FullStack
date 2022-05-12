<script setup lang="ts"></script>

<template>
    <header class="border-b-[3px] border-black-100">
        <div class="flex justify-between px-4 lg:mx-auto lg:max-w-[869px] lg:px-0">
            <router-link :to="{ name: 'Home' }">
                <h1>
                    <a
                        class="block py-4 font-paytone text-2xl leading-[34px] text-black-100 lg:py-3 lg:text-[26px] lg:leading-[36px]"
                        >MetaWall</a
                    >
                </h1>
            </router-link>
            <div class="group flex items-center py-4 lg:relative lg:py-3">
                <img
                    src="../assets/images/dynamic-wall/user.png"
                    alt="avatar"
                    class="mr-[10px] h-[30px] w-[30px] flex-shrink-0 object-cover"
                />
                <div class="border-b-2 border-black-100 px-1 pb-1 font-azeret font-bold leading-[19px] text-black-100">
                    Member
                </div>
                <div
                    class="hidden lg:absolute lg:-left-1 lg:top-[calc(100%-8px)] lg:isolate lg:w-[182px] lg:group-hover:block"
                >
                    <div class="absolute top-2 left-2 z-[-1] h-full w-full border-2 border-black-100 bg-white"></div>
                    <ul
                        class="divide-y-2 divide-black-100 border-2 border-black-100 bg-white text-center text-black-100"
                    >
                        <li>
                            <a href="#" class="block py-2 hover:bg-[#EFECE7]">我的貼文牆</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 hover:bg-[#EFECE7]">修改個人資料</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 hover:bg-[#EFECE7]">登出</a>
                        </li>
                    </ul>
                    <div></div>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped></style>
