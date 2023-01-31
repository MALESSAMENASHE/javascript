
let lastRenderTime=0;
function main(currentTime){
    window.requestAnimationFrame(main)
    const secondSinceLastRender =(curentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender <1 /SNAKE_SPEED) return ;

    lastRenderTime = currentTime;
    console.log(currentTime)
    update()
    draw()
}
export const SNAKE_SPEED =1;
const snakeBody =[{x:11,y:11}];

window.requestAnimationFrame(main)     

export function update(){
    console.log("update snake")
}
export function draw(){
    snakeBody.forEach(segment =>{
        const snakeElement =document.createElement('div');
        snakeElement.style.gridRowStart =segment.x;
        snakeElement.style.gridRowStart =segment.y;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })
    
}