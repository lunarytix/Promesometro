$(function () { 
    $("#btnRecorrer").click(function () 
    {
        $("#divRecorrer p").each(function (index) 
        { 
            $(this).removeClass();
            $(this).addClass("parrafo"); 
            $(this).text('Parrafo ' + index);
        }) 
    })
})
