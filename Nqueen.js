class NQueen{
    constructor(n){
        this.n=n
        this.board=Array(n).fill().map(()=>Array(n).fill(0))
        this.flattenedBoard=Array(n).fill(-1)
        this.done=false
        
    }

    isSafe(k,j){
        for(let i=0;i<k;i++){
            if(this.flattenedBoard[i]==j || Math.abs(this.flattenedBoard[i]-j)==Math.abs(i-k)){
                return false
            }
        }
        return true
    }

    async *nqueen(i){
        for(let j=0;j<this.n;j++){
            let tmp=this.flattenedBoard[i]
            
            this.flattenedBoard[i]=j
            yield this.flattenedBoard
           
            this.flattenedBoard[i]=tmp

            if(this.isSafe(i,j)){
                this.flattenedBoard[i]=j
                yield this.flattenedBoard
                if(i==this.n-1){
                    this.done=true
                    return true
                }
                
                yield* this.nqueen(i+1)
                this.flattenedBoard[i]=-1
                

            }
            if(this.done){
                return true
            }
        }
    }

}