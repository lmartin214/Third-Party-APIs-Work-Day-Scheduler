//add event listener for save button clicks
$(document).ready(function() {
    $(".saveBtn").click(function(){ 
        //created 
        let time = $(this).parent().attr("id");
        let task =  $(this).siblings('.description').val();
        localStorage.setItem(time, task);
    });

    //update hour to current with Moment
    function updateHour () {
        let presentHour = moment().hours(); 
        $(".time-block").each(function () {
            var hourBlock = parseInt($(this).attr('id').split('-')[1]);
            //make a loop for time blocks with unique class tags found in CSS
                if (hourBlock < presentHour) {
                $(this).addClass('past');
              } else if (hourBlock === presentHour) {
                $(this).removeClass('past');
                $(this).addClass('present');
              } else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
              }
        });
    }

    updateHour();
    // interval to keep current block updated with the current time
    let currentBlock = setInterval(updateHour, 5000 )
    // load any saved tasks from localStorage
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));

    //adding the display of date on top of page with moment.js
    $('#currentDay').text(moment().format('dddd, MMMM Do'))
});
