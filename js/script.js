// ---- Modal ----
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

// ---- PopOver ----
$(function(){
  $(".myPopover").popover();
});

// ---- ToolTips ----
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
