
exports.routes = [
    {
        route: '/goodbyeworld',
        actions: [
            {
                version: '2019-01-01',
                action: goodbye
            },
            {
                version: '2019-02-01',
                action: goodbye2
            }
        ],
    }
];

function goodbye(req,res,next)
{
    res.json('goodbye world');
}

function goodbye2(req,res,next){
    res.json('goodbye cruel world');
}