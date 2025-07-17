const args = process.argv[2];
const num = parselnt(args);

if (!isNaN(num)) {
    console.log(`My number: ${num}`);
} else {
    console.log('Not a number');
}