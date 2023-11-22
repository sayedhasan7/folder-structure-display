function mainfolder(rootfoldername) {
    console.log(rootfoldername)
    let maincontainer = document.getElementsByClassName("rootfolder")[0]
    maincontainer.innerHTML = `
            <div id="folderStructure">
                <span>
                    &nbsp;📁<span id="title">${rootfoldername}</span>
                </span>
            </div>`
}

function iterateData(data, indent = "&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;") {
    data.forEach(item => {
        let container = document.createElement("div")
        container.innerHTML = indent + item.name
        document.getElementById("maincontainer").append(container)
        // let line = document.createElement("div")
        // line.setAttribute("id", "line")
        // line.innerHTML = ""
        // document.getElementById("maincontainer").append(line)
        if (item.children) {
            iterateData(item.children, indent + "&nbsp;&nbsp;|&nbsp;&nbsp;");
        }
    });
}
module.exports = {mainfolder,iterateData}