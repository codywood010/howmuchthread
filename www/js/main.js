var size = 'Lap/Crib';
var amount = 'Lightly Quilted';

function initialPage() {
  $("#intro-page").fadeIn('fast');
  $('#pages').css('min-height',window.innerHeight-170);
}

function switchPage(frompage, topage) {
  if (frompage == null && topage == null) {
  }
  if (topage == 'results-page') setResult();

  $("#"+frompage).fadeOut('fast', function() {
                          $("#"+topage).fadeIn('fast', function(){$('#pages').css('min-height',window.innerHeight-170);});
  });
   
}

function sizeChanged(newSizeIndex) {
  if(newSizeIndex == 0) {
    $('#next1').attr('disabled','disabled');
  }
  else {
  $('#next1').removeAttr('disabled');
  if (newSizeIndex == 5) {
    document.getElementById('quilt-size-selection').value = 'Lap/Crib';
    switchPage('quilt-size-page', 'not-sure-page');
  } else {
    setSize(document.getElementById('quilt-size-selection').options[newSizeIndex].innerHTML);
      switchPage('quilt-size-page', 'quilt-amount-page');
  } }
}

function setSize(newSize) {
  size = newSize;
  $(".quilt-size").html(newSize);
}

function quiltAmountChanged(newQuiltAmountIndex) {
  if(newQuiltAmountIndex == 0) {
    $('#next2').attr('disabled','disabled');
  }
  else {
  $('#next2').removeAttr('disabled');
  var data = [
    '',
    'Light Quilting - Outlining, no decorative stitching, no feathers.',
    'Moderate Quilting - Some feathers, light stippling, etc.',
    'Heavy Quilting - Feathers, filigree, stippling, decorations galore.'
  ];
  
  /*$("#quilt-amount-info").fadeOut('fast', function() {
    $(this).html(data[newQuiltAmountIndex]);
    $(this).fadeIn('fast');
  });*/
  setQuiltAmount(document.getElementById('quilt-amount-selection').options[newQuiltAmountIndex].innerHTML);
  switchPage('quilt-amount-page', 'results-page');
}
}
function setQuiltAmount(newQuiltAmount) {
  amount = newQuiltAmount;
  $('.quilt-amount').html(newQuiltAmount);
}

function setResult() {
  var data = {
    'Lap/Crib': {
      'Lightly Quilted': '200 Yards',
      'Moderately Quilted': '400 Yards',
      'Heavily Quilted': '600 Yards'
    },
    'Twin': {
      'Lightly Quilted': '400 Yards',
      'Moderately Quilted': '800 Yards',
      'Heavily Quilted': '1,200 Yards'
    },
    'Queen': {
      'Lightly Quilted': '600 Yards',
      'Moderately Quilted': '1,000 Yards',
      'Heavily Quilted': '1,600 Yards'
    },
    'King': {
      'Lightly Quilted': '750 Yards',
      'Moderately Quilted': '1,500 Yards',
      'Heavily Quilted': '2,000 Yards'
    }
  };
  $('#results-figure').html(data[size][amount]);
}