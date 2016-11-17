# Instalare

```
sudo npm -g install webdriver-manager nightwatch
sudo webdriver-manager update
```

# Configurare

```
cp nightwatch.json.sample nightwatch.json
```

Adăugaţi/editaţi valorile necesare în fişierul copiat anterior.

# Execuţie

```
./start.sh
# încarcă cartelă Telekom
nightwatch tests/încărcare-telekom.js
```

# Curăţenie

```
rm -rf screenshots/* reports/*
```
