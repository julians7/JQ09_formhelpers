(function ($, kendo) {
    $.fn.nameOfForm = function () {

        if(!$(this).get(0)){
            throw new Error('Element not found!');
        }

        if($(this).get(0) && $(this).get(0).tagName.toLowerCase() !== 'form'){
            throw new Error('Component/element is not form!');
        }


        $(this).find('input[type=text]').each((i, el) => {
            $(el).addClass("");
        });

        $(this).find('input[type=submit]').each((i, el) => {

            $(el).addClass('k-button k-button-solid-primary').removeAttr('id');

            $(el).on('click', function (event) {
                event.preventDefault();
            })
        });

    }
}(jQuery, kendo));



console.log($('form'))