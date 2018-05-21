# Munkaidő
Összességében nagyságrendileg 11-12 órát foglalkoztam vele. Ennél pontosabban sajnos nem tudom, mert kicsit kaotikusan jutott rá időm a hétvégén. Ez a következő módon oszlott meg.

- 2 óra CSS a user részen
- 3 óra Angular-ozás
- 4-5 óra utána olvasgatás (mit hogyan érdemes csinálni/lehet szépen megoldani), dokumentáció olvasása és planning
- 2 óra refaktorálás

# Döntések
- Mivel a formoknak az admin felületen ugyanazt kellett tudniuk, így érdemes volt kiszervezni közös komponensbe, ez lett a Table component, ennek adtam át a type specific dolgokat, hogy használja (pl. updateFunction, editorForm stb.), emiatt sokkal könnyebb lenne bővíteni az appot új táblázattal
- Az összes rekord lekérdezése nem túl gazdaságos, ehelyett mindig csak egy kissebb range-nyit kellene elkérni, amit éppen meg kell jeleníteni (pl. lapozásnál csak annyit, amennyi a limit), erre viszont az én API mockom nem volt képes és ez még mindig sokkal jobb megoldás volt, mint egyesével lekérdezgetni a szüséges számút, az az overhead miatt rosszabbul jött volna ki
- A user view-ból kihagytam két rész, az új hozzáadását és a header alatti gombokat, mert ezek nem funkcionáltak volna, ha kell ezt pótlom szívesen
- A navbart-t beraktam a user-view-hoz is a könnyebb navigáció végett
- Törekedtem a clean code-ra és szép architektúrára, bár biztosan van, ahol még fejleszthető a dolog, főleg a CSS-ben
- A table és card component még bontható lenne tovább, de nem akartam, hogy nagyon sok komponens legyen, bővítés esetén erre már biztosan szükség lenne
- A modellek leválasztása miatt a séma megváltozása, viszonylag könnyen kezelhető

# Rövid leírás
Az APP összesen 4 nézetből áll van egy user view, ahol listázom az "adatbázisban" lévő felhasználókat kártyákkal, ezen megjelenítve az adataikat. Ezen kívül ez a nézet tartalmaz még egy headert. A többi nézet az adminisztratív rész, ide a felső navigációt használva vagy direktben a /products /users /login url-eken érhetünk el. Az első két nézet eléréséhet autentikálni kell magunkat, ha anélkül próbáljuk elérni őket, akkor átirányítódunk a login oldalra. A login nézetről be tudunk lépni bármelyik felhasználó adataival, ezeket az src/app/services/in-memory-data.service.ts-ben találjuk a users változóban, az egyszerűség kedvéért itt egy email jelszó páros, hogy ki lehessen próbálni (asdf@asdf.com asdfasdf). Email-re van formátum check, jelszó 6-12 karakter kell, hogy legyen és mindkettő required. (Illetve kicsit hackelősebb megoldás, ha a local storage-ben csinálunk egy token nevű elemet bármilyen stringgel, ez gyorsabb, de cserébe nem megy az átirányítás olyan szépen.) Sikeres bejelentkezéssel a products oldalra kerülünk, ami lapozható és kereshető, rákattintva valamire, szerkeszthető is az adott bejegyzés, amit fel is küldünk az API-nkra, azaz "perzisztens" marad, tehát a navigációt túléli, de oldal frissítésre eltűnik. Hasonlóan működik a user szekció, itt a regisztrált felhasználóink vannak listázva, kereshetően, szerkeszthetően, lapozhatóan. Mindkét form elemei validálva vannak, search field direkt nincs validálva.

Struktúrájában 5 fontos rész van az appban, a modulok a root folderben, ebből van a megszokott app, az appban lévő importok csökkentése miatt a material és a routing szeparálásához az app-routing. Az adatmodellek a models alatt a service-ek a services alatt laknak, mert ezeket többen haszálják. Az app két logikailag elkülöníthető része a user és az admin folderben van. A user-ben van a user view, ez egy kártya lista komponens a "keretnek", a kátya komponens és header. Az adminisztratív rész tartalmaz a product és user entitásnak egy-egy saját komponenst amik a type specific funkciókat látják el és egy közöst table néven, ami a közös funkcionalítást végzi. Van egy login, ami az autentikációhoz szükséges form (a tényleges autentikálást az AuthenticationService és az AuthGuardService végzi). A navigation-t a kényelmesebb navigáció miatt tettem bele. Service-ből háromról nem volt még szó, az in-memory-data az API mock, a product és user pedig a megfelelő típus HTTP műveleteit végző service.
