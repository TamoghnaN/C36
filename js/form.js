//DOM - Documented Object Model

class Form{
constructor(){      //input, playButton, titleImage, greeting
this.input=createInput("").attribute("placeholder","Enter your name");
this.playButton = createButton("Play");
this.titleImg = createImg("./assets/title.png","game title");
this.greeting = createElement("h2");

}

setElementsPosition(){
    this.input.position(width/2-110,height/2-80);
    this.titleImg.position(120,50);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
}

setElementsStyle(){
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");            
}
hide(){
    this.input.hide();  
    this.greeting.hide();
    this.playButton.hide();
}
//function -->  ()=>
handleMousePressed(){
    this.playButton.mousePressed(()=>{
this.input.hide();
this.playButton.hide();
var message= `      
Hello ${this.input.value()}
</br>wait for another player to join...`;       //break
this.greeting.html(message);
    })
}

display(){
this.setElementsStyle();
this.setElementsPosition();
this.handleMousePressed();


}

}