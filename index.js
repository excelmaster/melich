const app = require('./src/app');

async function main() {
    await app.listen(app.get('port'));
    console.log(`'puerto ' ${app.get('port')}`);
}

main();
