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
                    <router-link to="/payment">
                        <li class="px-4 py-8 hover:cursor-pointer hover:bg-blue-100 hover:text-blue-800">Make a payment</li>
                    </router-link>
                    <router-link to="/login">
                        <li class="px-4 py-8 hover:cursor-pointer hover:bg-blue-100 hover:text-blue-800">Login</li>
                    </router-link>
                </ul>
            </nav>
        </div>
    </div>
</template>