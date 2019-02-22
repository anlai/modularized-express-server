function createServer()
{
    const express = require('express');
    const app = express();
    
    return app;
}

function registerRoutes(app)
{
    app.get('/', (req, res) => res.send('Hello World!'));

    const packages = ['pkg', 'pkg2'];

    packages.forEach(p => {

        const pkg = require(p);
        let versions = pkg.routes.map(x=>x.actions.map(y=>y.version));
        versions = versions.reduce((a, b) => a.concat(b), []);

        pkg.routes.forEach(route => {

            const versionChecker = (req,res,next) => {
                const version = req.query.version;
                if (!versions.includes(version))
                {
                    res.status(400);
                    res.send(`Invalid api version.  Valid options are: ${versions.join(', ')}`)
                }
                else
                {
                    next();
                }
            };
        
            const router = (req,res,next) => {
                const version = req.query.version;
                const action = route.actions.find((element)=> element.version === version);
                action.action(req,res,next);
            };
           
            app.get(route.route, versionChecker, router);
        
        });

    });
}

async function run()
{
    const app = createServer();
    registerRoutes(app);

    const port = 3000;
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}

run();