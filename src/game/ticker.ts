let startTime=Date.now()
type Ticker=Function
const tickers:Array<Ticker>=[]
export function addTicker(ticker:Ticker){
    tickers.push(ticker)
}

requestAnimationFrame(handleFrame)

function handleFrame(){
    tickers.forEach(ticker => {
        ticker(Date.now()-startTime);
    });
    startTime=Date.now()
    requestAnimationFrame(handleFrame)
}