<template>
    <h1 class="flex items-center justify-center font-bold rounded-lg shadow-2xl cmp-title_text">
        Get Your Quote Below
    </h1>
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
    <h3 class="flex items-center justify-center font-bold rounded-lg">Enter vehicle information below</h3>
    <div>
        <div class="container">
            <div class="row">
                <div class="col col-md-8 mr-md-auto ml-md-auto" >
                    <div id="content">
                        <div class="row content-form">
                            <div class="col col-md-10 mr-md-auto ml-md-auto">
                                <form action="#" id="request-quote">
                                        <div class="flex items-center justify-center form-group">
                                            <label for="make">Make:</label>
                                            <select class="form-control" id="make">
                                                <option value="">- Select -</option>
                                                <option value="1">Audi</option>
                                                <option value="2">Cheverolet</option>
                                                <option value="3">Ford</option>
                                                <option value="4">GMC</option>
                                                <option value="5">Honda</option>
                                                <option value="6">Jaguar</option>
                                                <option value="7">Lexus</option>
                                                <option value="8">Mercedes</option>
                                                <option value="9">Nissan</option>
                                                <option value="10">Toyota</option>
                                                <option value="11">Tesla</option>
                                                <option value="12">Volvo</option>
                                            </select>
                                        </div>

                                        <div class="flex items-center justify-center form-group">
                                            <label for="year">Year:</label>
                                            <select class="form-control" id="year">
                                                <option value="">- Select -</option>
                                                <option value="1">2000</option>
                                                <option value="2">2001</option>
                                                <option value="3">2002</option>
                                                <option value="4">2003</option>
                                                <option value="5">2004</option>
                                                <option value="6">2005</option>
                                                <option value="7">2006</option>
                                                <option value="8">2007</option>
                                                <option value="9">2008</option>
                                                <option value="10">2009</option>
                                                <option value="11">2010</option>
                                                <option value="12">2011</option>
                                                <option value="13">2012</option>
                                                <option value="14">2013</option>
                                                <option value="15">2014</option>
                                                <option value="16">2015</option>
                                                <option value="17">2016</option>
                                                <option value="18">2017</option>
                                                <option value="19">2018</option>
                                                <option value="20">2019</option>
                                                <option value="21">2020</option>
                                                <option value="22">2021</option>
                                                <option value="23">2022</option>
                                            </select>
                                        </div>

                                        <fieldset class="flex items-center justify-center form-group">
                                            <div class="row">
                                                <legend class="col-form-legend col-12">Insurance Level</legend>

                                            <div class="col12">
                                                <div class="flex items-center justify-center form-check">
                                                    <label class="form-check-label">
                                                    <input  class="form-check-input" type="radio" name="level" value="basic" checked>
                                                    Basic Coverage
                                                    </label>
                                                </div>
                                                <div class="flex items-center justify-center form-check">
                                                    <label class="form-check-label">
                                                    <input class="form-check-input" type="radio" name="level" value="complete">
                                                    Complete Coverage
                                                    </label>
                                                </div>
                                            </div>
                                            </div>
                                    </fieldset>
                                    <div id="result"></div>
                                    <div class="flex items-center justify-center form-group">
                                        <button type="submit" class="py-1 text-indigo-100 bg-blue-700 rounded-lg w-1/7 cmp-form-button hover:bg-blue-500">Get Quote</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>