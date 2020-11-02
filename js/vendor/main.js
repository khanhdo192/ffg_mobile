var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

function getAvatarCategory(id) {

    switch(Number(id)) {
        case 1:
            return 'img/Education.svg';
        case 2:
            return 'img/Fashion.svg';
        case 3:
            return 'img/Gourmet.svg';
        case 4:
            return 'img/Community.svg';
        case 5:
            return 'img/Wellness.svg';
        case 6:
            return 'img/Living-Room.svg';
        case 7:
            return 'img/Gifting.svg';
        case 8:
            return 'img/Pantry.svg';
        case 9:
            return 'img/Education-Training.svg';
        case 10:
            return 'img/Management.svg';
        case 11:
            return 'img/Community-B2B.svg';
        case 12:
            return 'img/Business.svg';
        default:
        return;
    }

}