(function($) {
    var $main1 = $('#main1');
  
    // Breakpoints.
    breakpoints({
      xlarge: ['1281px', '1680px'],
      large: ['981px', '1280px'],
      medium: ['737px', '980px'],
      small: ['481px', '736px'],
      xsmall: [null, '480px']
    });
        var modal = document.getElementById('myModal');
        var images = document.getElementsByClassName('myImages');
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");
      
        for (var i = 0; i < images.length; i++) {
          var img = images[i];
          img.onclick = function(evt) {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
          }
        }
      
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function() {
          modal.style.display = "none";
        }
      
      })(jQuery);
      