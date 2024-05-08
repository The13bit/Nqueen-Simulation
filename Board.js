class Board{
    constructor(n,width=400){
        
        this.width=width
        this.n=n
        this.cellSize=width/n
        this.queen=new Image()
        this.queen.src="queen.png"
    }
    RenderBoard(board){
        for(let i=0;i<this.n;i++){
            for(let j=0;j<this.n;j++){
                if((i+j)%2==0){
                    ctx.fillStyle='#FFCE9E'
                }else{
                    ctx.fillStyle='#D18B47'
                }
                ctx.fillRect(i*this.cellSize,j*this.cellSize,this.cellSize,this.cellSize)
            }
        }

    }
    RenderQueen(board,ctx){
        for(let i=0;i<this.n;i++){
            for(let j=0;j<this.n;j++){
                //this.ctx.clearRect(0,0,this.width,this.width)

                if(board[i][j]==1){
                   ctx.fillStyle='red'
                    ctx.drawImage(this.queen,i*this.cellSize,j*this.cellSize,this.cellSize,this.cellSize)
                   //ctx.fillRect(i*this.cellSize,j*this.cellSize,this.cellSize,this.cellSize)
                }
            }
        }
    }
}