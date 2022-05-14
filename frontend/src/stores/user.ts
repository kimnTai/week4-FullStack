import { defineStore } from "pinia";

export const userStore = defineStore({
    id: "user",
    state: () => ({
        _id: "626e7a88e699706d629557bf",
        name: "John",
        email: "yy342@gmail.com",
        photo: "https://thumb.fakeface.rest/thumb_male_10_8c02e4e9bdc0e103530691acfca605f18caf1766.jpg",
    }),
});
