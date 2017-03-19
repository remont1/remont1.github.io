var speedResponses = 500;  // скорость смены отзывов

(function($) {

    $(document).ready(function() {

        $('.responses-content').each(function() {
            var curSlider = $(this);
            curSlider.find('ul').width(curSlider.find('li').length * curSlider.find('li:first').width());
            curSlider.data('curIndex', 0);

            var curHTML = '';
            curSlider.find('li').each(function() {
                curHTML += '<a href="#"></a>';
            });

            $('.responses-ctrl').html(curHTML);
            $('.responses-ctrl a:first').addClass('active');
            $('.responses-ctrl a').click(function() {
                var curSlider = $('.responses-content');
                var curIndex = $('.responses-ctrl a').index($(this));
                curSlider.data('curIndex', curIndex);

                $('.responses-ctrl a').removeClass('active');
                $('.responses-ctrl a').eq(curIndex).addClass('active');
                curSlider.find('ul').animate({'left': -curIndex * curSlider.find('li:first').width()}, speedResponses);

                return false;
            });
        });

        $('.responses-prev').click(function() {
            var curSlider = $('.responses-content');
            var curIndex = curSlider.data('curIndex');
            curIndex--;
            if (curIndex == -1) {
                curIndex = curSlider.find('li').length - 1;
            }
            curSlider.data('curIndex', curIndex);

            $('.responses-ctrl a').removeClass('active');
            $('.responses-ctrl a').eq(curIndex).addClass('active');
            curSlider.find('ul').animate({'left': -curIndex * curSlider.find('li:first').width()}, speedResponses);

            return false;
        });

        $('.responses-next').click(function() {
            var curSlider = $('.responses-content');
            var curIndex = curSlider.data('curIndex');
            curIndex++;
            if (curIndex == curSlider.find('li').length) {
                curIndex = 0;
            }
            curSlider.data('curIndex', curIndex);

            $('.responses-ctrl a').removeClass('active');
            $('.responses-ctrl a').eq(curIndex).addClass('active');
            curSlider.find('ul').animate({'left': -curIndex * curSlider.find('li:first').width()}, speedResponses);

            return false;
        });

    });

})(jQuery);