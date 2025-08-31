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

  next.css({ left: -next.width() }).show().animate({ left: 0 }, speed);
  current.animate({ left: current.width() }, speed, function () {
    $(this).hide();
  });
}, interval);
