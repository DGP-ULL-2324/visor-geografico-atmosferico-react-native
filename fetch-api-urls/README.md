# Web scraping para las urls

Para obtener todas las direcciones URL de las estacione se utiliza el paquete `crawlee` y `playwright`.

## Instalación

Primero:

```bash
npm i
```

Luego:

``` bash
npm run install
```

Este último permite a playwright descargar dependencias como Chromium.

## Uso

El siguiente comando ejecuta el programa:

```js
npm run init
```

El resultado es un archivo `output.json` como el siguiente:

```json
{
  "VILAFLOR": "api/action/package_show?id=7663bcae-d04c-4680-9eca-612c2eedd023",
  "VICTOTH": "api/action/package_show?id=6e07d872-f7ac-4087-85ff-7b8ff25bcc13",
  "URSUMEDI": "api/action/package_show?id=0ab83123-e451-457a-bfe4-83c655494560",
  "URSULATH": "api/action/package_show?id=492b6b79-7d25-4ce7-a47c-4d5db5e4ebf4",
  "URSUBAJA": "api/action/package_show?id=7e00380d-8301-4f22-8bbd-5bbad4d72222",
  "TRIGOTH": "api/action/package_show?id=89940147-c6da-420c-9b45-f303646d6934",
  "TOPO_MA": "api/action/package_show?id=97ea3c45-4c7b-4d73-a71f-b386fbd31424",
  "TOPONEGR": "api/action/package_show?id=f325cd52-0592-4da8-90c8-cae5cd21cbe1",
  "TEJINA01": "api/action/package_show?id=a97692f7-497e-43cc-ad9c-e2d51b17d6ac",
  "TEGUESTE": "api/action/package_show?id=256bdc73-266f-4a7c-903c-859e4f64db07",
  "TAGANANA": "api/action/package_show?id=2b02d58f-1719-4370-b5be-338b9daca5b2",
  "TACORTH": "api/action/package_show?id=f3b57b47-684f-4e20-aec1-9b47e94fa2ad",
  "SUERTETH": "api/action/package_show?id=524931c1-aa85-4f1c-b70e-eaf624da24e4",
  "SMIGTH": "api/action/package_show?id=bd0aa779-90cc-497a-a2d1-35224aa6e670",
  "SILOS": "api/action/package_show?id=fcb4cfc6-aad9-4701-819e-a28166779a05",
  "SANTA_CRUZ": "api/action/package_show?id=a7ca462b-09b9-4c22-8412-455a4e4d81cf",
  "REDONTH": "api/action/package_show?id=a2e4c0db-60f8-444a-afe4-f658bddabd21",
  "REALETH_N": "api/action/package_show?id=a19d92bf-fd23-4b2f-a2d1-67231a9fa0c0",
  "RAVELO01": "api/action/package_show?id=2715f341-b883-4384-af38-4993be572a4c",
  "RATINO 01": "api/action/package_show?id=9790a1c5-9704-4b17-a5d7-b128a0582e53",
  "POZOTH": "api/action/package_show?id=41d9b2ff-08ec-4d7c-b91e-99b6f1867e34",
  "PINALTH": "api/action/package_show?id=b04e6f94-88b3-4de2-854e-48e8ec943562",
  "PICACHO_MA": "api/action/package_show?id=88c76875-ada3-47e8-bb2d-c765ad86b2d1",
  "PALOBTH": "api/action/package_show?id=d3c34b0c-08ed-4d6d-9b54-e0c133a649c1",
  "PALMATH": "api/action/package_show?id=121523a0-a70e-4955-84a5-80b66cc4606d",
  "OROTAV01": "api/action/package_show?id=01185097-dd51-4926-abf9-5e7a22406ad4",
  "MENATH": "api/action/package_show?id=a2364b3f-d030-498a-bc96-8d3b5abe1616",
  "MATANTH": "api/action/package_show?id=25dfd782-96bd-476c-be7e-a46760a19780",
  "LaQuinta": "api/action/package_show?id=9cf65ca2-1ac4-448d-8041-121cf6f05304",
  "LLANITOP": "api/action/package_show?id=6f3a7d0f-8bcc-4b5a-9104-9068e08e2c20",
  "LAGUNA": "api/action/package_show?id=fd612093-9da4-407b-9fbc-bf6042eac580",
  "Imetos_Trevejos": "api/action/package_show?id=ee4e5ab4-7c93-4e08-a98d-1a625321f03b",
  "Imetos_Tacoronte": "api/action/package_show?id=ea019bc1-2009-4c3d-95f9-4a5c0ed8f5b4",
  "Imetos_Ravelo": "api/action/package_show?id=d0aba677-71b3-4165-824f-d538fa155f7d",
  "Imetos_Mazape": "api/action/package_show?id=a8d05045-9c05-4e15-b4f2-9bd2543803b1",
  "IGUESTE": "api/action/package_show?id=35a2814e-753d-4b62-a72b-3167f5c3deaa",
  "ICOR": "api/action/package_show?id=f976f646-1975-4e19-9ebf-894279d52ec2",
  "HOYOSTH": "api/action/package_show?id=ff8d0b36-d1a7-4fc5-b028-fe30585d5929",
  "HOYA_GRANDE": "api/action/package_show?id=2a4f2484-1d8e-4ef5-855f-6970dc6dd187",
  "HELECHO1": "api/action/package_show?id=34057e9b-6659-4b72-82c8-7ae120c0f59c",
  "GUIATH": "api/action/package_show?id=a77203f5-5b2e-49ff-9e99-46bea8acd881",
  "GUIAIS01": "api/action/package_show?id=3983411c-2ba5-4340-916a-e04279c73c09",
  "GUAN1HA1": "api/action/package_show?id=1277014a-7e7c-4b30-97ea-a16dd46546ca",
  "GALLETAS": "api/action/package_show?id=ece04a5a-ac88-4b56-9505-f6d89f150398",
  "GALECUBO_N": "api/action/package_show?id=c8fb6fcf-b5a5-4a3f-85b8-c7d8ff9a1232",
  "GAITERO_MA": "api/action/package_show?id=533f00d3-cdbe-4401-9a7f-a7791e0a88cb",
  "ERES": "api/action/package_show?id=3078c13f-1385-4c71-a0ff-3ea47a964eae",
  "ELVIENTO": "api/action/package_show?id=2d8c8ba0-dd4c-479d-b1a3-530d0f750a0b",
  "ELROSARIO": "api/action/package_show?id=6a2bd959-69c2-49a0-b65a-f782c0f93e82",
  "DRAGO": "api/action/package_show?id=75dfbc27-ec2d-41b2-852f-42bd3070f169",
  "CHIOTH": "api/action/package_show?id=65e14bb7-7117-4b82-aa72-b0c6626d0d8f",
  "CHAVAO_MA": "api/action/package_show?id=4d7dd0cc-62b3-40e8-845d-2e3949732dcc",
  "BVISTA02": "api/action/package_show?id=aad7aca3-0b7e-472a-af44-fe8b864bb098",
  "BENIJTH": "api/action/package_show?id=055fab77-2553-4c89-98fc-99ece20e5ce1",
  "BAILADERO": "api/action/package_show?id=309e8d77-f313-43fa-8e88-6ae962621da6",
  "BADAJTH": "api/action/package_show?id=29bd39fb-0dbc-4978-b1d6-c3403383f28e",
  "ARICO_01": "api/action/package_show?id=89cda0f8-4fef-4ea8-8bd9-e10d0d439f2b",
  "ARAYA": "api/action/package_show?id=db5faab5-9715-47bb-b222-21a399779402",
  "ANAVISTH": "api/action/package_show?id=bf745eb1-96ae-414f-9032-a18144617e6f",
  "ALCALA": "api/action/package_show?id=9a5dafa4-343a-4e27-8c60-37e975fbf5a2",
  "AGUAMANSA_MA": "api/action/package_show?id=49d73e40-020e-401c-8270-06eceec5d9e8",
  "ABONACOP": "api/action/package_show?id=d9a48635-a824-46bc-a776-18e623ed2c79"
}
```