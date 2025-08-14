$(".lnb").hide();
$(".gnb")
  .mouseover(function () {
    $(".lnb").stop().slideDown(300);
  })
  .mouseout(function () {
    $(".lnb").stop().slideUp(300);
  });

const slider = $(".slider");
let index = 0;
const count = slider.length;
const interval = 3000;
const speed = 600;

slider.hide().eq(0).show();

setInterval(function () {
  const current = slider.eq(index);
  index = (index + 1) % count;
  const next = slider.eq(index);

  next.css({ top: -next.height() }).show().animate({ top: 0 }, speed);
  current.animate({ top: current.height() }, speed, function () {
    $(this).hide();
  });
}, interval);

const tabBtn = $(".tap .menu a");
const tabCon = $(".tap .con > div");

tabCon.hide().eq(0).show();
tabBtn.removeClass("active").eq(0).addClass("active");

tabBtn.on("click", function (e) {
  e.preventDefault();
  const index = $(this).index();

  tabBtn.removeClass("active");
  $(this).addClass("active");

  tabCon.hide().eq(index).show();
});

$(".popup").hide();
$(".popup-btn").on("click", function () {
  $(".popup").show();
});
$(".popup .close").on("click", function () {
  $(".popup").hide();
});
