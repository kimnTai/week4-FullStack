<script setup lang="ts">
import Sidebar from "@/components/Sidebar.vue";
</script>

<template>
    <div class="bg_pattern">
        <main class="px-3 pt-4 pb-[102px] lg:mx-auto lg:flex lg:max-w-[869px] lg:px-0 lg:py-[49px]">
            <section class="lg:mr-[27px] lg:flex-grow">
                <h2
                    class="relative mb-4 isolate after:absolute after:right-1 after:top-1 after:z-[-1] after:h-full after:w-full after:border-2 after:border-black-100 after:content-['']"
                >
                    <div
                        class="border-2 border-black-100 bg-white py-[18px] text-center font-azeret text-xl font-bold text-black-100"
                    >
                        張貼動態
                    </div>
                </h2>
                <form
                    action="./post-news.html"
                    method="post"
                    class="bg-white rounded-lg border-2 border-black-100 p-8 shadow-card"
                >
                    <label for="content" class="mb-1 inline-block text-black-100">貼文內容</label>
                    <textarea
                        class="mb-4 block min-h-[169px] w-full border-2 border-black-100 py-3 px-4"
                        placeholder="輸入您的貼文內容"
                    ></textarea>
                    <label class="relative inline-block rounded bg-black-100 py-1 px-8 text-white">
                        <input type="file" class="sr-only" />
                        上傳圖片
                    </label>
                    <img src="@/assets/images/dynamic-wall/post-photo@2x.png" alt="post photo" class="mt-4" />
                    <p class="mt-8 text-center text-sm text-red-100 hidden" data-id="error">
                        圖片檔案過大，僅限 1mb 以下檔案<br />圖片格式錯誤，僅限 JPG、PNG 圖片
                    </p>
                    <input
                        type="button"
                        class="mx-auto mt-8 block cursor-pointer w-[68.86%] rounded-lg border-2 border-black-100 bg-gray-200 font-azeret font-bold leading-[50px] text-black-100 hover:bg-yellow-100 hover:shadow-btn"
                        value="送出貼文"
                    />
                </form>
            </section>
            <Sidebar></Sidebar>
        </main>
    </div>
</template>

<style scoped></style>
