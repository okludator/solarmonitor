/* 
 This file was generated by Dashcode and is covered by the 
 license.txt included in the project.  You may edit this file, 
 however it is recommended to first turn off the Dashcode 
 code generator otherwise the changes will be lost.
 */
var dashcodePartSpecs = {
    "back_button": { "initialHeight": 30, "initialWidth": 60, "leftImageWidth": 16, "rightImageWidth": 5, "text": "Back", "view": "DC.PushButton" },
    "browser": { "clearSelectionOnBack": true, "view": "DC.Browser" },
    "button": { "initialHeight": 30, "initialWidth": 300, "leftImageWidth": 5, "rightImageWidth": 5, "text": "Click Here to change Default Display", "view": "DC.PushButton" },
    "button1": { "initialHeight": 30, "initialWidth": 301, "leftImageWidth": 5, "onclick": "testGotoImage", "rightImageWidth": 5, "text": "VIew Hi-Res", "view": "DC.PushButton" },
    "button2": { "initialHeight": 30, "initialWidth": 301, "leftImageWidth": 5, "onclick": "testGotoMovie", "rightImageWidth": 5, "text": "VIew Movie", "view": "DC.PushButton" },
    "header": { "rootTitle": "Menu", "view": "DC.Header" },
    "image": { "propertyValues": { "srcBinding": { "keypath": "*.image" } }, "view": "DC.ImageLayout" },
    "image1": { "propertyValues": { "srcBinding": { "keypath": "*.image" } }, "view": "DC.ImageLayout" },
    "image2": { "view": "DC.ImageLayout" },
    "label": { "propertyValues": { "textBinding": { "keypath": "*.name" } }, "text": "Item", "view": "DC.Text" },
    "list": { "allowsEmptySelection": true, "labelElementId": "rowTitle", "listStyle": "DC.List.EDGE_TO_EDGE", "propertyValues": { "dataArrayBinding": { "keypath": "dataSource.content.mainMenu" } }, "sampleRows": 8, "selectionEnabled": true, "useDataSource": true, "view": "DC.List" },
    "list1": { "allowsEmptySelection": true, "dataArray": ["Item 1", "Item 2", "Item 3"], "labelElementId": "label", "listStyle": "List.ROUNDED_RECTANGLE", "propertyValues": { "dataArrayBinding": { "keypath": "dataSource.content.imageSources" } }, "sampleRows": 3, "selectionEnabled": true, "useDataSource": true, "view": "DC.List" },
    "rowTitle": { "propertyValues": { "textBinding": { "keypath": "*.name" } }, "text": "Item", "view": "DC.Text" },
    "stackLayout": { "subviewsTransitions": [{ "direction": "right-left", "duration": "", "timing": "ease-in-out", "type": "push" }, { "direction": "right-left", "duration": "", "timing": "ease-in-out", "type": "push" }, { "direction": "right-left", "duration": "", "timing": "ease-in-out", "type": "push" }], "view": "DC.StackLayout" },
    "text": { "text": "Mobile", "view": "DC.Text" },
    "text1": { "text": "Sun", "view": "DC.Text" },
    "text2": { "text": "EIT 171Å 20100518 01:00", "view": "DC.Text" },
    "text3": { "text": "Click image for hi-res and details", "view": "DC.Text" },
    "text4": { "text": "Click image for hi-res", "view": "DC.Text" },
    "text5": { "text": "EIT 171Å 20100518 01:00", "view": "DC.Text" }
};


