function generate_new_degree_section(section) {
    console.log('name:', section['name']);
    console.log(section['req_list']);
}

$(function() {
    var degree_list = [ ];
    $.ajax({
        url: "http://localhost:3000/getDegreeList",
    }).done(function(data) {
        degree_list = data;
        $( "#degree-search" ).autocomplete({
            source: data
        });
    });

    $('#degree-search').keyup(function(e){
        if(e.keyCode == 13) {
            console.log('pressed enter');
            if(degree_list.indexOf($('#degree-search').val()) > -1) {
                $.ajax({
                    url: "http://localhost:3000/getDegreeSheet",
                    data: {
                        degree: $('#degree-search').val(),
                    }
                }).done(function(data) {
                    console.log(data);
                    console.log(data['name']);
                    
                    for (i = 0; i < data['sect_reqs'].length; i++) {
                        generate_new_degree_section(data['sect_reqs'][i]);
                    }
                });
            } else {
                alert('Please Enter a Valid Major');
            }
        }
    });
});