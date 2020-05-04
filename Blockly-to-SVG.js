function exportSVG(){
    canvas = Blockly.mainWorkspace.svgBlockCanvas_.cloneNode(true);

    if (canvas.children[0] !== undefined) {
        canvas.removeAttribute("transform");

        var cssContent = Blockly.Css.CONTENT.join('');

        var css = '<defs><style type="text/css" xmlns="http://www.w3.org/1999/xhtml"><![CDATA[' + cssContent + ']]></style></defs>';

        var bbox = document.getElementsByClassName("blocklyBlockCanvas")[0].getBBox();
        var content = new XMLSerializer().serializeToString(canvas);

        var xml = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'
            + bbox.width + '" height="' + bbox.height + '" viewBox=" ' + bbox.x + ' ' + bbox.y + ' ' + bbox.width + ' ' + bbox.height + '">' +
            css + '">' + content + '</svg>';


        let element = document.createElement('a')
        blow = new Blob([xml], { type: 'image/svg+xml;base64' });
        element.href = URL.createObjectURL(blow);
        element.download = 'bloques.svg';
        element.click();
    }
}

exportSVG()
