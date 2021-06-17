import { deleteRequest, getRequests } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})


export const Requests = () => {
    const requests = getRequests()

    const convertRequestToListElement = (request) => {
        return `<li> ${request.description}
            <button class="request__delete"
                id="request--${request.id}">
                Delete
            </button>
        </li>`
    }

    let html = `
        <ul>
            ${
                requests.map(convertRequestToListElement).join("")
            }
        </ul>
    `
    return html
}