    // var button = document.getElementsByTagName("button")[0];
    
    // button.addEventListener("click", function (){console.log("I was clicked")});

    var button = document.getElementById("enter");
    var input = document.getElementById("userinput");
    var ul = document.querySelector("ul");
    var li = document.querySelector("li");

    
    function inputLength() {
        return input.value.length;
    };

    function createListElement() {
        var li = document.createElement("li");
        var but = document.createElement("button");
        li.appendChild(document.createTextNode(input.value + " "));
        but.appendChild(document.createTextNode("Delete"));
        li.appendChild(but);
        ul.appendChild(li);
       
        input.value = "";

     
    };


    function addClick() {
        if(inputLength() > 0) {
           createListElement();
          
        }
        
    };

    function addPress(event) {
        if(inputLength() > 0 && event.keyCode === 13) {
           createListElement();
       
        }
        
    };
    
    function LineThrough (event){
        event.target.classList.toggle("done");
    }


    function removeEntry(removeEvent){
        if(removeEvent.target.localName === "button"){
            removeEvent.target.parentNode.remove();
        }
    }

 

    ul.addEventListener("click", LineThrough);

    ul.addEventListener("click", removeEntry)

    button.addEventListener("click", addClick);

    input.addEventListener("keypress", addPress);