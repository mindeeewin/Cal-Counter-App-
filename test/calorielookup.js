//
function calorielookupapi(){
    var query= '1lb brisket and fries';
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/nutrition?query=' + query,
        headers: { 'X-Api-Key': 'T3RdfpebuPAxVxdbA5AuUvcQgBbKHPLJiidRx0ba'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}