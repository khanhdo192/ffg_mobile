function openOverlayMenu() {
    document.getElementById("overlayMenu").style.width = "100%";
}

function closeOverlayMenu() {
    document.getElementById("overlayMenu").style.width = "0%";
}

//var BASE_URL = 'https://virtserver.swaggerhub.com/tranthanglong/festival-for-good/1.1.0';
var BASE_URL = 'https://backend.festivalforgood.sg/api';


function getChatSrc() {
    if (typeof(Storage) !== "undefined" && localStorage.getItem("DEFAULT_CHAT_SRC") != null) {
        return localStorage.getItem("DEFAULT_CHAT_SRC");
    } else {
        $.ajax({
            url: BASE_URL + "/home",
            success: function (result) {
                if (result) {
                    if (typeof(Storage) !== "undefined") {
                        localStorage.setItem("DEFAULT_CHAT_SRC", result.supportChat);
                    }
                    return result.supportChat;
                }
            }
        });
    }
}

function initChat(chatSrc) {
    if (typeof chatSrc == 'undefined') {
        chatSrc = getChatSrc();
    }
    const script = document.createElement('script')
    script.id = 'tawkId'
    script.async = true
    script.src = chatSrc
    script.charset = 'UTF-8'
    script.setAttribute('crossorigin', '*')

    const container = document.getElementsByTagName('body')[0];
    if (!container) {
        return null;
        // throw new Error('DOM is unavailable')
    }


    container.appendChild(script);

    if (!window) {
        return null;
        // throw new Error('DOM is unavailable')
    }

    window.$_Tawk = {};
    window.Tawk_API = {};
    window.Tawk_LoadStart = new Date();

    // pass attributes to tawk.to on widget load
    window.Tawk_API.onLoad = () => {
        window.Tawk_API.hideWidget();
    }

    window.Tawk_API.onChatMinimized = function () {
        setTimeout(() => {
            window.Tawk_API.hideWidget();
            console.log('onChatMinimized')
        });
    };

    const tawk = document.getElementById('tawkId')
    if (tawk) {
        // Prevent TawkTo to create root script if it already exists
        return window.Tawk_API
    }
}

$(document).ready(function () {
    initChat();
    $('body').on('click', '.img-ask', function () {
        if (Tawk_API) {
            if (Tawk_API.isChatHidden()) {
                Tawk_API.showWidget();
                Tawk_API.maximize();
            } else {
                Tawk_API.hideWidget();
            }
        }
    });
});

