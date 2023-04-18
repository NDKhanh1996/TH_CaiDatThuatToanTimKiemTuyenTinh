function find(input: Array<number>) {
    for (let i = 1; i <= input[input.length - 1]; i++) {
        if (input.indexOf(i) === -1){
            console.log(i)
        }
    }
}

let input: Array<number> = [1, 2, 5, 6, 7, 10]
find(input)
