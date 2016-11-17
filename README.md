# Încărcare cartele prepay

Cu ajutorul acestei aplicaţii poţi încărca rapid şi uşor cartele prepay
pentru următoarele reţele de telefonie:
- Telekom
- Orange

Paşii de instalare de mai jos sunt pentru Linux.
Dacă foloseşti Windows, recomand [Babun](http://babun.github.io/).

## Instalare

```
sudo npm -g install webdriver-manager nightwatch
sudo webdriver-manager update
```

## Configurare

```
cp nightwatch.json.sample nightwatch.json
```

Adăugaţi/editaţi valorile necesare în fişierul copiat anterior.

## Execuţie

```
./start.sh
# încarcă cartelă Telekom
nightwatch tests/încărcare-telekom.js
# încarcă cartelă Orange
nightwatch tests/încărcare-orange.js
```

## Curăţenie

```
rm -rf screenshots/* reports/*
```
