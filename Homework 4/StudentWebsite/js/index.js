$(document).ready(function() {    
    var apiKey = "d531c11bdd2ea87298063afd15d2dabb"; // Enter your API Key here
    console.log(`state_info is: ${state_info}`); // Notice the templating here, use that when you form your url

    // TODO
    // Iterate over the state_info array and call the api for each state_name to get the current temperature
    // Example to call the api using state_name
    // This should be done inside the for loop

    for (let state in state_info)
    {
        let state_obj = state_info[state];
        console.log(state_obj);

        let url = 'https://api.darksky.net/forecast/' + apiKey + '/' + state_obj.lat + ',' + state_obj.lng;

        $.ajax({url:url, dataType:"jsonp"}).then(function(data) {

            console.log(data);
            var temperature = data.currently.temperature;
            console.log(temperature);

            $('#' + state).css('fill', '#808080');

            if(temperature <= 10)
            {
                $('#' + state).css('fill', '#6495ED');
            }
            else if(temperature > 10 && temperature <= 20)
            {
                $('#' + state).css('fill', '#7FFFD4');
            }
            else if(temperature > 20 && temperature <= 30)
            {
                $('#' + state).css('fill', '#0000FF');
            }
            else if(temperature > 30 && temperature <= 40)
            {
                $('#' + state).css('fill', '#008B8B');
            }
            else if(temperature > 40 && temperature <= 50)
            {
                $('#' + state).css('fill', '#00BFFF');
            }
            else if(temperature > 50 && temperature <= 60)
            {
                $('#' + state).css('fill', '#F08080');
            }
            else if(temperature > 60 && temperature <= 70)
            {
                $('#' + state).css('fill', '#CD5C5C');
            }
            else if(temperature > 70 && temperature <= 80)
            {
                $('#' + state).css('fill', '#8B0000');
            }
            else if(temperature > 80 && temperature <= 90)
            {
                $('#' + state).css('fill', '#B22222');
            }
            else if(temperature >= 91)
            {
                $('#' + state).css('fill', '#FF0000');
            }
        });
    }
});