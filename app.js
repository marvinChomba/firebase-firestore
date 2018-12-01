const cafeList = document.querySelector("#cafe-list")
const form = document.querySelector("#add-cafe-form")


// create elements and render cafe
const renderCafe = doc => {
    // create the elements
    let li = document.createElement("li");
    let name = document.createElement("span")
    let city = document.createElement("span")
    let ex = document.createElement("div")

    // set attr to li tag
    li.setAttribute("data-id", doc.id);

    // add content
    name.textContent = doc.data().name;
    city.textContent = doc.data().city;
    ex.textContent = "x"

    // append the name and city to the li
    li.appendChild(name)
    li.appendChild(city)
    li.appendChild(ex)


    // append li to the ul
    cafeList.appendChild(li)

    // deleting data
    ex.addEventListener("click", e => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute("data-id")
        db.collection("cafes").doc(id).delete()
    })
}



// saving data
form.addEventListener("submit", e => {
    e.preventDefault();
    console.log(form.name.value)
    db.collection("cafes").add({
        name: form.name.value,
        city: form.city.value
    })
    form.name.value = ""
    form.city.value = ""
})

// real-time listner
db.collection("cafes").orderBy("city").onSnapshot(snapshot => {
    let changes =  snapshot.docChanges()
    changes.forEach(change => {
        if (change.type === "added") {
            renderCafe(change.doc)
        } else if(change.type === "removed") {
            let li = cafeList.querySelector("[data-id=" + change.doc.id + "]");
            cafeList.removeChild(li);
        }
    })
})
