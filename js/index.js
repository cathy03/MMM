var $carousel = $('.main-carousel').flickity({
      contain: false,
      pageDots: false,
      cellSelector: '.carousel-cell',
      prevNextButtons: false,
      wrapAround: true,
      hash: true,
      autoPlay: false
    });

var flkty = $carousel.data('flickity');


// update Slide
function updateSlide(event, index){
  $('.main-contents-poster').css('opacity', '0');

  var slideTitle = setInterval(function(){
    $('.main-contents-poster').css('opacity', '1');
    $('.main-contents-poster').css('transition', 'all .2s ease');
    clearInterval(slideTitle);
  }, 1000)
} 
updateSlide();


// update Index
function updateIndex(event, index){
  var cellNumber = flkty.selectedIndex + 1;
  $('.main-info-index').text( '0' + cellNumber);
}
updateIndex();


// update Info
function updateInfo(event, index){
  var cellNumber = flkty.selectedIndex;
  $('.main-contents-genre').html(film_info[cellNumber].genre);
  $('.main-info-date').html(film_info[cellNumber].date);
  $('.main-info-title').html(film_info[cellNumber].title);
  $('.main-info-person').html(film_info[cellNumber].person);
  $('#ifrm').attr('src', film_info[cellNumber].poster);
}
updateInfo();


$carousel.on('change.flickity', updateInfo);
$carousel.on('change.flickity', updateIndex);
$carousel.on('dragMove.flickity', updateSlide);