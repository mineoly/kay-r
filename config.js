const config = {
  TOKEN: "ODM1MDM2NjczOTg1MDg1NDUx.YIJmgQ.YCXUfJ05NMC1n1YxJHiW8NYopm4", //Glitchde Kullanacak iseniz .env Dosyasına Tokeni Yazın!

  prefix: "b!",
  guild: "866065868991365171", //Sunucu ID Yazın
  channel: "910467658955251742", //Başvuru Yap Mesajının Atılacağı Kanal ID Yazın

  log: {
    staff: "866066065602904094", //Başvuru Onaylayıp-Reddedecek Yetkili Rol ID Yazın!
    channel: "910467678932721694" //Başvuruların Loglanacağı Kanal ID Yazın
  },

  sonuc: {
    staffRole: ["919176338315833374"], //Sunucunuzdaki Başlangıç Yetkili Rolü veya Rolleri, Birden Fazla Rol Eklemek İçin ["rol id 1", "rol id2"] Başvuru Onaylanınca Buraya Yazılan Rol veya Roller Kullanıcıya Verilecek
    sRole: "919174574325784606", //Verilecek En Düşük Yetkili Rol ID Yazın
    successMessage: "Hey Tebrikler Yetkili Oldun!", //Başvuru Onaylanınca Kullanıcıya Atılacak Mesajı Yazın
    deleteMessage: "Üzgünüm Başvurun Reddedildi!", //Başvuru Reddedilince Kullanıcıya Atılacak Mesajı Yazın
    timeout: 1209600000 //Başvurusu Reddedilen Birisi Nekadar Süre Sonra Başvuru Yapa Bilsin? 1000=1 Saniye (Milisaniye Türünden Yazın)
  },

  embed: {
    title: "İs1mS1z Yetkili Olma Şartları", //Başvuru Mesajı Başlık Kısmında Yazmasını İstediğiniz Şey
    color: "BLUE", //Embed Rengi, Örnek: BLUE,RED,YELLOW,GREEN Olarak veya Direkt #ff00ff Gibi Renk Kodu Yazın
    description: "Yetkili Başvurusu Yapa Bilmek İçin Lütfen Aşşağıdaki Butona Basınız!" //Başvuru Mesajı Açıklama Kısmında Yazmasını İstediğiniz Şey
  },

  sorular: ["İsminiz Nedir?", "Yaşınız Nedir?", "Yetkili Olduğunuz Sunucu Sayısı Kaçtır?", "Günde Ortalama Aktiflik Seviyeniz Nedir?", "Neden Yetkili Olmak İstiyorsunuz?", "Aktifliğinizi Engelleyecek Durumlar Nelerdir?", "Discord Hakkında Neler Biliyorsunuz? Detaylı Şekilde Anlatınız", "Yetkinizi Kötüye Kullanmıyacağınıza Dair Yemin Edebilir Misiniz?", "Kişileri Gereksiz Banlamak,Uyarı Vermek,Sunucudan Atmak,Mutelemek,Jaillemek Gibi Şeyler Yapıcak Mısınız?", "Size Verilen Yetkiyi İntikam İçin Kullanmıyacağınıza Dair Yemin Eder Misiniz?"] //Sorulacak Sorular
};

module.exports = config;
