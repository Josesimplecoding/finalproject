<script setup>
import useAuth from '../composable/useAuth';
const { isAuthenticated, logout } = useAuth()
</script>

<template>
    <div class="text-blue-100 bg-blue-900">
        <div class="container flex items-center justify-between mx-auto">
            <h1 class="text-3xl font-normal tracking-tight">Auto Insurance Project</h1>
            <nav>
                <ul class="flex space-x-4">
                    <router-link to="/">
                        <li class="px-4 py-8 hover:cursor-pointer hover:bg-blue-100 hover:text-blue-800"> Home </li>
                    </router-link>
                    <router-link to="/about">
                        <li class="px-4 py-8 hover:cursor-pointer hover:bg-blue-100 hover:text-blue-800">About Us</li>
                    </router-link>
                    <router-link to="/available">
                        <li class="px-4 py-8 hover:cursor-pointer hover:bg-blue-100 hover:text-blue-800">Available Insurance</li>
                    </router-link>
                    <router-link to="/quote">
                        <li class="px-4 py-8 hover:cursor-pointer hover:bg-blue-100 hover:text-blue-800">Get a quote</li>
                    </router-link>
                    <router-link v-if="!isAuthenticated" to="/login">
                    <button @click="login">
                        <li class="px-4 py-8 hover:cursor-pointer hover:bg-blue-100 hover:text-blue-800">
                            <div class="navigation-items__item navigation-items__item--level-2">
                                <a class="navigation-items__link" href="/about">
                                    login
                                </a>
                            </div>
                        </li>
                    </button>
                    </router-link>
                    <router-link v-else to="/payment">
                        <li class="px-4 py-8 hover:cursor-pointer hover:bg-blue-100 hover:text-blue-800">Make a payment</li>
                    </router-link>
                    <button @click="logout">
                        <li class="px-4 py-8 hover:cursor-pointer hover:bg-blue-100 hover:text-blue-800">
                            <div class="navigation-items__item navigation-items__item--level-2">
                                <a class="navigation-items__link" href="/login">
                                    logout
                                </a>
                            </div>
                        </li>
                    </button>
                </ul>
            </nav>
        </div>
    </div>
</template>