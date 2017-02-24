const allStudents = $(".student-list li").length;
const students = $(".student-list").children();
const maxStudentsPerPage = 10;


// Show Max students per page
$(students).hide().slice(0, maxStudentsPerPage).show();

//Dynamically add pagination links 
const links = $("<div class='pagination'><ul></ul></div>");
$(".page").append(links);

//Add the visible pagination links
for (let i = 1; i <= Math.ceil(allStudents / 10); i++) {
    $(".pagination ul").append($('<li><a href="#">' + i + '</a></li>'));
}

//Setting active page
$(".pagination ul li a:first").addClass('active');

$(".pagination ul a").on('click', function () {
    $("li a").removeClass('active');
    $(this).addClass('active');
});

// Indexing on results
$(".pagination li").on('click', function () {
    students.hide().slice($(this).index() * 10, $(this).index() * 10 + 10).show();
});