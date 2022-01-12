class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }
  static getPlayersInfo(){
var playerInforef=database.ref("players")
playerInforef.on("value",(data)=>{
  allPlayers=data.val()
})

  }

   addPlayer() {
    var playerIndex = "players/player" + this.index;

    if (this.index === 1) {
      this.positionX = width / 2 - 100;
    } else {
      this.positionX = width / 2 + 100;
    }


  }
  updatePosition(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
     
      positionX: this.positionX,
      positionY: this.positionY,
    });

  }
  //TA
  getDistance() {
    var playerDistanceRef = database.ref("players/player" + this.index);
    playerDistanceRef.on("value", data => {
      var data = data.val();
      this.positionX = data.positionX;
      this.positionY = data.positionY;
    });
  }
 
  //Bp
  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }

  //Bp
  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }}
