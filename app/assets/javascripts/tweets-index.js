// $(document).ready(function() {
//   $('.toggle-icons').click(function(event) {
//     $('.icon-box').toggle()
//   })
// })

$(document).ready(function() {
  $('.toggle-icons').click(function(event) {
    if ($('.icon-box').is(':visible')) {
          $('.icon-box').toggle()
          $(this).text('Hide Icons')
      }
      else {
          $('.icon-box').toggle()
          $(this).text('Show Icons')
      }
  })
})
