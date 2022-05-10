<script setup>
import useAuth from "../composable/useAuth";
const { isAuthenticated, user } = useAuth();
</script>

<template>
<div class="flex flex-col items-center space-y-12 justfiy-center min-h-screen-nonav">
    <h2 v-if="!isAuthenticated" class="text-6xl tracking-tighter font-extralight">Welcome</h2>
    <h2 v-else class="text-6xl tracking-tighter font-extralight">Welcome {{user}}</h2>
    <img src="../assets/bgindex.png" alt="Hello BG"/>
</div>
    <h1>Welcome to the the most affordable insurance for not only the first time drivers but for all those who happen to want an affordable insurance for their daily driver, the cruiser, special occasions, or for their collectibles. We offer insurance for all types of vehiles, if they hold a value to you then why not protect them with something you can afford.</h1>
    <div class="flex items-center justify-center rounded-lg shadow-2xl">
        <form class="flex-col p-2 space-y-2"/>
    </div>

        <button type="submit" class="w-1/3 py-2 text-indigo-100 bg-blue-700 rounded-lg hover:bg-blue-500">
            <div class="navigation-items__item navigation-items__item--level-2">
                <a class="navigation-items__link" href="/about">
                    About Us
                    <h2>Learn a little more about us and see why we chose the RGV as our start to helping every driver that needs affordable insurance</h2>
                </a>
            </div>
        </button>


        <button type="submit" class="w-1/3 py-2 text-indigo-100 bg-blue-700 rounded-lg hover:bg-blue-500">
            <div class="navigation-items__item navigation-items__item--level-2">
                <a class="navigation-items__link" href="/available">
                    Available Insurance,
                    <h3>want to find out if we cover you necessary needs? click here to see our list of available vehicle coverage</h3>
                </a>
            </div>
        </button>

        <button type="submit" class="w-1/3 py-2 text-indigo-100 bg-blue-700 rounded-lg hover:bg-blue-500">
            <div class="navigation-items__item navigation-items__item--level-2">
                <a class="navigation-items__link" href="/available">
                    Get a Quote
                    <h4>want to find out if we're the right choice for you and your vehicle? Click here to get a quote from us with just a few questions</h4>
                </a>
            </div>
        </button>
</template>