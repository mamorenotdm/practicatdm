import app from './config/express';

const main = (): void => {
    app.listen(app.get('port'));
    console.log("Server running in port 3000");
}

main();