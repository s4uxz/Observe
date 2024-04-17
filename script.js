$(document).ready(function() {
    $('#myForm').submit(function(event) {
        event.preventDefault();
        var formData = {
            'name': $('#name').val(),
            'state': $('#state').val()
        };
        $.ajax({
            type: 'POST',
            url: 'https://script.google.com/macros/s/AKfycbwMFIDYUrPnmOERd6bBfHWcq4Dci3-V5LSEwQ428uCzhlI8TKlnaqgFFp9qwX8NH6ji/exec',
            data: JSON.stringify(formData),
            contentType: 'application/json',
            success: function(response) {
                window.location.replace('https://www.youtube.com/shorts/c4tL6_6lpSA');
            },
            error: function(error) {
                console.error('Error:', error);
            }
        });
    });
});
