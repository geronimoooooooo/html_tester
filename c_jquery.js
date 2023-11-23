function bra(){
    console.log("bra button clicked");
  }

  function bra2(){
    console.log("bra22221111 ");
  }

  $(function () {

    $(this).css("background-color", "blue");

    var somefunc = function () { console.log("somefunc()"); };      

    $('#b1').click(bra2); // $('#b1').on('click', bra2);

    $('#p1').on('click', somefunc);

    $('#b1').click(function (e) { 
      e.preventDefault();
      $(this).css("background-color", "blue");
      console.log("jquery clicked");
      var checkVal = $('#meat').val();
      console.log("Value: " + checkVal);
      $('#p1').hide();
    });

    $('#meat').prop('checked',true);
    $('#dairy').prop('checked', true);
  });