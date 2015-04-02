define("sidebarBlock/sidebarBlock.xhtml", {}, function () {
    return {
        "templateCss": "sidebarBlock_sidebarBlock",
        "children": [
            {
                "nodeName": "div",
                "attrs": {
                    "class": "sidebar"
                },
                "props": {
                    "id": "content"
                }
            }
        ]
    }
});