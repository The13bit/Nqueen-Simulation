const canvas=document.getElementById("canvas")
canvas.width=400
canvas.height=400
const ctx=canvas.getContext("2d")

const cellSize=50
let done=true
let n=4;
let lock=new AsyncLock()
const StartBtn=document.querySelector(".start-btn")
const StopBtn=document.querySelector(".stop-btn")
const SetBtn=document.querySelector(".set-btn")
const delaybox=document.querySelector(".delay-box")

let delay=100
SetBtn.addEventListener('click',function(){
    delay=Number.parseInt(delaybox.value)
})

StartBtn.addEventListener('click',function(){
    lock.disable()
    StartBtn.disabled=true
    StopBtn.disabled=false
    if(done){
    Solve()
    }
})
StopBtn.disabled=true
StopBtn.addEventListener('click',function(){
    lock.enable()
    done=false
    StartBtn.disabled=false
    StopBtn.disabled=true
    
})
let board=new Board(n,canvas.width)
const arr=Array(n).fill().map(()=>Array(n).fill(0))
board.RenderBoard(arr)

document.getElementById('n').addEventListener('input', function() {
    document.querySelector('span').textContent = 'n:' + this.value;
    n=Number.parseInt(this.value)

        canvas.width=(50*n<400)?400:50*n
        canvas.height=(50*n<400)?400:50*n
    
    board=new Board(n,canvas.width,ctx)
    const arr=Array(n).fill().map(()=>Array(n).fill(0))
    board.RenderBoard(arr,ctx)
});



const sleep=(ms)=>new Promise((resolve,reject)=>{
    setTimeout(resolve,ms)
})
async function Solve(){
    const solver=new NQueen(n)
    for await(let i of solver.nqueen(0)){
        await lock.promise
        const tmpboard=Array(n).fill().map(()=>Array(n).fill(0)) 
        console.log(i)
        await sleep(delay)
        for(let j=0;j<n;j++){
            if (i[j]==-1){
                continue
            }
            tmpboard[i[j]][j]=1
        }
        board.RenderBoard(board,ctx)
        board.RenderQueen(tmpboard,ctx)
    }
    done=true
    StartBtn.disabled=false
    StopBtn.disabled=true
}





