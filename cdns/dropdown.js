/* global jQuery */
var $ = jQuery

$('select:not(#calc_shipping_country):not(#calc_shipping_state):not(#billing_country):not(#shipping_country):not(#billing_state):not(#shipping_state)').each((index, el) => {
  $(el).selectize({
    highlight: false,
    allowEmptyOption: true,
    placeholder: $(el).find('option:selected').text(),
    onInitialize() {
      this.clear(true)
      this.refreshOptions(false)
    }
  })
})

$('.selectize-dropdown-content .option').each((index, el) => {
  const html = $(el).html()
    .replace(/(.[^()]*)\(([0-9]{0,9})\)$/g, '<span>$1</span><span>($2)</span>')

  $(el).html(html)
})
