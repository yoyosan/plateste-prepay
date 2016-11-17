module.exports = {
  'Încărcare cartelă Telekom' : function (browser) {
    var telekomCfg = browser.globals.telekom;
    var detalii = browser.globals.detalii;

    browser
      .url(telekomCfg.url)
      .waitForElementVisible('body', 2000)
      .setValue('#inputNumber', telekomCfg.nrTelefon)
      .clearValue('#recharge-amount')
      .setValue('#recharge-amount', telekomCfg.credit)
      .click('div.control-group.content-wrapper.span12.clearfix > label > input[type="checkbox"]:nth-child(1)')
      .click('div:nth-child(3) > div.control-group.content-wrapper.span12.clearfix > a')
      .url('{URL}')
      .waitForElementVisible('input#fname', 5000)
      .acceptAlert()
      .setValue('input#fname', detalii.prenume)
      .setValue('input#lname', detalii.nume)
      .setValue('input#email', detalii.eMail)
      .setValue('input#phone', detalii.telefon)
      .click('input#submit_next')
      .url('{URL}')
      .waitForElementVisible('input#tiCNumber', 5000)
      .setValue('input#tiCNumber', detalii.card.nr)
      .setValue('select#cbExpMounth', detalii.card.lunaExpirare)
      .setValue('select#cbExpYear', detalii.card.anExpirare)
      .setValue('input#cvv2', detalii.card.cvv)
      .setValue('input#nameoncard', detalii.card.nume)
      // .click('input#AuthorizeButton')
      // .end()
    ;
  }
};