# Nederdam huisstijl

> **Leidend document.** Dit is de vastgelegde huisstijl, overgenomen uit het identiteitsboard *KADER* en de aangeleverde logobestanden. Het naslagwerk met kleuren, typografie en logo's staat ook online: https://claude.ai/artifact/JcV8kyjAY2DY495Pe2Fssi (privé; delen via het Share-menu). Bij twijfel gaat deze huisstijl voor op `docs/brand-identity.md`, dat beschrijft hoe de huidige website is gebouwd.

NEDERDAM is één merk met twee disciplines: **Bouw** en **Interieur**. Deze huisstijl legt vast hoe het merk eruitziet en klinkt. Werk altijd vanuit deze regels; wijk er alleen bewust en na overleg van af. Bron: het identiteitsboard *KADER* (concept 06) en de aangeleverde logobestanden.

## Het merk

- Gebruik deze kern letterlijk: **Eén merk. Twee disciplines.**
- Merkverhaal, zoals op het board: *"NEDERDAM bouwt aan wat blijft. Met vakmanschap, oog voor detail en een integrale benadering van bouw en interieur realiseren we ruimtes die mensen, bedrijven en omgevingen versterken. Vandaag, morgen en voor de volgende generatie."*
- Het logo is een abstraherend samenspel van de letter N en een architectonisch **kader**. Het staat voor openheid, vakmanschap en het creëren van ruimte. Twee disciplines, verenigd onder één merk, vanuit dezelfde mentaliteit: doordacht, kwalitatief en duurzaam. *Van fundering tot afwerking.*
- Merkwaarden: **Balans · Precisie · Vakmanschap · Continuïteit · Duurzaamheid.**
- Waar het merk over gaat: **Mensen · Materiaal · Vakmanschap · Omgeving · Toekomst.**
- Merkarchitectuur: NEDERDAM is het moedermerk; Bouw en Interieur zijn gelijkwaardig. Nooit een derde pijler ernaast.

## Taal en toon

- Kort, zeker en ingetogen. Zinnen als een vakman ze zegt, niet als een reclamebureau.
- Spreek de klant aan met **u**. Het bedrijf spreekt als **we**.
- Vaste zinnen van het board — gebruik ze zoals ze staan:
  - *Ruimte maakt mogelijk.*
  - *Van idee tot leefbare werkelijkheid.*
  - *Bouwen met mensen voor morgen.*
  - *Van fundering tot afwerking.*
  - *De juiste dingen duurzaam goed doen.*
- Schrijf "NEDERDAM" in kapitalen alleen waar het merk als woordmerk staat; in lopende tekst: "Nederdam".
- Geen emoji, geen uitroeptekens, geen superlatieven ("de beste", "uniek"). Beweer niets wat niet klopt: geen verzonnen aantallen, jaren of reviews.

## Logo

Gebruik **uitsluitend de aangeleverde bestanden** (groep *Logos*). Nooit hertekenen, benaderen, vereenvoudigen, hercomponeren of herkleuren.

- **Hoofdlogo** (`nederdam-master-*`): symbool, NEDERDAM, BOUW & INTERIEUR en de korte bronzen lijn. Voor gevel, stationery, footer en elke plek waar het merk als geheel spreekt.
- **Horizontaal** (`nederdam-horizontal-*`): symbool naast het woordmerk. Voor krappe hoogtes, zoals de website-header.
- **Sub-brands** (`nederdam-bouw-*`, `nederdam-interieur-*`): Bouw met bronzen symbool, BOUW in brons en een bronzen lijn; Interieur met olijf symbool en INTERIEUR in grijs. Alleen op plekken die over één discipline gaan.
- **Symbool** (`nederdam-mark-*`): brons, olijf of gebroken wit. Voor favicon, profielbeeld, werkkleding en materialisatie.
- Kleurvarianten: `-dark` = donker woordmerk voor lichte ondergrond (`stone`, `paper`); `-light` = woordmerk in `paper` voor donkere ondergrond (`charcoal`, `taupe`).
- De bestanden hebben hun vrije ruimte in zich. Schaal op hoogte; nooit uitrekken, draaien, omlijnen of een schaduw geven.

## Kleur

Vijf merkkleuren, exact zoals op het board. Houd deze waarden precies aan.

| Kleur | Hex | Betekenis | Inzet |
|---|---|---|---|
| `charcoal` | #0E0E0E | Kracht · Stabiliteit · Tijdloos | De merkgrond. Tekst op lichte ondergrond. |
| `bronze` | #B08B6F | Vakmanschap · Warmte · Authentiek | Het accent: symbool, discipline Bouw, de korte lijn onder het logo. Spaarzaam. |
| `stone` | #C9C2B8 | Rust · Balans · Verfijning | Lichte vlakken en papier, zoals de achterzijde van het visitekaartje. |
| `olive` | #4A5A46 | Natuur · Interieur · Duurzaam | Discipline Interieur: symbool en accenten. Spaarzaam. |
| `taupe` | #3A3A36 | Elegant · Neutraal · Verbinding | Tweede donkere vlak, naast `charcoal`. |

Plus het gebroken wit uit de logobestanden: `paper` #F4F0E8 — het woordmerk en de tekst op donker.

Regels:
- **Donker is de merkgrond.** Het merk leeft op `charcoal`, met `taupe` als tweede vlak, tekst in `paper` en `bronze` als warmte. Licht (`paper`, `stone`) is de rustige tegenhanger voor lange teksten, formulieren en print.
- `bronze` en `olive` zijn accenten, nooit grote achtergronden en nooit samen in één element. `bronze` hoort bij Bouw, `olive` bij Interieur.
- Geen verlopen, geen blauw, geen koele grijzen, geen felle signaalkleuren.
- Leesbaarheid: `bronze` als tekst alleen op `charcoal` (6,2:1), niet op licht (2,7:1) — gebruik daar `accent-text`. `olive` als tekst alleen op licht; op donker `interieur-text`. De functionele tokens (`surface`, `ink`, `ink-muted`, `line`, `accent-text`, `interieur-text`) regelen dit per thema; waarden die niet op het board staan, zijn daarvan afgeleid en halen minimaal 4,5:1.

## Typografie

Twee stemmen, zoals op het board:

- **Söhne** (primair, `sans`) — *een moderne, heldere grotesk; strak, tijdloos en uitstekend leesbaar; de balans tussen kracht en verfijning.* Modern / Vakmanschap / Vertrouwen. Voor alles wat werkt: navigatie, labels, lopende tekst, knoppen.
- **Canela** (secundair, `serif`) — *een elegante serif met karakter; voegt verfijning en menselijke warmte toe.* Klassiek / Verfijnd / In balans. Voor statements en koppen, licht gezet, nooit vet.

Beide zijn licentie-lettertypen. Tot de licenties er zijn, staan **Hanken Grotesk** (voor Söhne) en **Newsreader Light** (voor Canela) in de stapel; wissel ze om zodra de echte bestanden er zijn.

- Statements in `display-serif` of `heading-serif`, in zinsvorm, met punt: *Van idee tot leefbare werkelijkheid.*
- Labels, navigatie en hoofdstukken in kapitalen met ruime spatiëring (`label`, `statement`): ÉÉN MERK. TWEE DISCIPLINES.
- Lopende tekst in `body`, links uitgelijnd, nooit uitgevuld, nooit in kapitalen.
- Maximaal twee groottes serif en drie groottes grotesk per pagina of drukwerk.

## Grafische elementen

- **Hoofdstukmarkering**: nummer, label in kapitalen, dan een haarlijn tot de rand (`01  HOOFDLOGO ———`). Alleen voor echte hoofdstukken in een vaste volgorde.
- **Woordkolom**: woorden onder elkaar in gespatieerde kapitalen, afgesloten met een kort lijntje (RUIMTE / MAAKT / MOGELIJK.). Als kanttekening naast beeld of tekst; maximaal één per vlak.
- **Merklijn**: de korte bronzen lijn uit het hoofdlogo, onder een statement. Eén keer per vlak.
- **Haarlijnen** in `line` verdelen de ruimte; geen kaders met schaduw, geen afgeronde hoeken. Alles is haaks (`radius-0`).
- Veel lucht; asymmetrische, rustige composities in een strak raster.

## Beeld

- Architectuur en materiaal, sober en donker: hout, donkere natuursteen en beton, daglicht dat een ruimte binnenvalt, groen dat door een opening zichtbaar is.
- Warm en gedempt van kleur; diep zwart mag. Geen felle kleuren, geen gekantelde kaders, geen stockfoto's van poserende mensen.
- Detail laat vakmanschap zien: een verbinding, een naad, de nerf van het hout.
- Alleen echt werk van Nederdam presenteren als werk van Nederdam.

## Toepassingen

Zoals op het board:
- **Gevelbelettering**: symbool en woordmerk als losse letters in hout of brons op een donkere gevel.
- **Stationery**: visitekaartje in `charcoal` met het hoofdlogo; achterzijde in `stone` met *Ruimte maakt mogelijk.* in gespatieerde kapitalen.
- **Werkkleding**: symbool en woordmerk geborduurd, toon-op-toon op donker textiel.
- **Website**: donkere header met horizontaal logo en navigatie in gespatieerde kapitalen (BOUW · INTERIEUR · OVER ONS · PROJECTEN · CONTACT); hero met een architectuurbeeld, het statement in `display-serif` met de merklijn eronder en een woordkolom (BOUWEN / MET MENSEN / VOOR / MORGEN).
- **Detail / materialisatie**: het symbool als object, in hout, op donkere steen.

## Tokens (samenvatting)

| Token | Donker (merkgrond) | Licht | Gebruik |
|---|---|---|---|
| `charcoal` | #0e0e0e | #0e0e0e | Merkkleur — Kracht · Stabiliteit · Tijdloos. De merkgrond; tekst op lichte ondergrond. |
| `bronze` | #b08b6f | #b08b6f | Merkkleur — Vakmanschap · Warmte · Authentiek. Accent: symbool, discipline Bouw, merklijn. Als tekst alleen op charcoal (6,2:1). |
| `stone` | #c9c2b8 | #c9c2b8 | Merkkleur — Rust · Balans · Verfijning. Lichte vlakken en papier; charcoal-tekst erop (11:1). |
| `olive` | #4a5a46 | #4a5a46 | Merkkleur — Natuur · Interieur · Duurzaam. Discipline Interieur: symbool en accenten. Als tekst alleen op licht (6,5:1 op paper). |
| `taupe` | #3a3a36 | #3a3a36 | Merkkleur — Elegant · Neutraal · Verbinding. Tweede donkere vlak naast charcoal; paper-tekst erop (10:1). |
| `paper` | #f4f0e8 | #f4f0e8 | Gebroken wit uit de logobestanden (woordmerk in de lichte variant). Tekst op charcoal en taupe; lichte ondergrond. |
| `surface` | {charcoal} | {paper} | Achtergrond van pagina of drukwerk. |
| `surface-raised` | #1a1a18 | #ebe6de | Een vlak dat net loskomt van surface (afgeleid). Tekst: ink en ink-muted. |
| `ink` | {paper} | {charcoal} | Tekst op surface en surface-raised. |
| `ink-muted` | #a39c93 | #5f5a53 | Secundaire tekst en metadata op surface en surface-raised (afgeleid; ≥ 6:1). |
| `line` | #2c2b28 | #d3ccc1 | Haarlijnen die ruimte verdelen (afgeleid). Decoratief, draagt geen betekenis. |
| `accent` | {bronze} | {bronze} | Het accent als vlak of lijn: merklijn, actieve navigatie, symbool. |
| `accent-text` | {bronze} | #7e5f45 | Brons als tekst: op charcoal het merkbrons, op licht een diepere tint (afgeleid; 5,1:1 op paper). |
| `interieur-text` | #8c9c84 | {olive} | Olijf als tekst voor de discipline Interieur: op donker een lichtere tint (afgeleid; 6,6:1 op charcoal), op licht het merkolijf. |

Typografie: `sans` = Söhne (voorlopig Hanken Grotesk), `serif` = Canela (voorlopig Newsreader Light). Stijlen: display-serif 64/68 300 · heading-serif 34/40 300 · wordmark-display 72 300 +0.18em · statement 13/24 +0.3em · label 11/16 500 +0.28em · body 15/24 · caption 10/14 500 +0.24em.

Ruimte: 8 · 16 · 24 · 32 · 48 · 64 · 96 px. Hoeken: 0 (alles is haaks).
