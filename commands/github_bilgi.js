const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "github_bilgi",
    description: "Github bilgilerini gösterir.",
    type: 1,
    options: [
        {
            name: "github_ad",
            description: "Bilgisini görmek istediğin github kullanıcısının adı.",
            type: 3,
            required: true
        }
    ],
    run:async(client,interaction) => {
        let name = interaction.options.getString("github_ad");
        const x = await fetch(`https://api.metehanstudio.xyz/api/github-kullanici-bilgi/${name}?api_key=metehanfreekey`);
        const data = await x.json();

        const datas1 = data.login;
        const datas2 = data.name
        const datas3 = data.bio
        const datas4 = data.public_repos
        const datas5 = data.followers
        const datas6 = data.following
        const veri = ` https://github.com/${datas1 || " Veri Alınamadı"}`
        let embed = new EmbedBuilder()
        .setColor("Green")
        .setAuthor({ name: "Github 🐈‍⬛"})
        .setDescription(`Github kullanıcı linki: **${veri}**\nGithub kullanıcı adı: **${datas1 || "Veri alınamadı"}**\nGithub takma adı: **${datas2 || "Veri alınamadı"}**\nGithub biyografi: **${datas3 || "Veri alınamadı"}**\nGithub proje sayısı: **${datas4 || "Veri alınamadı"}**\nTakipçi sayısı: **${datas5 || "Veri alınamadı"}**\nTakip ettiği kullanıcı sayısı: **${datas6 || "Veri alınamadı"}**`)

        interaction.reply({
            embeds: [embed]
        });
    }
}