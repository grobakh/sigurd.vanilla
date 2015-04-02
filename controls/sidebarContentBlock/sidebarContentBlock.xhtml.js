define("sidebarContentBlock/sidebarContentBlock.xhtml", {}, function () {
    return {
        "templateCss": "sidebarContentBlock_sidebarContentBlock",
        "children": [
            {
                "nodeName": "div",
                "attrs": {
                    "class": "sidebarContent"
                },
                "props": {
                    "id": "content"
                }
            }
        ]
    }
});