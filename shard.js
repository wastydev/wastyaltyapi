const { ShardingManager } = require('discord.js');

const bumbe = new ShardingManager('./wasty.js', {
	totalShards: 1, //Auto yazılabilir veya farklı bir sayı yazabilirsiniz.
    token: "" //Tokeninizi giriniz
});
bumbe.spawn();

bumbe.on('shardCreate', shard => {
    console.log(`Shard başlatıldı!`);
});