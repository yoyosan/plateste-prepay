module.exports = {
    'Încărcare cartelă Orange' : function (browser) {
    var orangeCfg = browser.globals.orange;
    var detalii = browser.globals.detalii;

    browser
      .url(orangeCfg.url)
      .waitForElementVisible('body', 2000)
      .setValue('input#prepayToRecharge', orangeCfg.nrTelefon)
      .click('input#Optiuni1_6')
      .setValue('input#adresa-email', detalii.eMail)
      .click('#divContWrapper > div:nth-child(1) > a')
      .pause(1000)
      .setValue('input#fullName', detalii.nume + ' ' + detalii.prenume)
      .setValue('textarea#addressPF', detalii.adresa)
      .click('a#recharge-button')
      .url('{URL}')
      .waitForElementVisible('.card-number-input', 5000)
      .pause(2000)
    ;

    // workaround for the stupidest input ever!
    for (var i = 0; i < detalii.card.nr.length; i+=4) {
      browser.setValue('.card-number-input', detalii.card.nr.substr(i, 4))
        .pause(500);
    }

    browser
      .waitForElementVisible('.card-validity-input', 5000)
      // workaround for the stupidest input ever!
      .keys(detalii.card.lunaExpirare)
      .pause(500)
      .keys(detalii.card.anExpirare)
      .pause(500)
      .setValue('.card-cvv-input', detalii.card.cvv)
      .click('a.pay-button')
    ;
  }
};