<script setup>
import { ref } from "vue";
import useAuth from "../composable/useAuth";
const { isAuthenticated, login } = useAuth();
const username = ref("");
const password = ref("");
</script>

<template>
    <div
        class="flex flex-col items-center justify-center space-y-12 min-h-sceen-nonav"
    >
    Logged in: {{ isAuthenticated }}
    <div class="flex items-center justify-center rounded-lg shadow-2xl">
    <form @submit.prevent="login(username, password)" class="flex flex-col p-4 space-y-4">
        <input type="text" class="p-2 border-2 rounded-lg" placeholder="Username" v-model="username" />
        <input type="password" class="p-2 border-2 rounded-lg" placeholder="Password" v-model="password" />
        <button @click="login" type="submit" @submit.prevent="login(username, password)" class="py-2 text-indigo-200 bg-indigo-600">
            <div class="navigation-items__item navigation-items__item--level-2">
                <a class="navigation-items__link" href="/about">
                    Login
                </a>
            </div>
        </button>
    </form>
    </div>
    </div>
</template>