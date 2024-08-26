let columnIndex = 0;
const columns = 150; // Number of columns per row
const columnWidth = 200; // Width of each column (must match div width)
//var newDiv = {};
function addDiv() {
    let colorInput = document.getElementById("colorInput");
    let newDiv = document.createElement("div");

    newDiv.style.width = "200px";
    newDiv.style.height = "200px";
    //div color
    newDiv.style.backgroundColor = colorInput.value;
    let destinationDiv = document.getElementById("emptySpace");
    destinationDiv.appendChild(newDiv);

    //add border
    let selectElement = document.getElementById("borderStyleSelect");
    let selectedValue = selectElement.value;
    let borderStyleEfect = newDiv;// = document.createElement("div");
    borderStyleEfect.style.width = "200px";
    borderStyleEfect.style.height = "200px";
    borderStyleEfect.style.border = selectElement.value;
    let box = document.getElementById("box");
    box.style.borderStyle = selectedValue;
    let destinationDivBorder = document.getElementById("emptySpace");
    //var borderStyleEfect = document.appendChild(borderStyleEfect);
    destinationDivBorder.appendChild(borderStyleEfect);

    let emptySpace = document.getElementById("emptySpace");
    newDiv.style.margin = "2px 2px"; // Adjust gap between columns
    // newDiv.style.marginButton = "10px"; // Adjust gap between columns

    if (columnIndex >= columns) {
        columnIndex = 0;
        // Start a new row
        let br = document.createElement("div");
        br.style.clear = "both";
        emptySpace.appendChild(br);
    }

    newDiv.style.float = "left";
    newDiv.style.clear = "none";
    emptySpace.appendChild(newDiv);
    columnIndex++;

    //add height
    let selectHeight = document.getElementById("heightInput");
    let selectHeightValue = selectHeight.value;
    let heightValue = newDiv;
    heightValue.style.height = selectHeightValue + "px";
    let destinationDivHeight = document.getElementById("emptySpace");
    destinationDivHeight.appendChild(heightValue);

    //add text
    let selectText = document.getElementById("textInput");
    let selectTextValue = selectText.value;
    let textValue = newDiv;
    textValue.style.fontSize = "16px";
    textValue.style.color = "black";
    textValue.innerText = selectTextValue;

    let destinationDivText = document.getElementById("emptySpace");
    destinationDivText.appendChild(textValue);

    //add color text
    let selectColorText = document.getElementById("colorTextInput");
    let selectColorTextValue = selectColorText.value;
    let colorTextValue = newDiv;
    colorTextValue.style.color = selectColorTextValue;
    let destinationDivColorText = document.getElementById("emptySpace");
    destinationDivColorText.appendChild(textValue);

    //add font size to text
    let selectFontSize = document.getElementById("fontSizeInput");
    let selectFontSizeValue = selectFontSize.value;
    let fontSizeValue = newDiv;
    fontSizeValue.style.fontSize = selectFontSizeValue + "px";
    let destinationDivFontSize = document.getElementById("emptySpace");
    destinationDivFontSize.appendChild(fontSizeValue);


    //add width
    let selectWidth = document.getElementById("widthInput");
    let selectWidthValue = selectWidth.value;
    let widthValue = newDiv;
    widthValue.style.width = selectWidthValue + "px";
    let destinationDivWidth = document.getElementById("emptySpace");
    destinationDivWidth.appendChild(widthValue);

    //add shadow
    let selectShadow = document.getElementById("shadowInput");
    let selectShadowValue = selectShadow.value;
    let shadowValue = newDiv;
    shadowValue.style.boxShadow = selectShadowValue + "px";
    let destinationDivShadow = document.getElementById("emptySpace");
    destinationDivShadow.appendChild(shadowValue);

    //add radius
    let selectRadiusElement = document.getElementById("radiusInput");
    let selectRadiusValue = selectRadiusElement.value;
    let radiusValue = newDiv;
    radiusValue.style.borderStyle = selectRadiusValue;
    radiusValue.style.borderRadius = selectRadiusValue + "px";
    let destinationDivRadius = document.getElementById("emptySpace");

    destinationDivRadius.appendChild(radiusValue);
}

function resetAll() {
    // Clear all divs from #emptySpace
    let emptySpace = document.getElementById("emptySpace");
    emptySpace.innerHTML = '';
    // Reset all form inputs
    document.getElementById("colorInput").value = "#ff0000";
    document.getElementById("textInput").value = "";
    document.getElementById("widthInput").value = "200";
    document.getElementById("heightInput").value = "200";
    document.getElementById("colorTextInput").value = "#000000";
    document.getElementById("borderStyleSelect").value = "1px solid black";
    document.getElementById("fontSizeInput").value = "16";
    document.getElementById("shadowInput").value = "2px 2px 5px rgba(0,0,0,0.5)";
    document.getElementById("radiusInput").value = "0";
}

document.querySelector("#addBtn").addEventListener("click", addDiv);
document.querySelector("#resetBtn").addEventListener("click", resetAll);