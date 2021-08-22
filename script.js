// 1. (Main theme: Programming Basics)
for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Jackpot!");
    } else if (i % 3 === 0) {
        console.log("This is divisible by 3");
    } else if (i % 5 === 0) {
        console.log("This is divisible by 5");
    } else {
        console.log(i);
    }
}

// 2. (Main theme: DOM manipulation)
const btnDom = document.createElement("button");
btnDom.innerHTML = "Random Image";
document.body.appendChild(btnDom);
btnDom.addEventListener("click", function () {
    const imgDom = document.createElement("img");
    document.body.innerHTML = ''
    document.body.appendChild(btnDom);
    imgDom.src = "https://picsum.photos/620/400";
    document.body.appendChild(imgDom);
//    alert("Button clicked");
});

// 3. (Main theme: Async API calls)
const fetchAPI = async () => {
    const request = await fetch("https://reqres.in/api/users");
    const data = await request.json();
    return data;
};

fetchAPI().then(users => {
    // console.log(users);
    document.body.appendChild(document.createElement("h1"))
    const list_title = document.querySelector("h1")
    list_title.innerHTML = "Users first names: ";

    const users_names = users.data.filter(user => user.id < 4)
    users_names.forEach(item => {
        const li_list = document.createElement("li")
        document.body.appendChild(li_list);
        li_list.innerHTML = item.first_name;
    });
});

