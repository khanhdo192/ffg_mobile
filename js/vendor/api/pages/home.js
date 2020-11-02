function getHomePage() {
    $.ajax({
        type: 'GET',
        url: BASE_URL + '/home',
        dataType: 'JSON',
        beforeSend: function() {
        },
        success: function(response, textStatus, jqXHR) {
            console.log(response)

        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr);
            console.log(thrownError);
        },
        complete: function () {
        }
    });
}

function getHappenings() {
    $.ajax({
        type: 'GET',
        url: BASE_URL + '/happenings',
        dataType: 'JSON',
        beforeSend: function() {
        },
        success: function(response, textStatus, jqXHR) {
            console.log(response)

        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr);
            console.log(thrownError);
        },
        complete: function () {
        }
    });
}