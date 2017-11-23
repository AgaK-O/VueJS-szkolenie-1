# Zadanie domowe

1. Przerób plik index.html z listą zwierząt na interaktywna aplikacje Vue.js gdzie zarówno tytuł strony jak i lista zwierząt bedą pobierane z instancji Vue. 
2. Pamietaj o dokładnym odwzorowaniu listy (zauważ, ze parzyste i nieparzyste elementy listy maja rózne klasy css - efekt ten uzyskaj za pomocą Vue, nie dopisujac cssa). 
3. Każda pozycja z listy powinna byc komponentem (jeden komponent `animal`).
4. Po kliknięciu na dany komponent z listy powinien on usuwać danego zwierzaka z modelu danych (nie potrzeba tu emitowania eventów, wystarczy zwykła obsługa zdarzenia po kliknięciu na komponent.
5. Tekst `UWAGA: liczba zwierzaków zmalała i wynosi 3` powinien być widoczny tylko jesli liczba zwierzaków jest mniejsza niż 4 i wyświetlać aktualną liczbę zwierzaków

 Oto model danych, na którym będziemy pracować.
```
[
    { name: 'Lew', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg },
    { name: 'Kot', imgSrc: 'http://www.catster.com/wp-content/uploads/2017/06/small-kitten-meowing.jpg' },
    { name: 'Pies', imgSrc: 'https://s7d2.scene7.com/is/image/PetSmart/PB1201_STORY_CARO-Authority-HealthyOutside-DOG-20160818?$PB1201$' },
    { name: 'Zebra', imgSrc: 'https://a-z-animals.com/media/animals/images/470x370/zebra_8.jpg' }
]
```
