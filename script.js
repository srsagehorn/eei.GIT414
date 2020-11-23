  var collapsed = true
  var services = []

  $("#hamburger").on("click", function () {
      console.log("hi")
    if (collapsed === true) {
        $("#links").show()
        collapsed = false
    }
    else {
        $("#links").hide()
        collapsed = true
    }
  })

  for (let i = 0 ; i < 20 ; i++) {
    services.push(true)
    $(`#child${i}`).hide()
    }

    for (let i = 0 ; i < 20 ; i++) {
     console.log(i)
      $(`#collapse${i}`).on("click", function (){
          if (services[i] === true) {
            $(`#child${i}`).show()
            services[i] = false
          }
          else {
            $(`#child${i}`).hide()
            services[i] = true
          }
  })
}