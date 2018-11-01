
var allAlertlock = false;
var bimAlert = {
    alertbox: function (alertContent) {
        console.log(allAlertlock);
        if (allAlertlock) {
            return;
        }else{
            allAlertlock = true;
        }
        var windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
        alertContainer = document.createElement("div");
        alertContainer.id = "myAlertBox";
        alertContainer.style.cssText = "position:absolute;left:0px;top:0px;width:100%;z-index:9999;";
        alertContainer.style.height = windowHeight + "px";
        alertOpacity = document.createElement("div");
        alertOpacity.style.cssText = "position:absolute;left:0px;top:0px;width:100%;background:#000;opacity:0.2;z-index:9999;";
        alertOpacity.style.height = windowHeight + "px";
        alertContainer.appendChild(alertOpacity)
        alertMainBox = document.createElement("div");
        alertMainBox.style.cssText = "color:rgb(38, 122, 121); border-radius: 5px;position:absolute;width:300px;height:150px;line-height:120px;text-align:center;background:#ffffff;z-index:10000;"
        alertMainBoxLeft = (windowWidth - 300) / 2;
        alertMainBoxTop = (windowHeight - 150) / 2;
        alertMainBox.style.left = alertMainBoxLeft + "px";
        alertMainBox.style.top = alertMainBoxTop + "px";
        alertMainBox.innerHTML = alertContent;
        alertContainer.appendChild(alertMainBox);

        alertClose = document.createElement("div");
        alertClose.id = "closeBox";
        alertClose.innerHTML = "×";
        alertClose.style.cssText = "color:rgb(8,161,156); font-size:18px ; position:absolute;right:0px;top:0px;width:30px;height:30px;line-height:30px; cursor:pointer";
        alertMainBox.appendChild(alertClose);


        alertSure = document.createElement("div");
        alertSure.id = "sureBox";
        alertSure.innerHTML = "确认";
        alertSure.style.cssText = " border: 1px solid rgb(8,161,156);color:rgb(38, 122, 121); border-radius: 5px;position:absolute;left:110px;top:105px;width:80px;height:26px;line-height:24px; font-size:14px ; cursor:pointer;";
        alertMainBox.appendChild(alertSure);


        document.body.appendChild(alertContainer);
        closeButton = document.getElementById("closeBox");
        closeButton.onclick = function () {
            allAlertlock = false;
            document.body.removeChild(document.getElementById("myAlertBox"));
        }
        alertSure = document.getElementById("sureBox");
        document.onkeydown = function (e) {
            allAlertlock = false;
            if ((e.keyCode || e.which) == 13) {
                $('#sureBox').click();
            }
        }
        alertSure.onclick = function () {
            allAlertlock = false;
            document.body.removeChild(document.getElementById("myAlertBox"));
        }
    },
    confirmbox: function (alertContent, surefunction) {
        var windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
        alertContainer = document.createElement("div");
        alertContainer.id = "myAlertBox";
        alertContainer.style.cssText = "position:absolute;left:0px;top:0px;width:100%;z-index:9999;";
        alertContainer.style.height = windowHeight + "px";
        alertOpacity = document.createElement("div");
        alertOpacity.style.cssText = "position:absolute;left:0px;top:0px;width:100%;background:#000;opacity:0.2;z-index:9999;";
        alertOpacity.style.height = windowHeight + "px";
        alertContainer.appendChild(alertOpacity)
        alertMainBox = document.createElement("div");
        alertMainBox.style.cssText = "color:rgb(38, 122, 121); border-radius: 5px;position:absolute;width:300px;height:150px;line-height:120px;text-align:center;background:#ffffff;z-index:10000;"
        alertMainBoxLeft = (windowWidth - 300) / 2;
        alertMainBoxTop = (windowHeight - 150) / 2;
        alertMainBox.style.left = alertMainBoxLeft + "px";
        alertMainBox.style.top = alertMainBoxTop + "px";
        alertMainBox.innerHTML = alertContent;
        alertContainer.appendChild(alertMainBox);

        alertClose = document.createElement("div");
        alertClose.id = "closeBox";
        alertClose.innerHTML = "×";
        alertClose.style.cssText = "color:rgb(8,161,156); font-size:18px ; position:absolute;right:0px;top:0px;width:30px;height:30px;line-height:30px; cursor:pointer";
        alertMainBox.appendChild(alertClose);


        alertSure = document.createElement("div");
        alertSure.id = "sureBox";
        alertSure.innerHTML = "确认";
        alertSure.style.cssText = " border: 1px solid rgb(8,161,156);color:rgb(38, 122, 121); border-radius: 5px;position:absolute;left:80px;top:105px;width:60px;height:26px;line-height:24px; font-size:14px ; cursor:pointer;";
        alertMainBox.appendChild(alertSure);

        alertCancel = document.createElement("div");
        alertCancel.id = "cancelBox";
        alertCancel.innerHTML = "取消";
        alertCancel.style.cssText = " border: 1px solid rgb(8,161,156);color:rgb(38, 122, 121); border-radius: 5px;position:absolute;left:160px;top:105px;width:60px;height:26px;line-height:24px; font-size:14px ; cursor:pointer;";
        alertMainBox.appendChild(alertCancel);


        document.body.appendChild(alertContainer);
        closeButton = document.getElementById("closeBox");
        closeButton.onclick = function () {
            document.body.removeChild(document.getElementById("myAlertBox"));
        }
        alertSure = document.getElementById("sureBox");
        alertSure.onclick = function () {

            document.body.removeChild(document.getElementById("myAlertBox"));
            if (surefunction != null) {
                surefunction();
            }
        }

        cancelBox = document.getElementById("cancelBox");
        cancelBox.onclick = function () {
            document.body.removeChild(document.getElementById("myAlertBox"));
        }

    },
    fhAlertbox: function (alertContent) {
        var windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
        alertContainer = document.createElement("div");
        alertContainer.id = "myAlertBox";
        alertContainer.style.cssText = "position:absolute;left:0px;top:0px;width:100%;z-index:9999;";
        alertContainer.style.height = windowHeight + "px";
        alertOpacity = document.createElement("div");
        alertOpacity.style.cssText = "position:absolute;left:0px;top:0px;width:100%;background:#000;opacity:0.2;z-index:9999;";
        alertOpacity.style.height = windowHeight + "px";
        alertContainer.appendChild(alertOpacity)
        alertMainBox = document.createElement("div");
        alertMainBox.style.cssText = "color:rgb(38, 122, 121); border-radius: 5px;position:absolute;width:350px;height:180px;background:#ffffff;z-index:10000;padding: 30px 15px;"
        alertMainBoxLeft = (windowWidth - 300) / 2;
        alertMainBoxTop = (windowHeight - 150) / 2;
        alertMainBox.style.left = alertMainBoxLeft + "px";
        alertMainBox.style.top = alertMainBoxTop + "px";
        alertMainBox.innerHTML = alertContent;
        alertContainer.appendChild(alertMainBox);

        alertClose = document.createElement("div");
        alertClose.id = "closeBox";
        alertClose.innerHTML = "×";
        alertClose.style.cssText = "color:rgb(8,161,156); font-size:18px ; position:absolute;right:0px;top:0px;width:30px;height:30px;line-height:30px; cursor:pointer";
        alertMainBox.appendChild(alertClose);


        alertSure = document.createElement("div");
        alertSure.id = "sureBox";
        alertSure.innerHTML = "确认";
        alertSure.style.cssText = " border: 1px solid rgb(8,161,156);color:rgb(38, 122, 121); border-radius: 5px;position:absolute;left:135px;top:135px;width:80px;height:26px;line-height:24px; font-size:14px ; cursor:pointer;text-align: center;";
        alertMainBox.appendChild(alertSure);


        document.body.appendChild(alertContainer);
        closeButton = document.getElementById("closeBox");
        closeButton.onclick = function () {
            document.body.removeChild(document.getElementById("myAlertBox"));
        }
        alertSure = document.getElementById("sureBox");
        alertSure.onclick = function () {
            document.body.removeChild(document.getElementById("myAlertBox"));
        }
    }
}  
