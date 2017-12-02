if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: 'mongodb://admin:admin@cluster0-shard-00-00-a7flt.mongodb.net:27017,cluster0-shard-00-01-a7flt.mongodb.net:27017,cluster0-shard-00-02-a7flt.mongodb.net:27017/vidjot-dev?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'}
} else {
    module.exports = {mongoURI: 'mongodb://admin:admin@cluster0-shard-00-00-a7flt.mongodb.net:27017,cluster0-shard-00-01-a7flt.mongodb.net:27017,cluster0-shard-00-02-a7flt.mongodb.net:27017/vidjot-dev?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'}
}