(function ($) {
    $(".teamMember").mouseenter(function () {
        $(".member_ex").fadeIn("slow");
        $(".show_before").css("opacity", "0.1");
    });
    $(".teamMember").mouseleave(function () {
        $(".member_ex").hide();
         $(".show_before").css("opacity","0.6");
    });
    $(".teamMember2").mouseenter(function () {
        $(".member_ex2").fadeIn("slow");
        $(".show_before").css("opacity","0.1");
    });
    $(".teamMember2").mouseleave(function () {
        $(".member_ex2").hide();
        $(".show_before").css("opacity","0.6");
    });
    $(".teamMember3").mouseenter(function () {
        $(".member_ex3").fadeIn("slow");
        $(".show_before").css("opacity","0.1");
    });
    $(".teamMember3").mouseleave(function () {
        $(".member_ex3").hide();
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