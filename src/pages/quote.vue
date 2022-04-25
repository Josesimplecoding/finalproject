<template>
    <h1 class="flex items-center justify-center rounded-lg shadow-2xl cmp-title_text">
        Get Your Quote Below
    </h1>
    
    <div class="flex items-center justify-center rounded-lg shadow-2xl cmp-form-text">
        <input class="cmp-form-text_text" data-cmp-hook-form-text="input" aria-label="Zip code" type="text" id="form-text-1424848195" placeholder="Enter ZIP Code" name="zip" maxlength="5">
    </div>

    <div class="flex items-center justify-center rounded-lg shadow-2xl w-100">
        <input class="cmp-form-text_text" data-cmp-hook-form-text="input" aria-label="Zip code" type="text" id="form-text-1424848195" placeholder="Enter License#" name="license#">
    </div>

    <div class="flex items-center justify-center rounded-lg shadow-2xl button">
        <button type="submit" class="py-1 text-indigo-100 bg-blue-700 rounded-lg w-1/7 cmp-form-button hover:bg-blue-500" id="form-button type-314788994">Get Quote</button>
    </div>

    <h2 class="flex items-center justify-center rounded-lg">Or</h2>
    <p class="flex items-center justify-center rounded-lg">Enter your information below if you don't have your Driver license with you or don't have one</p>

    <div class="flex items-center justify-center rounded-lg shadow-2xl w-100">
        <small class="input-label">First Name</small>
        <input class="form-control" type="text" place-holder aria-label="[object Objectt]" name="name" auto-complete value>
    </div>

    <div class="flex items-center justify-center p-2 border-2 w-100">
        <small class="input-label">Last Name</small>
        <input class="form-control" type="text" place-holder aria-label="[object Object]" name="surname" auto-complete value>
    </div>

    <div class="flex items-center justify-center rounded-lg w-100">
        <small class="input-label">Date of Birth</small>
        <input pattern="\d*" inputmode="numeric" class="form-control amax-calendar" value="01/01/00">
    </div>

    <h3 class="flex items-center justify-center rounded-lg">Enter vehicle information below</h3>
    <div class="flex items-center justify-center rounded-lg">
        <input type="text" class="p-2 border-2 rounded-lg" placeholder="Vehicle Year" />
    </div>
    <div class="flex items-center justify-center rounded-lg"> 
        <input type="text" class="p-2 border-2 rounded-lg" placeholder="Make" />
    </div>
    <div class="flex items-center justify-center rounded-lg"> 
        <input type="text" class="p-2 border-2 rounded-lg" placeholder="Model" />
    </div>
    <div class="flex items-center justify-center rounded-lg">
        <input type="text" class="p-2 border-2 rounded-lg" placeholder="Trim" />
    </div>
        <div class="flex items-center justify-center rounded-lg"> 
        <input type="text" class="p-2 border-2 rounded-lg" placeholder="Base color" />
    </div>
        <div class="flex items-center justify-center rounded-lg"> 
        <input type="text" class="p-2 border-2 rounded-lg" placeholder="Trim color" />
    </div>
    
</template>