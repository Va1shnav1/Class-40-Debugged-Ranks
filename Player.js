class Player{
    constructor(){
        this.index = null
        this.distance=0
        this.name= null
        this.rank=0
    }
    update(){
        var playerIndex = "Players/Player" + this.index
        database.ref(playerIndex).set({
            Name:this.name,
            Distance:this.distance,
            Rank:this.rank
        })
    }
    updateCount(Count){
        database.ref('/').update({
            playerCount:Count
        })
    }
    getCount(){
      var countRef = database.ref("playerCount");  
      countRef.on("value", (data)=>{
        pCount = data.val();
      })

    }
    static getPlayerInfo(){
        var playerInfoRef = database.ref('Players');
        playerInfoRef.on("value", (data)=>{
            allPlayers = data.val();
        })
    }
    static updateFinishedPlayers(){
        database.ref('/').update({
            finishedPlayers:finishedPlayers+1
        })
        this.rank+=1
    }
    getFinishedPlayers(){
        var playerRef = database.ref("finishedPlayers");
            playerRef.on("value", (data)=>{
            finishedPlayers = data.val();
        })
    }
}