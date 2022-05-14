<script setup lang="ts">
import Sidebar from "@/components/Sidebar.vue";
import { userStore } from "@/stores/user";
import { reactive, ref } from "vue";
import axios from "axios";

const form = reactive(<IForm>{
    user: userStore()._id,
    type: "person",
    tags: "貼文 tags",
    content: "",
    file: null,
});
const preview = ref("");
const errorMessage = ref("");

const uploadFile = ({ target }: Event) => {
    const { files } = target as HTMLInputElement;
    if (!files?.[0].name.match(/\.(jpg|jpeg|png)$/)) {
        errorMessage.value = "圖片格式錯誤，僅限 JPG、PNG 圖片";
        return;
    }
    if (files?.[0].size >= 10 * 1024 ** 2) {
        errorMessage.value = "限制上傳檔案的大小為 10 MB";
        return;
    }
    const reader = new FileReader();
    form.file = files?.[0];
    reader.readAsDataURL(files?.[0] as Blob);
    reader.onload = ({ target }) => (preview.value = target?.result as string);
};

const submit = async () => {
    if (!form.content) {
        errorMessage.value = "請輸入貼文內容";
        return;
    }
    if (!form.file) {
        errorMessage.value = "請上傳圖片";
        return;
    }
    const formData = new FormData();
    const { file, ...args } = form;
    const host = import.meta.env.VITE_BACKEND_HOST;
    formData.append("image", file, file.name);
    formData.append("form", JSON.stringify(args));
    try {
        await axios.post(`${host}/posts`, formData);
        form.content = "";
        form.file = null;
        preview.value = "";
        alert("張貼動態成功");
    } catch (error) {
        console.log(error);
        alert("張貼動態失敗");
    }
};
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
                <form class="bg-white rounded-lg border-2 border-black-100 p-8 shadow-card">
                    <label for="content" class="mb-1 inline-block text-black-100">貼文內容</label>
                    <textarea
                        v-model="form.content"
                        type="text"
                        class="mb-4 block min-h-[169px] w-full border-2 border-black-100 py-3 px-4"
                        placeholder="輸入您的貼文內容"
                    ></textarea>
                    <label class="relative inline-block rounded bg-black-100 py-1 px-8 text-white">
                        <input @change="uploadFile" type="file" class="sr-only" />
                        上傳圖片
                    </label>
                    <p>{{ form.file?.name }}</p>
                    <img v-if="preview" :src="preview" class="mt-4" />
                    <p v-if="errorMessage" class="mt-8 text-center text-sm text-red-100">
                        {{ errorMessage }}
                    </p>
                    <input
                        @click="submit"
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
