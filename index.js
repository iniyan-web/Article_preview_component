$(".share-icon").click(function() {
  var share_icon = $(this);
  var social_icons = $(".social-icons");
  if (social_icons.css("display") === "none") {
    social_icons.css("display", "block");
    share_icon.css({
      "background-color": "hsl(212, 23%, 69%)",
      "border-color": "hsl(212, 23%, 69%)"
    });
  } else {
    social_icons.css("display", "none");
    share_icon.css({
      "background-color": "hsl(210, 46%, 95%)",
      "border-color": "hsl(210, 46%, 95%)"
    });
  }
});
