$(".scroll").on("click", function () {
  //ambil href
  var link = $(this).attr("href");
  //ambil elemen
  var elemenLink = $(link);
  //scrolling
  $("body").animated(
    {
      scrollTop: elemenLink.offset().top - 50,
    },
    200
  );
});
