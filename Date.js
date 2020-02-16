let dates = ["20 Sep 1958", "25 May 1912", "08 Jun 1933", "12 Jun 1988", "16 Jun 1991", "20 Jun 1903", "24 Jun 1928"]

let newDates = [];
let dateString = [];

    for (let i = 0; i < dates.length; i++) {
        newDates[i] = new Date(dates[i]);
    }

    newDates.sort(function(a, b){
        return a - b
    });

    console.log(newDates);

    for (let i = 0; i < dates.length; i++) {
        dateString[i] = newDates[i].toDateString().split(' ').slice(1).join(' ');
    }

    console.log(dateString);