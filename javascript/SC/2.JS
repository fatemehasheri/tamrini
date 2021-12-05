const loglevel= {
    INFO:Symbol('Important information :o'),
    ERR:Symbol('Houston,we Have a problem!')
}

function logType1(logType,message) {
    switch (logType) {
        case loglevel.INFO:
            console.log('Info: '+ message)
            break;
        case loglevel.ERR:
            console.log('Error: '+message)
            break;
        default:
            throw "Invalid log type"
    }
}
logType1(loglevel.INFO ,'Important information :o')
logType1(loglevel.ERR ,'Houston,we Have a problem!')
