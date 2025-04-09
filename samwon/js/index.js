$(".main-visual-items").eq(0).addClass("on");
$(".main-visual-items").eq(0).find(".visual-btn").addClass("off");
$(".visual-btn").click(function () {
  $(".main-visual-items").removeClass("on");
  $(".visual-btn").removeClass("off");
  $(this).closest(".main-visual-items").addClass("on");
  $(this).addClass("off");
});
