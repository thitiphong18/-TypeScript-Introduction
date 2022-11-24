function printstatusCode(code: string|number) {
    console.log(`My status code is ${code} ${typeof code} `)
}

printstatusCode(404);
printstatusCode("404");
