const Discord = require("discord.js")
const config = require("./ayarlar.json")
const moment = require("moment")
const fs = require("fs")
const db = require("quick.db")
const chalk = require("chalk")

const client = new Discord.Client()
require('./util/Loader.js')(client)

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()


fs.readdir('./commands/', (err, files) => { 
  if (err) console.error(err);               
  console.log(`Komutlar Yükleniyor.`)
  files.forEach(f => {                    
    let props = require(`./commands/${f}`)
    console.log(`Komutlar Yüklendi.`)
    client.commands.set(props.config.name, props)
    props.config.aliases.forEach(alias => {       
      client.aliases.set(alias, props.config.name)
    });
  });
})



client.on("ready", () => {
    console.log(`
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
B o t   A k t i f
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
`) 
})


	
client.login(config.token)

/*


üst tarafa elleme! 

discord.gg/wasty


*/

