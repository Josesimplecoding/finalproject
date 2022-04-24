<template>
    <h1 class="cmp-title_text">
        Get Your Quote Below
    </h1>
    
    <div class="cmp-form-text">
        <input class="cmp-form-text_text" data-cmp-hook-form-text="input" aria-label="Zip code" type="text" id="form-text-1424848195" placeholder="Enter ZIP Code" name="zip" maxlength="5">
    </div>

    <div class="button">
        <button type="submit" class="py-1 text-indigo-100 bg-blue-700 rounded-lg w-1/7 cmp-form-button hover:bg-blue-500" id="form-button type-314788994">Get Quote</button>
    </div>

    <div class="w-100">
        <small class="input-label">Driver License #</small>
        <input class="form-control" type="text" place-holder aria-label="[object Object]" name="licenseId" auto-complete value>
    </div>

    <h2>Or</h2>
    <p>Enter your information below if you don't have your Driver license with you or don't have one</p>

    <div class="w-100">
        <small class="input-label">First Name</small>
        <input class="form-control" type="text" place-holder aria-label="[object Objectt]" name="name" auto-complete value>
    </div>

    <div class="p-2 border-2 rounded-lg w-100">
        <small class="input-label">Last Name</small>
        <input class="form-control" type="text" place-holder aria-label="[object Object]" name="surname" auto-complete value>
    </div>

    <div class="w-100">
        <small class="input-label">Date of Birth</small>
        <input pattern="\d*" inputmode="numeric" class="form-control amax-calendar" value="01/01/00">
    </div>
    
</template>