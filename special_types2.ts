let w: unknown = 1;
w = "string";
w = {
    runANonExistMethod: () => {
        console.log("I think therefore I am")
    }        
} as { runANonExistMethod: () => void }