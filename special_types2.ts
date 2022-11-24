let w: unknown = 1;
w = "string";
w = {
    runANonExistMethod: () => {
        console.log("I think therefore I am")
    }        
} as { runANonExistMethod: () => void }

if(typeof w === 'object' && w!== null ) {
    (w as {runANonExistMethod: () => void}).runANonExistMethod();
}