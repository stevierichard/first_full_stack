$(document).ready(function () {
  $("#btnSubmit").on("click", () => {
    $.ajax({
      type: "GET",
      url: "/api/test",
      dataType: "json",
    }).then((res) => {
      console.log(res);
    });
  });
});
$(document).ready(function () {
  $("#submitBtn").on("click", () => {
    $.ajax({
      type: "GET",
      url: "/api/test2",
      dataType: "json",
    }).then((res) => {
      console.log(res);
    });
  });
});
