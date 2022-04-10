const tagContainer = document.querySelector(".tag-container");
const choiceInput = document.querySelector("textarea");
let choicesCollection = [];

choiceInput.addEventListener("input", (e) => {
    choicesCollection = e.target.value.split(",");
    let tagItems = choicesCollection.reduce((choices, choice, idx) => `${choices}\n${choice.trim().length === 0 ? "" : `<p id=tag-${idx} class="tag">${choice.trim()}</p>`}`, "");
    tagContainer.innerHTML = tagItems;
})

choiceInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const randomPick = setInterval(() => {
            let randomChoice = Math.floor(Math.random()*(choicesCollection.length));
            let pickedItem = document.querySelector(`#tag-${randomChoice}`);
            let tags = document.querySelectorAll(".tag");

            tags.forEach((tag) => {
                tag.classList.remove("picked-tag")
            })

            pickedItem.classList.add("picked-tag")
        }, 100);

        setTimeout(() => clearInterval(randomPick), Math.min(15000, choicesCollection.length*1000))
    }
})