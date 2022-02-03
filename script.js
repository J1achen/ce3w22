$(window).on("load",start);

function start()
{
    $("ul.nav a:first").click();
}

$(document).on("click", "ul.nav a", nav);

function nav(e)
{
    
    e.preventDefault();
    var href = $(this).attr("href");
    $("#content").load(href);

    $("ul.nav a").removeClass("active");
    $(this).addClass("active");

}