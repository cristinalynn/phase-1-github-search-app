const init = () => {
    const submitForm = document.querySelector("form")
submitForm.addEventListener("submit", (event) => {
    event.preventDefault()
    //console.log(event.target.children[0].value)
    
    const input = document.querySelector("input#search")
    console.log(input.value)

    return fetch(`https://api.github.com/search/users?q=${input.value}`)
    .then(res => res.json())
    .then(data => {
        //console.log(data.items[0])
        const infoObject = data.items[0]
        //console.log(infoObject.avatar_url)

        const ul = document.querySelector("ul#user-list")

        const img = document.createElement("img")
        img.addEventListener("click", () => {
            fetch(`https://api.github.com/users/${input.value}/repos`)
            .then(res => res.json())
            .then(repos => {
                console.log(repos)
                repos.forEach(repo => {
                    const repoList = document.querySelector("ul#repos-list")

                const name = document.createElement("h3")
                name.innerText = repo.name
                repoList.appendChild(name)
                })
                
            })

        })

        img.src = infoObject.avatar_url

        ul.appendChild(img)

        //console.log(infoObject)

        const login = document.createElement("h3")

        login.innerText = infoObject.login

        ul.appendChild(login)

        const url = document.createElement("h3")
        url.innerText = infoObject.url
        ul.appendChild(url)

    })

    
})
}
    
    

document.addEventListener("DOMContentLoaded", init)

