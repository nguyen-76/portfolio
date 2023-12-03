// const p1 = document.createElement("p");
// const p2 = document.createElement("p");
// const p3 = document.createElement("p");

// let t = "Module 1 Learner Interview";
// let n = "Learner Name: name";
// let d = new Date();

// p1.innerHTML = title;
// p2.innerHTML = n;
// p3.innerHTML = d;

// const display = document.getElementById("container");
// display.appendChild(p1);
// display.appendChild(p2);
// display.appendChild(p3);

const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
let page = 1;
let queryString = "";
const keyword = document.getElementById("store-search");
const searchButton = document.querySelector(".search-btn");

const getJobs = async () => {
    try {
    const limit = 20;
    let url = `https://frcz3.sse.codesandbox.io/jobs?_page=${page}&_limit=${limit}`;
    if (queryString) {
       url += `&q=${queryString}`;
    }
    const res = await fetch(url);
    const data = await res.json();
    return data;
    } catch (err) {
      console.log("err", err);
    }
  };

  const renderJobs = async () => {
    try {
        const data = await getJobs();
        const display = document.getElementById("container");
        display.innerHTML = "";
        data.forEach((job, index) => {
            const x = document.createElement("div");
            x.innerHTML = `<div>${index + 1}: ${job.title}</div>`;
            display.appendChild(x);
        });
    } catch (err) {
        console.log("err", err)
    }
}
renderJobs();
prevButton.addEventListener("click", function() {
    if (page === 1) {
        return 
    }
    page = page - 1;
    renderJobs();
  });
nextButton.addEventListener("click", function() {
    page = page + 1;
    renderJobs();
  });
searchButton.addEventListener("click", function() {
    queryString = keyword.value;
  renderJobs();
})

