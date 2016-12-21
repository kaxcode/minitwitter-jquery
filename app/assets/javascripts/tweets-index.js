// $(document).ready(function() {
//   $('.toggle-icons').click(function(event) {
//     $('.icon-box').toggle()
//   })
// })

$(document).ready(function() {
  $('.toggle-icons').click(function(event) {
    if ($(this).text() === 'Show Icons') {
          $('.icon-box').toggle()
          $(this).text('Hide Icons')
      }
      else {
          $('.icon-box').toggle()
          $(this).text('Show Icons')
      }
  })
})
