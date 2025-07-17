const count = parseInt(ProcessingInstruction.argv[2]);

if (isNaN(count)) {
    console.log('Missing number of occurencies');
} else{
    for (let i = 0; i < count; i++) {
        console.log('C is fun');
    }
}