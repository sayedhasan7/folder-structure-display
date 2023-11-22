const data = [
    {
        name: "📁 Home",
        children: [
            {
                name: "📁 Section 1",
                children: [
                    {
                        name: "📁 H1"
                    },
                    {
                        name: "📁 H2"
                    },
                    {
                        name: "📁 H3"
                    }
                ]
            }
        ]
    }
];

function mainfolder(rootfoldername) {
    let maincontainer = document.getElementsByClassName("rootfolder")[0]
    maincontainer.innerHTML = `
            <div id="folderStructure">
                <span>
                    &nbsp;📁<span id="title">${rootfoldername}</span>
                </span>
            </div>`
}
mainfolder("Woocommerce")

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
iterateData(data);

// index.js
export { default as Container } from './src/Container';
