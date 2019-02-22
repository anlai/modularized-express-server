
exports.routes = [
    {
        route: '/helloworld',
        actions: [
            {
                version: '2019-01-01',
                action: helloworld
            },
            {
                version: '2019-02-01',
                action: helloworld2
            }
        ]
    }
];

function helloworld(req,res,next)
{
    res.json('hello world');
}

function helloworld2(req,res,next){
    res.json('hello world 2');
}