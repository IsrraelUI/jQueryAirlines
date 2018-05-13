var resultset1;
var resultset2;
var setColumns = function (resultset, target){
    for(result in resultset){
        var template = '<div class="columns content"><div class="column">'+ resultset[result].airline +'</div><div class="column">'+ resultset[result].origin +'</div><div class="column">'+ resultset[result].destination +'</div></div>';
        target.append(template);
    }
}
$.ajax({
    type: "FlightTracker",
    url: "https://flighttracker.kobrekim.com/odata/odata.ashx",
    data: "data",
    dataType: "dataType",
    success: function (response) {
        // console.log(response)
    },
    error: function(){
        resultset1 =  [{
            "airline":"JetBlue",
            "departure_date": "8/21/2017 @ 16:24",
            "arrival_date":"8/21/2017 @ 19:24",
            "origin": "JFK",
            "destination":"LAX",
            "flight_number":"JBU1323"
        }];
        setColumns(resultset1, $('#flightsGrid'))
    }
});

$.ajax({
    type: "FlightTracker",
    url: "https://flighttracker.kobrekim.com/odata/odata.ashx",
    data: "data",
    dataType: "dataType",
    success: function (response) {
        // console.log(response)
    },
    error: function(){
        resultset2 = [{
            "airline":"Delta",
            "departure_date": "9/1/2017 @ 22:15",
            "arrival_date":"9/1/2017 @ 1:42",
            "origin": "LAX",
            "destination":"LGA",
            "flight_number":"DAL2787"
        }];
        setColumns(resultset2, $('#flightsGrid'))
    }
});