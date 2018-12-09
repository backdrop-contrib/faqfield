/**
 * @file
 * Provided remove button to faq fields.
 */
(function ($) {
  $(document).ready(function () {
    $('.faqfield-remove-button > input[type="submit"]').click(function (event) {
      event.preventDefault();
      let id = $(this).attr('id');
      id = (id.match(/\d+/g)).join('');
      $('#edit-field-faq-und-' + id + '-answer').val('');
      $('#edit-field-faq-und-' + id + '-question').val('');
      $('.form-item-field-faq-und-' + id + '-question').parents('tr').fadeOut();
    });
  });
})(jQuery);
