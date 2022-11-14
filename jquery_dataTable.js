//Add the row in a table
var i = 0;

$(document).ready( function () {
  dataTable = $('#list').DataTable();
} );

function addData() {

    editDataTable = "i_" + i++;
    // i = i+1;

    let ID = $("#ID").val();
    let ITEM = $("#ITEM").val();
    let date = $("#date").val();
    let category = $("#category");

    if ((ID != "") && (ITEM != "") && (date != "") && (category != "")) {
        console.log(ID);
        console.log(ITEM);
        console.log(category);
        let action= `<button class = "btn btn-link mt-2 shadow-none text-primary" id = "es" ><i class="fa fa-edit"></i></button>
					<button class = "btn btn-link mt-2 shadow-none text-danger" data-bs-toggle="modal" data-bs-target="#deleteModel" id = "et" ><i class="fa fa-trash-o"></i></button>
                    <button class = "btn btn-link mt-2 shadow-none text-primary" id = "view_data" data-bs-toggle="modal" data-bs-target="#viewModel" id= "review_data"><i class="fa fa-eye"></i></button>`


                table1 = [ID,ITEM,date,category,action];

                dataTable.row.add(table1).draw();
        resetform();

    }
    else {

        validation('ID', 'error', 'ID:');
        validation('ITEM', 'iError', 'ITEM NAME:');
        validation('date', 'dError', 'DATE:');
        validation('category', 'sError', 'CATEGORY:');
    }
}

//editRaw

$('#list').on("click", "#es", function () {
    editData = $(this).closest("tr");
    // console.log(editData);
    editRow = editData.attr("id");
    // console.log(editRow);
    $("#ID").val(editData.find('td:eq(0)').text());
    $("#ITEM").val(editData.find('td:eq(1)').text());
    $("#date").val(editData.find('td:eq(2)').text());
    $("#category").val(editData.find('td:eq(3)').text());


    $("#error").text("");
    $("#iError").text("");
    $("#dError").text("");
    $("#sError").text("");

    $("#update").html("update")
    $("#update").attr("onclick", "updateData(" + editRow + ")");
});

//Update data
function updateData() {


    var ID = $("#ID").val().trim();
    var ITEM = $("#ITEM").val().trim();
    var date = $("#date").val();
    var category = $("#category").val();


    raw = editData;
    let raw1 = $(editData).find("td");

    if ((ID != "") && (ITEM != "") && (date != "") && (category != "")) {


        $(raw1).eq(0).text(ID);
        $(raw1).eq(1).text(ITEM);
        $(raw1).eq(2).text(date);
        $(raw1).eq(3).text(category);

        // $("#update").html("update")
        // $("#update").attr("onclick", "addData()");
        resetform();
    }
    else {
        validation('ID', 'error', 'ID:');
        validation('ITEM', 'iError', 'ITEM NAME:');
        validation('date', 'dError', 'DATE:');
        validation('category', 'sError', 'CATEGORY:');
    }
}





//Delete data


$("#list").on("click", "#et", function () {

    // if (confirm("Are you sure to delete the data?")) {
     deleteData = $(this).closest("tr");
    //     let raw1 = deleteData.attr("id")
    //     deleteData.remove();
    //     if (raw1 == editRow) {
    //         resetform();
    //     }
    // }
});

// delete popup function
function delete_Popup() {
    editData = $(this).closest("tr");
    editRow = editData.attr("id");
    let raw1 = deleteData.attr("id")
    deleteData.remove();
    if (raw1 == editRow) {
        resetform();
    }
}

//validation
function validation(eId, errId, fName) {

    var valid = $(`#${eId}`).val();

    if (valid == "") {
        $(`#${errId}`).text("" + fName + "Must be Fill Out");

    } else {
        $(`#${errId}`).text("");

    }
    return valid;
}

//reset Data

function resetform() {

    $("#ID").val("");
    $("#ITEM").val("");
    $("#date").val("");
    $("#category").val("");


    $("#error").text("");
    $("#iError").text("");
    $("#dError").text("");
    $("#sError").text("");


    $("#update").html("submit")
    $("#update").attr("onclick", "addData()");
}

// data visible 
$("#list").on("click", "#view_data", function(){
	
    editData = $(this).closest("tr");

    $("#ID").val(editData.find('td:eq(0)').text());
    $("#ITEM").val(editData.find('td:eq(1)').text());
    $("#date").val(editData.find('td:eq(2)').text());
    $("#category").val(editData.find('td:eq(3)').text());
    
});