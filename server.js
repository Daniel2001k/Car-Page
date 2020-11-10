const { app, connection } = require('./app');


const server = app.listen(app.get('port'), () => {
    console.log(`Listening at: ${ server.address().port }`);
});