  var services = []

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