/// <reference types="vite/client" />

declare module "*.vue" {
    import type { DefineComponent } from "vue";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

type IUser = {
    [key in "name" | "photo" | "_id"]: string;
};

type IPost = {
    /**使用者 */
    user: IUser;
    tags: string;
    type: string;
    /**貼文圖片 */
    image: string;
    createdAt: Date;
    /**內容 */
    content: string;
    /**按讚數 */
    likes: number;
    comments: number;
};
