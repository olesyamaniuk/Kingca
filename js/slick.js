$(function () {
  $(".y-b-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    cssEase: "linear",
    prevArrow: ".y-b-gallery-list-left",
    nextArrow: ".y-b-gallery-list-right",
  });
});

$(function () {
  $(".y-b-characters-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    cssEase: "linear",
    prevArrow: ".y-b-characters-list-left",
    nextArrow: ".y-b-characters-list-right",
  });
});
