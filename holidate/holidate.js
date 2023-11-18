const API_KEY = "e5714907-8771-4c7f-9327-c3282f7af5f9";

// Handle event clicker
const btnHandler = () => {
    console.log("handle click event");
}
document.getElementById("countries-list-btn").addEventListener("click", btnHandler);

// Get countries list
const getCountries = async () => {
    try {
        const url = `https://holidayapi.com/v1/countries?pretty&key=${API_KEY}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log("data", data);
        return data;
    } catch (err) {
        console.log("err", err);
    }
}
const renderCountries = async () => {
    try {
        const data = await getCountries();
        const countriesList = document.getElementById("countries-list");
        const ulCountriesList = countriesList.children[2];
        ulCountriesList.innerHTML = "";
        data.countries.forEach((country, index) => {
            const x = document.createElement("li");
            x.innerHTML = `<div class="bullet">${index + 1}</div>
                <div class="li-wrapper">
                    <div class="li-title">${country.name}</div>
                    <div class="li-text">${country.code}</div>
                </div>`;
            ulCountriesList.appendChild(x);
        });
        } catch (err) {
            console.log("err", err);
        }
    }
document.getElementById("countries-list-btn").addEventListener("click", renderCountries);
// Language list
document.getElementById("languages-list-btn").addEventListener("click", btnHandler);

const getLanguages = async () => {
    try {
        const url = `https://holidayapi.com/v1/languages?pretty&key=${API_KEY}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log("data", data);
        return data;
    } catch (err) {
        console.log("err", err);
    }
}

const renderLanguages = async () => {
    try {
        const data = await getLanguages();
        const languagesList = document.getElementById("languages-list");
        const ulLanguagesList = languagesList.children[2];
        ulLanguagesList.innerHTML = "";
        data.languages.forEach((language, index) => {
            const x = document.createElement("li");
            x.innerHTML = `<div class="bullet">${index + 1}</div>
            <div class="li-wrapper">
                <div class="li-title">${language.name}</div>
                <div class="li-text">${language.code}</div>
            </div>`;
            ulLanguagesList.appendChild(x);
        });
    } catch (err) {
        console.log("err", err);
    }
}
document.getElementById("languages-list-btn").addEventListener("click", renderLanguages);
// Query Option
const search = document.getElementById("search-query");
const year = document.getElementById("year-query");
const month = document.getElementById("month-query");
const day = document.getElementById("day-query");
const country = document.getElementById("country-query");
const language = document.getElementById("language-query");

document.getElementById("holidays-btn").addEventListener("click", btnHandler);
const getHoliday = async () => {
    try {
        let queryString = "";
        if (search.value) {
            queryString += `&search=${search.value}`;
        }
        if (year.value) {
            queryString += `&year=${year.value}`;
        } else {
            queryString += `&year=2022`;
        }
        if (month.value) {
            queryString += `&month=${month.value}`;
        }
        if (day.value) {
            queryString += `&day=${day.value}`;
        }
        if (country.value) {
            queryString += `&country=${country.value}`;
        } else {
            queryString += `&country=VN`;
        }
        if (language.value) {
            queryString += `&language=${language.value}`;
        }
        const url = `https://holidayapi.com/v1/holidays?pretty&key=${API_KEY}${queryString}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log("data", data);
        return data;
    } catch (err) {
        console.log("err", err)
    }
}
const renderHoliday = async () => {
    try {
        const data = await getHoliday();
        const holidaysList = document.getElementById("holidays-list");
        const ulHolidaysList = holidaysList.children[1];
        ulHolidaysList.innerHTML = "";
        data.holidays.forEach((holiday, index) => {
            const x = document.createElement("li");
            x.innerHTML = `<div class="bullet">${index + 1}</div>
            <div class="li-wrapper">
                <div class="li-title">${holiday.name}</div>
                <div class="li-text">${holiday.weekday.date.name} - ${holiday.date}</div>
            </div>`;
            ulHolidaysList.appendChild(x);
        });
    } catch (err) {
        console.log("err", err)
    }
}
document.getElementById("holidays-btn").addEventListener("click", renderHoliday);