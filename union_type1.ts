function printstatusCode(code: string|number) {
    if(typeof code === 'string') {
        console.log(`My status code is ${code.toUpperCase()} ${typeof code} `)
    } else {
        console.log(`My status code is ${code} ${typeof code} `)
    }
    
}

printstatusCode(404);
printstatusCode("abc");
