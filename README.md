# Încărcare cartele prepay

Cu ajutorul acestor scripturi poţi încărca rapid şi uşor cartele prepay
pentru următoarele reţele de telefonie:
- Telekom
- Orange

**Atenție!**

* Ambele scripturi se vor opri la ecranul de introducere al codului de
confirmare a tranzacției trimis de bancă prin SMS către telefonul tău.

## Instalare

### Linux

```
sudo npm -g install webdriver-manager nightwatch
sudo webdriver-manager update
```

### Windows

* Dacă foloseşti Windows, recomand [Babun](http://babun.github.io/).
* Dacă alegi Babun, trebuie să instalezi următoarele aplicații:
	* **npm**, descărcându-l de [aici](https://nodejs.org/en/download/)
	* **tmux**, executând `pact install tmux`
* Urmează pașii de mai sus pentru a încheia instalarea.

## Configurare

```
cp nightwatch.json.sample nightwatch.json
```

Adăugaţi/editaţi valorile necesare în fişierul copiat anterior.

## Execuţie

```
# pornește webdriver-manager
./start.sh
```

Pentru a încărca o cartelă Telekom, execută:

```
nightwatch tests/încărcare-telekom.js
```

Pentru a încărca o cartelă Orange, execută:

```
nightwatch tests/încărcare-orange.js
```

Pentru oprirea webdriver-manager, rulează:

```
./stop.sh
```

## Curăţenie

```
rm -rf screenshots/* reports/*
```
