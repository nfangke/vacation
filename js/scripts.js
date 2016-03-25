$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var favoriteSeason = $("input:radio[name=favoriteSeason]:checked").val();
    console.log(favoriteSeason);
    var money = $("input:radio[name=money]:checked").val();
    var activity = $("input:radio[name=activity]:checked").val();
    var ifChildren = $("input:radio[name=ifChildren]:checked").val();
    var potter = $("input:radio[name=potter]").val();

    if ((favoriteSeason === "fall") && (money === "over1K" || money === "over2K") && (activity === "explore") && (ifChildren === "no") && (potter != "hufflepuff")) {
      $(".resultShanghai").show();
      $(".welcomeMessage").hide();
      $("html, body").animate({ scrollTop: 0 }, "slow");
    } else if ((money === "over5K") && (activity != "relax") && (ifChildren = "yes") && (potter != "slytherin")) {
      $(".resultVienna").show();
      $(".welcomeMessage").hide();
      $("html, body").animate({ scrollTop: 0 }, "slow");

    } else if ((favoriteSeason === "spring" || favoriteSeason === "fall") && (money === "over2K") && (activity === "explore" || activity === "party") && (potter != "hufflepuff")) {
      $(".resultNewYork").show();
      $(".welcomeMessage").hide();
      $("html, body").animate({ scrollTop: 0 }, "slow");

    } else {
      $(".resultNewOrleans").show();
      $(".welcomeMessage").hide();
      $("html, body").animate({ scrollTop: 0 }, "slow");
    }
    // } else if (favoriteSeason === "spring") {
    //   $(".resultVienna").show();
    //   $(".welcomeMessage").hide();
    //   $("html, body").animate({ scrollTop: 0 }, "slow");
    // } else {
    //   $(".resultShanghai").show();
    //   $(".welcomeMessage").hide();
    //   $("html, body").animate({ scrollTop: 0 }, "slow");
    // }





  });
});
