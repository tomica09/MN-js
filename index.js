const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
	console.log(`${client.user.tag}을 로그인 했습니다!`);
})

client.on('message', msg => {
    if(msg.content === "주사위ㄱ"){
      const random = Math.floor(Math.random() * 6 + 1);
      const embed = new Discord.MessageEmbed()
        	.setColor('#00fdc3')
        	.setTitle(`${random}`)
        	.addField('↑주사위 결과', 'MN봇 만들기, 이번엔 열심히 할게요....')
      msg.channel.send(embed)
    }
});

client.login('토큰');
