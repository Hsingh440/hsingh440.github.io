// jQuery UI Accordion init
$(function () {
  const $faq = $('#faq');
  if ($faq.length) {
    $faq.accordion({
      heightStyle: 'content',
      collapsible: true,
      active: false
    });
  }
});
