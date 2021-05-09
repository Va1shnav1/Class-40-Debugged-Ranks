class Form {
    constructor(){
        this.title = createElement("H1");
        this.L1 = createElement("H2");
        this.input = createInput("Enter Name Here");
        this.button = createButton("PLAY");
        this.greeting = createElement("H2");
        this.reset = createButton("RESET");
    }
    hide(){
            this.L1.hide();
            this.input.hide();
            this.button.hide();
    }
    display(){ 
        this.title.position(displayWidth/2, 50);
        this.title.html("Multiplayer Car Racing");
        
        this.L1.position(displayWidth/2-50, displayHeight/2);
        this.L1.html("Enter your name");
        
        this.input.position(displayWidth/2+30, displayHeight/2);
        
        this.button.position(displayWidth/2, displayHeight/2+100);
        this.reset.position(displayWidth-30, 50)
        this.greeting.position(displayWidth/2-50, displayHeight/2);

        this.button.mousePressed(()=>{
            this.L1.hide();
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            pCount++;
            player.index=pCount;
            player.update();
            player.updateCount(pCount);
            this.greeting.html("Welcome " + player.name);
        })
        this.reset.mousePressed(()=>{
            database.ref('/').update({
                Players:null,
                gameState:0,
                playerCount:0,
                finishedPlayers:0
            })
        })
    }
}