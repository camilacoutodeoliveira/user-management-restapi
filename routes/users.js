module.exports = (app) => {

    app.get('/users', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
            users: [{
                name: 'Camila',
                email: 'cah@gmail.com',
                id: 7
            }]
        });
    });

    app.post('/users', (req, res) => {
        res.json(req.body);
    });
};