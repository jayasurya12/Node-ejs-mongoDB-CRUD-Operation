
$("#add_user").submit(function(event){
    alert("Data Inserted Successfully");
});

$("#update_user").submit(function(event){
    event.preventDefault();
    var indexed_array = $(this).serializeArray();
    console.log(indexed_array);
    var data={}
    $.map(indexed_array,function(e,l){
        console.log(e);
        data[e['name']] = e['value']
    });

    var request = {
        'url':`http://localhost:5000/api/users/${data.id}`,
        'method':'PUT',
        "data":data
    }
    $.ajax(request).done(function(request){
        alert("Data Updated Successfully")
    })

})

if(window.location.pathname =='/'){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id= $(this).attr("data-id");
        var request={
            'url':`http://localhost:5000/api/users/${id}`,
            'method':'DELETE'
        }
        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully");
                location.reload();
            })
        }
    })
}