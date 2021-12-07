const table = document.getElementById("table") 
const daysOfTheWeek = ["mon", "tues", "wed", "thurs", "fri"]

for (const row of Array.from(table.querySelectorAll("tr")).filter(e => e.id != "head")) {
    const cell = document.createElement("td")
    cell.textContent = row.id
    row.appendChild(cell)
    table.appendChild(row)
    for (let i = 0; i < 5; i++) {
        const cell = document.createElement("td")
        cell.id = daysOfTheWeek[i]
        row.appendChild(cell)
        table.appendChild(row)
    }
}

Array.from(document.getElementsByTagName("input")).filter(e => e.type == "color").forEach(e => e.addEventListener("change", event => {
    const element = document.getElementById(event.target.id.substring(0, event.target.id.length - 5))
    Array.from(document.getElementsByTagName("td")).filter(e => e.textContent.includes(element.id) && e.textContent != e.parentNode.id).forEach(e => e.style.backgroundColor = event.target.value)
}, false))

function changeTable(times, days, input) {
    let nodeList = []
    for (const time of times) (Array.from(document.getElementById(time).querySelectorAll("td")).filter(e => days.find(f => f == e.id))).forEach(e => nodeList.push(e))
    if (input.checked) nodeList.forEach(e => {
        e.textContent += input.id
        e.style.backgroundColor = document.getElementById(input.id + "color").value
    })
    else nodeList.forEach(e => {
        e.textContent = ""
        e.style.backgroundColor = e.textContent == "" ? "white" : document.getElementById(input.id + "color").value
    })
}

Array.from(document.getElementsByClassName("class")).forEach(e => e.addEventListener('change', function () {
    switch (this.id) {
        case "CAL103":
            changeTable(["11 AM"], ["tues", "wed", "fri"], this)
            break
        case "CS115":
            changeTable(["10 AM"], ["mon", "wed", "fri"], this)
            break
        case "MA122":
            changeTable(["9 AM"], ["mon", "tues", "wed", "thurs", "fri"], this)
            break
        case "CS146":
            changeTable(["3 PM"], ["tues", "thurs"], this)
            break
        case "PEP111":
            changeTable(["2 PM"], ["mon", "fri"], this)
            break
    }
}))
