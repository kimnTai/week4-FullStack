<script setup lang="ts"></script>

<template>
    <nav
        class="bg-white fixed inset-x-0 bottom-4 px-2 lg:static lg:bottom-0 lg:w-[35.55%] lg:flex-shrink-0 lg:self-start lg:border-2 lg:border-black-100 lg:py-8 lg:px-6"
    >
        <a
            href="#"
            class="hidden text-center shadow-btn lg:mb-6 lg:block lg:w-full lg:rounded-lg lg:border-2 lg:border-black-100 lg:bg-primary lg:font-azeret lg:font-bold lg:leading-[50px] lg:text-white lg:hover:bg-yellow-100 lg:hover:text-black-100"
        >
            張貼動態
        </a>
        <ul
            class="flex justify-center space-x-[25px] rounded-[32px] border-[3px] border-black-100 bg-secondary py-2 lg:block lg:space-x-0 lg:space-y-[22px] lg:rounded-none lg:border-0 lg:bg-transparent lg:py-0"
        >
            <li class="lg:hidden">
                <a
                    href="./dynamic-wall.html"
                    class="flex h-[48px] w-[48px] items-center justify-center rounded-full border-[3px] border-black-100 bg-white text-xl text-black-100 hover:bg-primary hover:text-white"
                >
                    <i class="fa-solid fa-house"></i>
                </a>
            </li>
            <li class="hidden lg:block">
                <a href="#" class="block text-black-100 hover:text-primary">
                    <img
                        src="../assets/images/dynamic-wall/user.png"
                        alt="avatar"
                        class="mr-3 inline-block h-[50px] w-[50px] object-cover"
                    />
                    <span class="align-middle font-bold">邊緣小杰</span>
                </a>
            </li>
            <li>
                <a href="#" class="peer group block text-black-100 hover:text-primary">
                    <span
                        class="flex h-[48px] w-[48px] items-center justify-center rounded-full border-[3px] border-black-100 bg-white text-xl group-hover:bg-primary group-hover:text-white lg:mr-3 lg:inline-block lg:h-[50px] lg:w-[50px] lg:border-2 lg:bg-[#E2EDFA] lg:text-center lg:leading-[45px]"
                    >
                        <i class="fa-regular fa-bell"></i>
                    </span>
                    <span class="hidden font-bold lg:inline">追蹤名單</span>
                </a>
            </li>
            <li>
                <a href="#" class="group block text-black-100 hover:text-primary">
                    <span
                        class="flex h-[48px] w-[48px] items-center justify-center rounded-full border-[3px] border-black-100 bg-white text-xl group-hover:bg-primary group-hover:text-white lg:mr-3 lg:inline-block lg:h-[50px] lg:w-[50px] lg:border-2 lg:bg-[#E2EDFA] lg:text-center lg:leading-[45px]"
                    >
                        <i class="fa-regular fa-thumbs-up"></i>
                    </span>
                    <span class="hidden font-bold lg:inline">我按讚的文章</span>
                </a>
            </li>
            <li class="lg:hidden">
                <a
                    href="./post-news.html"
                    class="flex h-[48px] w-[48px] items-center justify-center rounded-full border-[3px] border-black-100 bg-primary text-xl text-white"
                >
                    <i class="fa-solid fa-plus"></i>
                </a>
            </li>
        </ul>
    </nav>
</template>

<style scoped></style>
