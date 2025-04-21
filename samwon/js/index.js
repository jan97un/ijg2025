$(".main-visual-items").eq(0).addClass("on");
$(".main-visual-items").eq(0).find(".visual-btn").addClass("off");
$(".main-visual-items").eq(0).find(".item-num").addClass("off");
function activateSlide() {
  $(".main-visual-items").removeClass("on");
  $(".visual-btn").removeClass("off");
  $(".item-num").removeClass("off");
}
$(".visual-btn").click(function () {
  activateSlide();
  $(this).closest(".main-visual-items").addClass("on");
  $(this).addClass("off");
  $(this).siblings(".btn-inner").find(".item-num").addClass("off");
});
$(".btn-inner").click(function () {
  activateSlide();
  $(this).closest(".main-visual-items").addClass("on");
  $(this).siblings(".visual-btn").addClass("off");
  $(this).find(".item-num").addClass("off");
});
