//Kullanıcıdan ismini girmesini istyoruz.//

let myname = prompt("İsminizi girin.");
document.querySelector("#myName").innerHTML = myname;
if(myname == "")
    alert("İsminizi girmeyi unuttunuz.");


  

//Ay Gün ve Sattin Secilmesi//

function showTime() {
    let myClock = document.querySelector("#myClock");
    let myDate = document.querySelector("#myDate");
    let date = new Date();
    let sec = date.getSeconds();
    let min = date.getMinutes();
    let hour = date.getHours();
    let day = date.getDate();
    let dayName = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    //Günün Secilmesi//
   
    if (dayName == 0) {
        dayName = "Pazartesi";

        }else if (dayName == 1) {
            dayName = "Salı";

        }else if (dayName == 2) {
            dayName = "Çarşamba";

        }else if (dayName == 3) {
            dayName = "Perşembe";

        }else if (dayName == 4) {
            dayName = "Cuma";

        }else if (dayName == 5) {
            dayName = "Cumartesi";

        }else if (dayName == 6) {
            dayName = "Pazar";

        }


    //Ayın secilmesi//
    switch (month) {
        case 0:
            month = "Ocak";
            break;
        case 1:
            month = "Şubat";
            break;
        case 2:
            month = "Mart";
            break;
        case 3:
            month = "Nisan";
            break;
        case 4:
            month = "Mayıs";
            break;
        case 0:
            month = "Haziran";
            break;
        case 0:
            month = "Temmuz";
            break;
        case 0:
            month = "Ağustos";
            break;
        case 0:
            month = "Eylül";
            break;
        case 0:
            month = "Ekim";
            break;
        case 0:
            month = "Kasım";
            break;
        case 0:
            month = "Aralık";
            break;
    }

    sec = sec < 10 ? "0" + sec : sec;
    min = min < 10 ? "0" + min : min;
    hour = hour < 10 ? "0" + hour : hour;


    myClock.innerHTML = hour + ":" + min + ":" + sec;
    myDate.innerHTML = day + "/" + month + "/" + year + " " + "<u>" + dayName + "</u>";

    setTimeout(showTime, 1000);
}
showTime();


