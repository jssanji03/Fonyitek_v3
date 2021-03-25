(function ($) {
    $(".teamMember").mouseenter(function () {
        $(".member_ex").fadeIn("slow");
        $(".show_before").css("opacity", "0.1");
    });
    $(".teamMember").mouseleave(function () {
        $(".member_ex").hide();
         $(".show_before").css("opacity","0.6");
    });
    $(".teamMember4").mouseenter(function () {
        $(".member_ex4").fadeIn("slow");
        $(".show_before").css("opacity","0.1");
    });
    $(".teamMember4").mouseleave(function () {
        $(".member_ex4").hide();
        $(".show_before").css("opacity","0.6");
    });
})(jQuery);