var kullanicilar = [];
var kullanici_id;

kullanici_id = prompt("Lütfen Kullanıcı Adınızı Giriniz : ");
/* kullanicilar.push(kullanici_id); push dizi sonuna eleman eklemek için kullanılır */
kullanicilar.unshift(kullanici_id); //unshift dizinin başına eleman eklemek için kullanılır
console.log(`
    ${kullanicilar[0]} Başarılı bir şekilde kayıt oldu

`    );