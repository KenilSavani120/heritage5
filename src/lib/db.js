const { username, password } = process.env;
export const connectionSrt = 
"mongodb://"+username+":"+password+"@ac-tejbxn5-shard-00-00.whakfbh.mongodb.net:27017,ac-tejbxn5-shard-00-01.whakfbh.mongodb.net:27017,ac-tejbxn5-shard-00-02.whakfbh.mongodb.net:27017/?ssl=true&replicaSet=atlas-6fdqpf-shard-0&authSource=admin&retryWrites=true&w=majority"
// "mongodb://"+username+":"+password+"@ac-tejbxn5-shard-00-00.whakfbh.mongodb.net:27017,ac-tejbxn5-shard-00-01.whakfbh.mongodb.net:27017,ac-tejbxn5-shard-00-02.whakfbh.mongodb.net:27017/?ssl=true&replicaSet=atlas-6fdqpf-shard-0&authSource=admin&retryWrites=true&w=majority"