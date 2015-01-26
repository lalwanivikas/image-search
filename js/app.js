$("#search").keypress(function(e){
  
  //On press of return(enter), start the search
  if(e.keyCode == 13){
    
    console.log("fetching images...");
    
    //AJAX for requesting Flickr pubic feed
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var searchTerm = $("#search").val();
    var flickrOptions = {
      tags: searchTerm,
      format: "json"
    };
    
    //Function to insert images in DOM after fetching
    function displayPhotos(data){
      var photoHTML = '<div class="image-container">';
      $.each(data.items, function(i, photo){
        photoHTML += '<div>';
        photoHTML += '<a href="' + photo.link + '">';
        photoHTML += '<img src="' + photo.media.m + '"></a></div>';
      });
      photoHTML += '</div>';
      $("#images").html(photoHTML);
    }
    
    //Call to get JSON data from Flickr public feed
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
  }
});







