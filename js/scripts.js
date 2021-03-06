$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var favoriteSeason = $("input:radio[name=favoriteSeason]:checked").val();
    var money = $("input:radio[name=money]:checked").val();
    var activity = $("input:radio[name=activity]:checked").val();
    var ifChildren = $("input:radio[name=ifChildren]:checked").val();
    var potter = $("input:radio[name=potter]").val();

    if ((favoriteSeason === "fall") && (money === "over1K" || money === "over2K") && (activity === "explore") && (ifChildren === "no") && (potter != "hufflepuff")) {
      $(".result").hide();
      $(".resultShanghai").show();
      $(".welcomeMessage").hide();
      $("html, body").animate({ scrollTop: 0 }, "slow");
    } else if ((money === "over5K") && (activity != "relax") && (ifChildren = "yes") && (potter != "slytherin")) {
      $(".result").hide();
      $(".resultVienna").show();
      $(".welcomeMessage").hide();
      $("html, body").animate({ scrollTop: 0 }, "slow");

    } else if ((favoriteSeason === "spring" || favoriteSeason === "fall") && (money === "over2K") && (activity === "explore" || activity === "party") && (potter != "hufflepuff")) {
      $(".result").hide();
      $(".resultNewYork").show();
      $(".welcomeMessage").hide();
      $("html, body").animate({ scrollTop: 0 }, "slow");

    } else {
      $(".result").hide();
      $(".resultNewOrleans").show();
      $(".welcomeMessage").hide();
      $("html, body").animate({ scrollTop: 0 }, "slow");
    }
  });
});
