$(function () { 
    $("#btnRecorrer").click(function () 
    {
        $("#divRecorrer p").each(function (Rcr) 
        { 
            $(this).removeClass();
            $(this).addClass("Propuesta"); 
            $(this).text('Propuesta ' + Rcr);
        }) 
    })
})