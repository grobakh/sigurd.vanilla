define("actionsBlock/actionsBlock.xhtml", {}, function () {
    return {
        "templateCss": "actionsBlock_actionsBlock",
        "children": [
            {
                "nodeName": "div",
                "attrs": {
                    "class": "actions"
                },
                "children": [
                    {
                        "nodeName": "div",
                        "attrs": {
                            "class": "inner"
                        },
                        "props": {
                            "id": "content"
                        }
                    }
                ]
            }
        ]
    }
});