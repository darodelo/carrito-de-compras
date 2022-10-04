import Card from './card/Card';

// La base de datos se divide en 9 propiedades por producto:
//
// Id: identificador único. Los que comienzan con "F" son funkos, los que comienzan con "A" son ropa y accesorios
// Img: enlace a la imagen del producto
// Alt: texto alternativo a la imagen
// ProductName: es el nombre del producto
// Description: descripción del producto
// Price: precio del producto expresado en USD
// ProductType: el tipo de producto, Pop! (son los fnkos) y Apparel & Accessories (remeras, mochils, llaveros) 
// ProductSubType: sub tipo de producto. Los funkos se dividen en Jumbo para los de 8", Mega para los de 18", Súper, Deluxe, Álbum, Cover, etc.
//                 Los que no contienen dato son solo Pop!, los funkos comunes
//                 Después están Apparel para remeras, Keychains para llaveros, Bags para mochilas y bolsos, Pins para los pines
// Category: el tema o universo al que pertencen (Marvel, Disney, DC Comics, Family, Music, Anime, Action & Adventure, etc.)
//

export const CARDCONTENT = [

  // FUNKOS

    {
      Id:'F1',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/59282_POP_Jumbo-_The_Batman-_POP_1_GLAM-WEB.png',
      Alt:'Front image of 10" Batman - The Batman pop jumbo',
      ProductName:'10" BATMAN - THE BATMAN',
      Description:'Únete a The Caped Crusader™, Batman, en sus primeros años de lucha contra el crimen en Gotham City. ¡Este Jumbo Pop! Batman™ está listo para ejecutar la venganza. ¡Celebre a uno de los superhéroes más reconocibles de DC Comics agregando el imponente Pop! Batman a tu colección DC de The Batman. La figura de vinilo mide aproximadamente 10,75 pulgadas de alto.',
      Price:40.00,
      ProductType:'POP!',
      ProductsSubType:'JUMBO',
      Category:'DC Comics',
    },

    {
      Id:'F2',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/55378_POP_Jumbo-_Arcadia-_POP_6_GLAM-1-WEB.png',
      Alt:'Front image of 10" Giganotosaurus - Jurassic World Dominion pop jumbo',
      ProductName:'10" GIGANOTOSAURUS - JURASSIC WORLD: DOMINION',
      Description:'¡Un gran descubrimiento ruge en tu camino! ¡Captura Pop! Jumbo Giganotosaurus para tu colección Jurassic World: Dominion. Pop! Jumbo Giganotosaurus quiere seguirte a casa y desempeñar un papel importante en la expansión de tu set. ¡Agregue un poco de aventura y emoción con Pop! Giganotosaurio gigante. La figura de vinilo mide aproximadamente 10 pulgadas de alto.',
      Price:40.00,
      ProductType:'POP!',
      ProductsSubType:'JUMBO',
      Category:'Action & Adventure',
    },

    {
      Id:'F3',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/51901_MHA_DekuInfinite10in_POP_GLAM-1-WEB.png',
      Alt:'Front image of 10" Infinite Deku with Eri - My Hero Academia pop jumbo',
      ProductName:'10" INFINITE DEKU WITH ERI - MY HERO ACADEMIA',
      Description:'Deku y los héroes en formación en U.A. High School están decididos a rescatar a Eri. ¡Ofrezca refugio seguro a Jumbo Pop! Deku con Eri agregándolos a tu colección My Hero Academia y completa el conjunto. ¡Este Jumbo Pop! ¡Seguro que será un gran éxito en su pantalla! La figura de vinilo mide aproximadamente 11.25 pulgadas de alto.',
      Price:40.00,
      ProductType:'POP!',
      ProductsSubType:'JUMBO',
      Category:'Anime',
    },
    
    {
      Id:'F4',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/58172_DisneyVillains_MaleficentDragon_JumboPOP_GLAM-WEB.png',
      Alt:'Front image of 10" Maleficent as Dragon (Glow) - Disney Villains pop',
      ProductName:'10" MALEFICENT AS DRAGON (GLOW) - DISNEY VILLAINS',
      Description:'Impulsada por la ira, Maléfica se ha transformado en un dragón. ¡Agregue el exclusivo Jumbo Pop que brilla en la oscuridad! Maléfica como Dragón a tu colección de Villanos Disney. La figura de vinilo mide aproximadamente 10,75 pulgadas de alto.',
      Price:40.00,
      ProductType:'POP!',
      ProductsSubType:'JUMBO',
      Category:'Disney',
    },

    {
      Id:'F5',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/50469_Halloween_MichaelMyer_POP_GLAM-WEB.png',
      Alt:'Front image of 10" Michael Myers - Halloween pop jumbo',
      ProductName:'10" MICHAEL MYERS - HALLOWEEN',
      Description:'Michael Myers sigue a la caza. Asegúrate de llevar la cuenta de cuántas figuras hay en tu colección en caso de que falte alguna. Este nuevo Jumbo Pop! Michael Myers de Halloween encenderá al resto de figuras de tu colección. La figura de vinilo mide 10 pulgadas de alto.',
      Price:40.00,
      ProductType:'POP!',
      ProductsSubType:'JUMBO',
      Category:'Horror',
    },

    {
      Id:'F6',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/65003_TNBC_Blacklight_OogieBoogie_POP_JUMBO_GLAM-WEB.png',
      Alt:'Front image of 10" Oogie Boogie with Dice (Black Light) - The Nightmare Before Christmas pop jumbo',
      ProductName:'10" OOGIE BOOGIE WITH DICE (BLACK LIGHT) - THE NIGHTMARE BEFORE CHRISTMAS',
      Description:'¡El tipo más malo que hay está haciendo una gran entrada! ¡El Jumbo Pop exclusivo de Funko! Oogie Boogie está listo para apostar en tu colección The Nightmare Before Christmas. Su colorido vívido está diseñado para brillar intensamente bajo la luz negra, inspirando una atmósfera espeluznante. La figura de vinilo mide aproximadamente 10 pulgadas de alto.',
      Price:40.00,
      ProductType:'POP!',
      ProductsSubType:'JUMBO',
      Category:'Disney',
    },

    {
      Id:'F7',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/50223_DragonBallZ_Shenron10in_POP_GLAM-WEB.png',
      Alt:'Front image of 10" Shenron - Dragon Ball Z pop jumbo',
      ProductName:'10" SHENRON - DRAGON BALL Z',
      Description:'Con las Dragon Balls recogidas a sus pies, aparece Shenron, desenrollándose mientras dice: "Soy Shenron. Te concederé cualquier deseo. Ahora habla". Este Jumbo! Pop de 10 pulgadas Shenron te concederá el deseo de su presencia en tu colección Dragon Ball Z. La figura de vinilo mide 10 pulgadas de alto.',
      Price:40.00,
      ProductType:'POP!',
      ProductsSubType:'JUMBO',
      Category:'Anime',
    },

    {
      Id:'F8',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/62228_POP_Jumbo-_Arcadia-_POP_18_GLAM-1-WEB.png',
      Alt:'Front image of 10" T.Rex - Jurassic World: Dominion pop jumbo',
      ProductName:'10" T.REX - JURASSIC WORLD: DOMINION',
      Description:'¡Un gran descubrimiento ruge en tu camino! Captura Jumbo Pop! exclusivo T.Rex para tu colección Jurassic World Dominion. Exclusivo Jumbo Pop! T. Rex quiere seguirte a casa y desempeñar un papel importante en la expansión de tu conjunto. ¡Agregue un poco de aventura y emoción! La figura de vinilo mide aproximadamente 9 pulgadas de alto.',
      Price:40.00,
      ProductType:'POP!',
      ProductsSubType:'JUMBO',
      Category:'Action & Adventure',
    },

    {
      Id:'F9',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/62712_Pokemon_Lapras_JumboPOP_GLAM-WEB.png',
      Alt:'Front image of 10" Lapras - Pokémon pop jumbo',
      ProductName:'10" LAPRAS - POKÉMON',
      Description:'Atrapa y entrena a Lapras como este Jumbo Pop! exclusivo de Target para agregar a tu colección de Juegos Pokémon. El vinilo coleccionable mide aproximadamente 10 pulgadas de alto. Encuentre más productos Funko en Target.',
      Price:40.00,
      ProductType:'POP!',
      ProductsSubType:'JUMBO',
      Category:'Video Games',
    },

    {
      Id:'F10',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/45598a_NBA_MichaelJordanRedUniform_POP_GLAM-WEB.png',
      Alt:'Front image of 10" Michael Jordan - Bulls pop jumbo',
      ProductName:'10" MICHAEL JORDAN - BULLS',
      Description:'Tu colección de deportes no sabrá qué golpeó cuando traigas a casa este Michael Jordan Pop! de 10 pulgadas de alto de vinilo. Michael viste su camiseta de los Chicago Bulls para esta figura épica de la estrella del baloncesto.',
      Price:40.00,
      ProductType:'POP!',
      ProductsSubType:'JUMBO',
      Category:'Sports',
    },

    {
      Id:'F11',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/63162_DragonBall_Vegeta10in_POP_GLAM-WEB.png',
      Alt:'Front image of 10" Vegeta - Dragon Ball Zpop jumbo',
      ProductName:'10" VEGETA - DRAGON BALL Z',
      Description:'"¿Estás listo ahora para presenciar un poder que no se ha visto en miles de años?" Jumbo Pop! Vegeta está listo para luchar por su lugar en tu colección Dragon Ball Z. La figura de vinilo mide aproximadamente 10 pulgadas de alto.',
      Price:40.00,
      ProductType:'POP!',
      ProductsSubType:'JUMBO',
      Category:'Anime',
    },

    {
      Id:'F12',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/600x600_PROMO_Black.png',
      Alt:'Lifestyle image of 18" Iron Man next to a regular sized pop',
      ProductName:'18" IRON MAN - AVENGERS ENDGAME',
      Description:'Tony Stark se prepara con su traje rojo y dorado de Iron Man para unirse a tu colección Marvel Avengers: Endgame como figura Mega Pop! ¡Completa tu alineación de Marvel con la imponente figura exclusiva de Funko! La figura de vinilo mide aproximadamente 18 pulgadas de alto.',
      Price:100.00,
      ProductType:'POP!',
      ProductsSubType:'MEGA',
      Category:'Marvel',
    },

    {
      Id:'F13',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/59339_Halo_EscharumwAxe_POP_GLAM-WEB.png',
      Alt:'Front image of 6" Escharum with Gravity Axe - Halo pop super',
      ProductName:'6" ESCHARUM WITH GRAVITY AXE - HALO',
      Description:'Súper Pop! Escharum tiene su hacha de gravedad en la mano, lista para llevar a los desterrados a la batalla en tu colección Halo Infinite. Quizás si lo capturas primero, tu colección sobrevivirá. La figura de vinilo mide aproximadamente 6,5 pulgadas de alto.',
      Price:20.00,
      ProductType:'POP!',
      ProductsSubType:'SUPER',
      Category:'Video Games',
    },

    {
      Id:'F14',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/1436_4202_8d6a32d34471027_38565_Jaws_Shark_6IN_POP_WEB.png',
      Alt:'Front image of 6" Jaws pop super',
      ProductName:'6" JAWS',
      Description:'Enrolla el Gran Blanco que estaba causando todo el caos en Amity Island para tu colección Jaws. El coleccionable mide 6 pulgadas de largo.',
      Price:20.00,
      ProductType:'POP!',
      ProductsSubType:'SUPER',
      Category:'Horror',
    },

    {
      Id:'F15',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/6368_Naruto_Kurma6inch_GLAM_HiRes-WEB.png',
      Alt:'Front image of 6" Kurama - Naruto: Shippuden pop',
      ProductName:'6" KURAMA - NARUTO: SHIPPUDEN',
      Description:'También conocido como Nueve Colas, Kurama es una criatura demoníaca capaz de ejercer chakra para realizar ataques mortales. ¡Esta bestia fue sellada en Naruto Uzumaki, pero ahora es tu oportunidad de recolectar la criatura para tu colección de Naruto como Super Pop! Kurama. La figura de vinilo mide 6 pulgadas de alto.',
      Price:20.00,
      ProductType:'POP!',
      ProductsSubType:'SUPER',
      Category:'Anime',
    },

    {
      Id:'F16',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/65022_TheSimpsons_SpiderWillie_POP_ConceptGlam-WEB.png',
      Alt:'Front image of 6" Nightmare Willie - The Simpsons pop super',
      ProductName:'6" NIGHTMARE WILLIE - THE SIMPSONS',
      Description:'¡Las decoraciones de Halloween y las exhibiciones de Los Simpson se vuelven más extrañas con el Super Pop exclusivo de Funko! Pesadilla Willie! El jardinero Willie se transforma debido a un giro de eventos en Treehouse of Horror. Con este exclusivo Pop! coleccionable, no hay necesidad de quitar la pantalla para el programa de comedia animada durante la temporada espeluznante. La figura de vinilo mide aproximadamente 6,25 pulgadas de alto.',
      Price:25.00,
      ProductType:'POP!',
      ProductsSubType:'SUPER',
      Category:'Simpsons',
    },

    {
      Id:'F17',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/65263_SquidGame_YoungheeDoll_POP_GLAM-1-WEB.png',
      Alt:'Front image of 6" Young-Hee Doll - Squid Game pop super',
      ProductName:'6" YOUNG-HEE DOLL - SQUID GAME',
      Description:'¡Luz verde, vamos! Captura este Pop! exclusivo de la Comic-Con de San Diego 2022 Young-Hee Doll, presentada en la primera ronda de los juegos Squid Game. ¿Qué sucede cuando se envía una invitación misteriosa a personas en riesgo que necesitan dinero con urgencia? Comienzan los juegos. ¡Completa tu set Squid Game con este Pop exclusivo de Funko-web de edición limitada! Muñeca Young Hee. La figura de vinilo mide aproximadamente 6,38 pulgadas de alto.',
      Price:25.00,
      ProductType:'POP!',
      ProductsSubType:'SUPER',
      Category:'Action & Adventure',
    },

    {
      Id:'F18',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/65587_CocaCola_PolarBearGlasses_POP_GLAM-WEB.png',
      Alt:'Front image of 90s Coca-Cola Polar Bear pop',
      ProductName:'90S COCA-COLA POLAR BEAR',
      Description:'Manténgase fresco y deslícese hacia las vacaciones con un Pop! de un oso polar de Coca-Cola de los 90. Este Pop! oso polar de Coca-Cola, inspirado en los comerciales clásicos de Coca-Cola de los años 90, quiere ponerse sus gafas de esquí, bajar por una pista helada y deslizarse directamente hacia su Pop. Colección de iconos de anuncios. ¡Ten una refrescante botella de Coca-Cola lista cuando Pop! Oso Coca-Cola de los 90 llega a la meta. La figura de vinilo mide aproximadamente 3,77 pulgadas de alto.',
      Price:15.00,
      ProductType:'POP!',
      ProductsSubType:'',
      Category:'Ad Icons',
    },

    {
      Id:'F19',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/54476_Aaliyah_POP_GLAM-WEB.png',
      Alt:'Front image of Aaliyah pop',
      ProductName:'AALIYAH',
      Description:'La "princesa del R&B" y la "reina del pop urbano", Aaliyah, sube al escenario de tu colección de música como Pop! Aaliyah. La figura de vinilo mide aproximadamente 4,25 pulgadas de alto.',
      Price:12.00,
      ProductType:'POP!',
      ProductsSubType:'',
      Category:'Music',
    },

    {
      Id:'F20',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/55519_ATLA_AangAirBending_POP_GLAM-WEB_-_Copy.png',
      Alt:'Front image of Aang - Avatar: The Last Airbender pop',
      ProductName:'AANG - AVATAR: THE LAST AIRBENDER',
      Description:'A Aang le dijeron que él era el próximo Avatar con solo 12 años. Mientras intentan huir, Aang y su compañero bisonte del cielo están encerrados en hielo y sobreviven para escapar después de un siglo y restablecer el equilibrio en el mundo. ¡Colecciona el Pop exclusivo de la Comic Con de Nueva York 2021! Aang, control de aire, para restablecer el equilibrio en tu colección de Avatar: The Last Airbender. La figura de vinilo mide aproximadamente 3,75 pulgadas de alto.',
      Price:15.00,
      ProductType:'POP!',
      ProductsSubType:'',
      Category:'Anime',
    },

    {
      Id:'F21',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/1436_4203_36463_Avatar_AangWithMomo_POP_WEB.png',
      Alt:'Front image of Aang with Momo - Avatar: The Last Airbender pop',
      ProductName:'AANG WITH MOMO - AVATAR: THE LAST AIRBENDER',
      Description:'A Aang le dijeron que él era el próximo Avatar con solo 12 años. Mientras intentaba huir, Aang quedó encerrado en hielo y sobrevivió para salir después de un siglo y restablecer el equilibrio en el mundo. Colecciona Pop! Aang y Momo para restaurar el equilibrio de tu colección de Avatar: The Last Airbender. La figura de vinilo mide aproximadamente 5,75 pulgadas de alto.',
      Price:12.00,
      ProductType:'POP!',
      ProductsSubType:'',
      Category:'Anime',
    },

    {
      Id:'F22',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/57572_Hamilton_AaronBurr_POP_GLAM-WEB.png',
      Alt:'Front image of Aaron Burr - Hamilton pop',
      ProductName:'AARON BURR - HAMILTON',
      Description:'Conmemora el increíble y galardonado musical Hamilton organizando tu propia actuación privada con Pop! Aarón Burr. La figura de vinilo mide aproximadamente 3,75 pulgadas de alto.',
      Price:12.00,
      ProductType:'POP!',
      ProductsSubType:'',
      Category:'Family',
    },

    {
      Id:'F23',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/64199_SheHulk_POP4_GLAM-WEB.png',
      Alt:'Front image of Abomination - Marvel Studios She-Hulk pop',
      ProductName:'ABOMINATION - MARVEL STUDIOS SHE-HULK',
      Description:'Aplasta tu colección Marvel con Pop! Abominación. Pop! Abominación está buscando saltar a tu set de Marvel. ¡Únete a tus héroes favoritos para enfrentarte a Pop! Abominación y haz crecer tu colección She-Hulk: Attorney at Law de Marvel Studios. La figura de vinilo mide aproximadamente 4,78 pulgadas de alto.',
      Price:12.00,
      ProductType:'POP!',
      ProductsSubType:'',
      Category:'Marvel',
    },

    {
      Id:'F24',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/50468_DC_SupermanActionComic_POP_GLAM-WEB_1.png',
      Alt:'Display image of Action Comics #1 - Superman comic covers',
      ProductName:'ACTION COMICS #1 - SUPERMAN',
      Description:'¡Arriba, arriba y lejos! ¡Celebra la primera aparición de Superman con este Pop! Portada de cómic en vinilo tributo a Action Comics #1, ¡publicado en 1938! ¡Ninguna colección de DC Comics está completa sin este coleccionable único! La figura de vinilo mide aproximadamente 3,75 pulgadas de alto. Dimensiones aproximadas de la funda protectora: 7"ancho x 10.75"alto x 3.25"profundo',
      Price:20.00,
      ProductType:'POP!',
      ProductsSubType:'Covers',
      Category:'DC Comics',
    },

    {
      Id:'F25',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/64032_U2ZooTV_Adam_GLAM-1-WEB.png',
      Alt:'Front image of Adam - U2 Zoo TV pop',
      ProductName:'ADAM - U2 ZOO TV',
      Description:'¡Pulsa, rockea y balancéate con los ritmos de conducción y las letras poderosas de la banda U2 con Pop! Adán Clayton. ¡Toma asientos de primera fila y crea tu propio concierto con Pop! Adán en acción. El bajista galardonado, Adam Clayton, en Pop! formulario, está listo para improvisar con el resto de los miembros de tu U2 Pop! Conjunto de rocas. ¡Colecciónalos todos! La figura de vinilo mide aproximadamente 3,93 pulgadas de alto.',
      Price:12.00,
      ProductType:'POP!',
      ProductsSubType:'',
      Category:'Music',
    },

    {
      Id:'F26',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/65419_GenshinImpact_Aether_POPAsia_GLAM-WEB.png',
      Alt:'Front image of Aether - Genshin Impact pop',
      ProductName:'AETHER - GENSHIN IMPACT',
      Description:'Domina los elementos mientras viajas por Teyvat para encontrar a tu hermano perdido en Genshin Impact. ¡El juego va más allá de las consolas, ya que ahora puedes coleccionar a tus personajes favoritos como Funko Pop! ¡cifras! ¡Elige sabiamente a tus compañeros de equipo y construye una poderosa colección de Genshin Impact, comenzando con Pop! Éter. La figura de vinilo mide aproximadamente 4,75 pulgadas de alto.',
      Price:12.00,
      ProductType:'POP!',
      ProductsSubType:'',
      Category:'Video Games',
    },

    {
      Id:'F27',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/32956_SW_CloneWars_Ahsoka_POP_GLAM-WEB.png',
      Alt:'Front image of Ahsoka - Star Wars pop',
      ProductName:'AHSOKA - STAR WARS',
      Description:'Ahsoka Tano, que alguna vez fue una padawan ansiosa, ahora está demostrando ser una guerrera capaz a través de sus victorias en varias batallas a lo largo de la Guerra de los Clones. ¡Celebra el fandom más estelar de todos con Star Wars: The Clone Wars Pop! Ahsoka Tano. El cabezón de vinilo mide aproximadamente 4,5 pulgadas de alto.',
      Price:12.00,
      ProductType:'POP!',
      ProductsSubType:'',
      Category:'Star Wars',
    },

    {
      Id:'F28',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/54527_StarWars_Mandolarian_AhsokawSaber_POP_GLAM-WEB.png',
      Alt:'Front image of Ahsoka with Sabers - The Mandalorian pop',
      ProductName:'AHSOKA WITH SABERS - THE MANDALORIAN',
      Description:'Ahsoka Tano, que alguna vez fue una entusiasta padawan, ha demostrado ser una guerrera capaz a través de sus victorias en varias batallas a lo largo de la Guerra de los Clones. ¡Celebra el fandom más estelar de todos con Star Wars™ The Manadolrian™ Pop! de Ahsoka Tano. El cabezón de vinilo mide aproximadamente 4,75 pulgadas de alto.',
      Price:12.00,
      ProductType:'POP!',
      ProductsSubType:'',
      Category:'Star Wars',
    },

    {
      Id:'F29',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/59568_Jersey_POP6_POP_GLAM-1-WEB.png',
      Alt:'Front image of Aisha - Marvel Studios Ms. Marvel pop',
      ProductName:'AISHA - MARVEL STUDIOS MS. MARVEL',
      Description:'Cuando un fanático de los superhéroes se convierte en superhéroe, ¡las posibilidades parecen infinitas para Kamala Khan! ¡Completa tu colección Marvel Ms. Marvel con Pop! Aisha. El cabezón de vinilo mide aproximadamente 3,9 pulgadas de alto.',
      Price:12.00,
      ProductType:'POP!',
      ProductsSubType:'',
      Category:'Marvel',
    },

    {
      Id:'F30',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/59343_Pokemon_Alakazam_POP_GLAM-WEB.png',
      Alt:'Front image of Alakazam - Pokémon pop',
      ProductName:'ALAKAZAM - POKÉMON',
      Description:'¡Tu sueño de convertirte en Entrenador no está fuera de tu alcance! Atrapa a este Pop! Games™ Alakazam para agregar a tu colección S9-Pokémon. La figura de vinilo mide aproximadamente 4,18 pulgadas de alto.',
      Price:12.00,
      ProductType:'POP!',
      ProductsSubType:'',
      Category:'Video Games',
    },

    {
      Id:'F31',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/5891_HarryPotter_Dumbledore_POP_GLAM-WEB.png',
      Alt:'Front image of Albus Dumbledore - Harry Potter pop',
      ProductName:'ALBUS DUMBLEDORE - HARRY POTTER',
      Description:'Los estudiantes necesitan a su Director para cancelar sus exámenes antes de fin de año. Colecciona Pop! Albus Dumbledore para compartir sus sabias palabras con los estudiantes de tu colección de Harry Potter. El coleccionable mide aproximadamente 3,75 pulgadas de alto.',
      Price:12.00,
      ProductType:'POP!',
      ProductsSubType:'',
      Category:'Harry Potter',
    },

    {
      Id:'F32',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/65646_HarryPotter_HogsHeadwDumbledore_POPDeluxe_GLAM-WEB.png',
      Alt:'Front image of Albus Dumbledore with Hogs Head Inn - Harry Potter pop deluxe',
      ProductName:'ALBUS DUMBLEDORE WITH HOGS HEAD INN - HARRY POTTER',
      Description:'¡Haz un viaje fuera de Hogwarts y visita Hogsmeade con Pop! Deluxe Albus Dumbledore con The Hogs Head Inn. ¡Construye Hogsmeade en tu colección Wizarding World completando el set! Las figuras de vinilo miden aproximadamente 4 pulgadas de alto y 6,83 pulgadas de alto.',
      Price:30.00,
      ProductType:'POP!',
      ProductsSubType:'DELUXE',
      Category:'Harry Potter',
    },

    {
      Id:'F33',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/57573_Hamilton_AlexanderHamilton_POP_GLAM-WEB.png',
      Alt:'Front image of Alexander Hamilton - Hamilton pop',
      ProductName:'ALEXANDER HAMILTON - HAMILTON',
      Description:'Conmemora el increíble y galardonado musical Hamilton organizando tu propia actuación privada con Pop! Alejandro Hamilton. La figura de vinilo mide aproximadamente 3,75 pulgadas de alto.',
      Price:12.00,
      ProductType:'POP!',
      ProductsSubType:'',
      Category:'Family',
    },

    {
      Id:'F34',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/64038_POP_Albums__Alice_Cooper-_WTMN_GLAM-1-1-WEB.png',
      Alt:'Front image of Alice Cooper - Welcome To My Nightmare pop album',
      ProductName:'ALICE COOPER - WELCOME TO MY NIGHTMARE',
      Description:'¡Despierta a una pesadilla tan inquietante que se mece! Captura la portada del álbum Welcome to My Nightmare de Alice Cooper para tu Pop! Álbumes de colección. Este álbum, lanzado en 1975, se convirtió en platino y presenta varios éxitos de rock, incluida la canción principal "Welcome to My Nightmare". Este Pop! Álbumes de colección viene con un Pop! de Alice Cooper, vestido con sombrero de copa y traje, tal como aparece en la portada de su álbum, dando la bienvenida a los oyentes a un viaje de pesadillas. La portada del álbum también está empaquetada en un estuche protector que se puede colgar en la pared. ¡El pop! el interior está asegurado a la carcasa para mantener su pantalla increíblemente impecable. La figura de vinilo mide aproximadamente 3,8 pulgadas de alto.',
      Price:20.00,
      ProductType:'POP!',
      ProductsSubType:'Albums',
      Category:'Music',
    },

    // REMERAS, MOCHILAS Y ACCESORIOS

    {
      Id:'A1',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/60376_CINDERELLA_DREAM_WEB.png',
      Alt:'Front image of A Dream is a Wish Your Heart Makes Tee - Cinderella',
      ProductName:'A DREAM IS A WISH YOUR HEART MAKES TEE - CINDERELLA',
      Description:'¡Sueña con aventuras maravillosas mientras usas el Pop! Camiseta de la princesa Cenicienta. ¡Con solo una pizca de polvo de hada madrina, Pop! Cenicienta cobra vida con un vestido rosa de princesa en esta camiseta de cuello redondo. En el fondo, el castillo brilla y aparecen las palabras "Un sueño es un deseo que hace tu corazón". Esta camiseta azul marino de manga corta combina bien con una variedad de pantalones casuales para una apariencia versátil. En los días más fríos, puedes usarlo con una linda chaqueta o combinarlo con una camisa abotonada de manga larga. Es la camiseta perfecta para reunir todo lo que está en su lista de deseos para un día perfecto como princesa, o para convertir las salidas diarias en asuntos reales. Adulto unisex tallas SM-2X, 100% algodón',
      Price:20.00,
      ProductType:'Apparel & Accessories',
      ProductsSubType:'Apparel',
      Category:'Disney',
    },

    {
      Id:'A2',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/60377_MIDNIGHT_STRIKES_CINDERELLA_WEB.png',
      Alt:'Front image of When the Clock Strikes Midnight Kids Tee - Cinderella',
      ProductName:'WHEN THE CLOCK STRIKES MIDNIGHT KIDS TEE - CINDERELLA',
      Description:'¿Mirarías la hora? La camiseta exclusiva Funko Disney Princess Cinderella Pop! es la elección perfecta para los niños que corren. En el frente, Pop! Cenicienta regresa a casa después de una velada encantadora en el castillo del príncipe azul. Cuando el reloj marca las doce, Cenicienta baja corriendo las escaleras del palacio dejando atrás uno de sus zapatos de cristal. La frase, "Cuando el reloj marca la medianoche" aparece en un guión de ensueño a continuación. ¡Estallará! ¿Cenicienta llega a casa antes de que la magia de su hada madrina llegue a su fin? Esta cómoda camiseta es perfecta para viajar o mantener las cosas informales en casa. Unisex niños tallas XS-XL, 100% algodón',
      Price:10.00,
      ProductType:'Apparel & Accessories',
      ProductsSubType:'Apparel',
      Category:'Disney',
    },

    {
      Id:'A3',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/WDBK2384_WD_VILLAIN_BACKPACK_FRONT.png',
      Alt:'Front image of Disney Villains Backpack',
      ProductName:'DISNEY VILLAINS BACKPACK',
      Description:'¡Ser malo nunca se ha visto tan bien! El Funko Pop! de Loungefly Disney Villains Mini Backpack presenta algunos queridos malos que siempre están listos para tramar un nuevo plan. ¡En el bolsillo frontal con cremallera, la Reina Malvada, el Dr. Facilier y Maléfica aparecen en Funko Pop! forma. Arriba, Lady Tremaine Lucifer, la gata, y Cruella de Vil lanzaban una mirada desdeñosa. Este accesorio diabólico tiene espacio para todos tus elementos esenciales y agrega un toque de actitud a cualquier atuendo. El Funko Pop! de Loungefly la mochila Disney Villains Mini está hecha de cuero vegano (poliuretano). La bolsa tiene correas ajustables para los hombros, herrajes metálicos resistentes y detalles impresos. Esta bolsa es un producto de Disney con licencia oficial. Dimensiones de la mochila: 9" ancho x 10.5" alto x 4.5" profundidad (Tenga en cuenta: el ancho se mide en la parte inferior de la mochila).',
      Price:40.00,
      ProductType:'Apparel & Accessories',
      ProductsSubType:'Bags',
      Category:'Disney',
    },

    {
      Id:'A4',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/WDPN2778_FUNKO_POP_PIN_SET_WD_VILLAINS.png',
      Alt:'Front Assortment image of Disney Villains 4-Pack Pin Set',
      ProductName:'DISNEY VILLAINS 4-PACK PIN SET',
      Description:'¡Reúna a un grupo de demonios perversamente maravillosos para pasar una noche en la ciudad! Este Loungefly Disney Funko Pop! juego de pines de villanos de Disney de 4 piezas es un grito. Dr. Facilier, Maléfica, Cruella de Vil y Lady Tremaine se unen en ricos detalles de relleno de esmalte. Son los accesorios perfectos para cualquier ocasión animada. Los pines de esmalte miden 1,5 pulgadas de alto y cuentan con herrajes de color dorado antiguo. En la parte posterior, encontrarás el grabado de la corona de Funko/Loungefly.',
      Price:20.00,
      ProductType:'Apparel & Accessories',
      ProductsSubType:'Pins',
      Category:'Disney',
    },

    {
      Id:'A5',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/WDPP0047-POPD23BAYMAXENAMELPINSET0230FRONT-WEB.png',
      Alt:'Front image of Baymax 2-Pack - Big Hero 6 pop pin',
      ProductName:'BAYMAX 2-PACK PIN SET - BIG HERO 6',
      Description:'¡La atención óptima de un Healthcare Companion ™ está al alcance de la mano con este Baymax 2-Pack Pop exclusivo de Loungefly Disney! Juego de pines. Duplica la compañía cariñosa con un Pop! pin de Baymax con armadura roja y otro Pop! pin de él en todo blanco. En la oscuridad, el pin de esmalte blanco brilla, para que puedas encontrarlo en cualquier momento del día. Cada pin esmaltado mide aproximadamente 4,25 pulgadas de alto y presenta herrajes metálicos plateados brillantes y un soporte incorporado. Estos pines son productos con licencia oficial de Disney.',
      Price:40.00,
      ProductType:'Apparel & Accessories',
      ProductsSubType:'Pins',
      Category:'Disney',
    },

    {
      Id:'A6',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/64234_FNAF_Freddy_Tiedye_POPKeychain_GLAM-1-WEB.png',
      Alt:'Front image of Freddy Fazbear in Tie-Dye - Five Nights at Freddys pop keychain',
      ProductName:'FREDDY FAZBEAR IN TIE-DYE - FIVE NIGHTS AT FREDDYS',
      Description:'¡Sobrevive la noche en Freddy Fazbears Pizza con Five Nights at Freddys Pocket Pop! Llavero Freddy Tie-Dye. ¡Atrápalo y mantenlo en su lugar antes de que se mueva! El llavero de vinilo mide aproximadamente 4 pulgadas de largo.',
      Price:5.00,
      ProductType:'Apparel & Accessories',
      ProductsSubType:'Keychains',
      Category:'Video Games',
    },

    {
      Id:'A7',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/64233_FNAF_Bonnie_Tiedye_POPKeychain_GLAM-1-1-WEB.png',
      Alt:'Front image of Bonnie in Tie-Dye - Five Nights at Freddys pop keychain',
      ProductName:'BONNIE IN TIE-DYE - FIVE NIGHTS AT FREDDYS',
      Description:'¡Sobrevive la noche en Freddy Fazbears Pizza con Five Nights at Freddys Pocket Pop! Llavero Tie-Dye Bonnie. ¡Atrápalo y mantenlo en su lugar antes de que se mueva! El llavero de vinilo mide aproximadamente 4 pulgadas de largo.',
      Price:5.00,
      ProductType:'Apparel & Accessories',
      ProductsSubType:'Keychains',
      Category:'Video Games',
    },

    {
      Id:'A8',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/58041_POP_KC_MHA_DekuWGloves_GLAM-WEB.png',
      Alt:'Front image of Izuku Midoriya with Gloves - My Hero Academia pop',
      ProductName:'IZUKU MIDORIYA WITH GLOVES - MY HERO ACADEMIA',
      Description:'“Mi motivación puede parecer trivial en comparación con la tuya, pero tampoco puedo perder. Tengo que estar a la altura de las esperanzas de quienes me apoyaron”. Izuku Midoriya (Deku) está listo para pelear y no retrocederá. ¡Cualquier fanático de My Hero Academia necesita Pocket Pop! Llavero Izuku Midoriya, equipado con sus guantes especiales, para recordarles que nunca se rindan. El llavero de vinilo mide aproximadamente 3 pulgadas de largo.',
      Price:5.00,
      ProductType:'Apparel & Accessories',
      ProductsSubType:'Keychains',
      Category:'Anime',
    },

    {
      Id:'A9',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/58037_POP_KC_MHA_Hawks_GLAM-WEB.png',
      Alt:'Front image of Hawks - My Hero Academia pop keychain',
      ProductName:'HAWKS - MY HERO ACADEMIA',
      Description:'Lleva tu colección My Hero Academia a nuevas alturas con Pop! Llavero Hawks. Hawks, también conocido como Keigo Takami, es rápido y habilidoso, alcanzando los rangos más altos de Pro Hero. ¡Estallido! Hawks, con sus características alas rojas, parece listo para entrar en acción. ¡Agregue Pop! Llavero Hawks para ayudar a los héroes en formación en tu colección My Hero Academia. El llavero de vinilo mide aproximadamente 3 pulgadas de largo.',
      Price:5.00,
      ProductType:'Apparel & Accessories',
      ProductsSubType:'Keychains',
      Category:'Anime',
    },

    {
      Id:'A10',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/59494_Jersey_POP1_POPKeychain_GLAM-1-WEB_1.png',
      Alt:'Front image of Ms. Marvel - Marvel Studios Ms. Marvel pop keychain',
      ProductName:'MS. MARVEL - MARVEL STUDIOS MS. MARVEL',
      Description:'Cuando un fanático de los superhéroes se convierte en superhéroe, ¡las posibilidades parecen infinitas para Kamala Khan! ¡Ayuda a Kamala (también conocida como Ms. Marvel) a unirse a sus ídolos superhéroes y descubre sus poderes en tu colección Marvel Ms. Marvel como Pop! llavero. El llavero de vinilo mide aproximadamente 4 pulgadas de largo.',
      Price:5.00,
      ProductType:'Apparel & Accessories',
      ProductsSubType:'Keychains',
      Category:'Marvel',
    },

    {
      Id:'A11',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/62403_StellarVortex_POP12_POPKeychain_GLAM-WEB.png',
      Alt:'Front image of Sinister Strange - Doctor Strange in the Multiverse of Madness pop keychain',
      ProductName:'SINISTER STRANGE - DOCTOR STRANGE IN THE MULTIVERSE OF MADNESS',
      Description:'¡Pon a prueba los límites de la realidad y salta al multiverso Marvel con Pop! ¡Llavero Sinister Strange de Doctor Strange en el Multiverso de la Locura! ¡Estallido! Sinister Strange, vestido de azul, parece listo para un desafío. Captúralo para tu colección. El llavero de vinilo mide aproximadamente 4 pulgadas de largo.',
      Price:5.00,
      ProductType:'Apparel & Accessories',
      ProductsSubType:'Keychains',
      Category:'Marvel',
    },

    {
      Id:'A12',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/62404_StellarVortex_S2_POP13_POPKeychain_GLAM-WEB.png',
      Alt:'Front image of America Chavez in Cloak - Doctor Strange in the Multiverse of Madness pop keychain',
      ProductName:'AMERICA CHAVEZ IN CLOAK - DOCTOR STRANGE IN THE MULTIVERSE OF MADNESS',
      Description:'¡Pon a prueba los límites de la realidad y salta al multiverso Marvel con Pop! ¡Llavero America Chavez de Doctor Strange in the Multiverse of Madness! ¡Estallido! América Chávez luce lista para cualquier desafío, vestida con una capa gris. El llavero de vinilo mide aproximadamente 4 pulgadas de largo.',
      Price:5.00,
      ProductType:'Apparel & Accessories',
      ProductsSubType:'Keychains',
      Category:'Marvel',
    },

    {
      Id:'A13',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/63968_NBC_Blacklight_Sally_POPKeychain_GLAM-WEB.png',
      Alt:'Front image of Sally (Black Light) - The Nightmare Before Christmas pop keychains',
      ProductName:'SALLY (BLACK LIGHT) - THE NIGHTMARE BEFORE CHRISTMAS',
      Description:'¡Prepárate para divertirte aterradoramente con los residentes de Halloween Town! Pop! llavero Sally aparece en colores vibrantes que están diseñados para brillar intensamente bajo la luz negra. Sally está lista para acompañarte en cualquier aventura o inspirar una atmósfera espeluznante en tu colección The Nightmare Before Christmas. El llavero de vinilo mide aproximadamente 4 pulgadas de largo.',
      Price:5.00,
      ProductType:'Apparel & Accessories',
      ProductsSubType:'Keychains',
      Category:'Disney',
    },

    {
      Id:'A14',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/63967_NBC_Blacklight_OogieBoogie_POPKeychain_GLAM-WEB.png',
      Alt:'Front image of Oogie Boogie (Black Light) - The Nightmare Before Christmas pop keychains',
      ProductName:'OOGIE BOOGIE (BLACK LIGHT) - THE NIGHTMARE BEFORE CHRISTMAS',
      Description:'¡Prepárate para divertirte aterradoramente con los residentes de Halloween Town! Pop! llavero Oogie Boogie aparece en colores vibrantes que están diseñados para brillar intensamente bajo la luz negra. Oogie está listo para acompañarlo en cualquier aventura o inspirar una atmósfera espeluznante en su colección The Nightmare Before Christmas. El llavero de vinilo mide aproximadamente 4 pulgadas de largo.',
      Price:5.00,
      ProductType:'Apparel & Accessories',
      ProductsSubType:'Keychains',
      Category:'Disney',
    },

    {
      Id:'A15',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/62382_POP_Keychain-_ST_S4-_POP_1_Renders_GLAM-WEB.png',
      Alt:'Front image of Eleven - Stranger Things Season 4 pop keychain',
      ProductName:'ELEVEN - STRANGER THINGS SEASON 4',
      Description:'Hawkins, Indiana, alberga secretos peligrosos y sobrenaturales. ¡Llévate a casa los acontecimientos, los personajes y los momentos decisivos de Stranger Things con tu propio Pop! Llavero Once. El llavero de vinilo mide aproximadamente 4 pulgadas de largo.',
      Price:5.00,
      ProductType:'Apparel & Accessories',
      ProductsSubType:'Keychains',
      Category:'Action & Adventure',
    },

    {
      Id:'A16',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/MHABK0004_FNKO_POP_MHA_HERO_GROUPBKPK_Front-WEB_f38f740b-ec4b-480f-b7c1-535815266857.png',
      Alt:'Front image of My Hero Academia Group Backpack',
      ProductName:'MY HERO ACADEMIA GROUP BACKPACK',
      Description:'Únete a las filas de la U.A. Academia de héroes de estreno de la escuela secundaria, con esta mochila My Hero Academia Group. En el frente, Izuku Midoriya, Katsuki Bakugo, Ochaco Uraraka, Tenya Iida y Toshinori Yagi entran en acción. Las características de la mochila incluyen correas ajustables, detalles impresos, cremallera metálica plateada y bolsillos a cada lado. Cuero vegano (poliuretano). Dimensiones: 8,25" de ancho x 10,75" de alto x 4" de profundidad.',
      Price:35.00,
      ProductType:'Apparel & Accessories',
      ProductsSubType:'Bags',
      Category:'Anime',
    },

    {
      Id:'A17',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/MHACB0001_FUNKO_POP_MHA_GROUP_CB_Front-WEB.png',
      Alt:'Front image of My Hero Academia Group Coin Bag',
      ProductName:'MY HERO ACADEMIA GROUP COIN BAG',
      Description:'Únete a las filas de la U.A. Academia de héroes de estreno de la escuela secundaria y mantenga sus objetos de valor seguros con esta bolsa de monedas My Hero Academia Group. En el frente, Izuku Midoriya, Katsuki Bakugo, Ochaco Uraka, Tenya Iida y Toshinori Yagi entran en acción. Las características de la bolsa de monedas incluyen detalles impresos y cremallera de metal plateado. Cuero vegano (poliuretano). Dimensiones de la bolsa: 3" de alto.',
      Price:10.00,
      ProductType:'Apparel & Accessories',
      ProductsSubType:'Bags',
      Category:'Anime',
    },

    {
      Id:'A18',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/65004_TNBC_GROUP_WEB.png',
      Alt:'Front image of The Nightmare Before Christmas Black Light Tee',
      ProductName:'THE NIGHTMARE BEFORE CHRISTMAS BLACK LIGHT TEE',
      Description:'¡Bienvenido a la ciudad de Halloween! ¡Espiral Hill está llamando! ¡Únete a tus personajes favoritos de Pesadilla antes de Navidad en lo alto del icónico monumento con este Black Light Pop! Tee. En el frente de esta camiseta negra de manga corta, ¡Pop! ¡Jack, papá! ¡Sally, papá! ¡Cero y Pop! El alcalde de Halloween Town se reúne para una celebración cerca de Spiral Hill, mientras Pop! Oogie Boogie vigila la escena desde la luna. Las palabras del dúo trascendental de Jack y Sally aparecen arriba: Simplemente estamos destinados a ser. Bajo una luz negra, toda la escena cobra vida en colores vibrantes. Tallas unisex adulto: SM-4X. 100% algodón.',
      Price:20.00,
      ProductType:'Apparel & Accessories',
      ProductsSubType:'Apparel',
      Category:'Disney',
    },

    {
      Id:'A19',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/63349_BOBA_FETT_THRONE_WEB.png',
      Alt:'Front image of Boba Fett on the throne boxed tee - The book of Boba Fett',
      ProductName:'BOBA FETT ON THRONE BOXED TEE - THE BOOK OF BOBA FETT',
      Description:'¡Gobierna la galaxia, o cualquier reunión informal, al estilo de la cultura pop con un Pop de STAR WARS™! Camiseta en caja de Boba Fett. En el frente de esta camiseta negra con cuello redondo, ¡Pop! Boba Fett se sienta orgulloso en el trono que ha reclamado. Es la camiseta perfecta para desearles a todos un feliz y próspero 4 de mayo mientras experimentan una gran cantidad de comodidad. Adulto unisex tallas SM-3X. 100% algodón.',
      Price:20.00,
      ProductType:'Apparel & Accessories',
      ProductsSubType:'Apparel',
      Category:'Star Wars',
    },

    {
      Id:'A20',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/57213_MAUL_EPIC_SABER_FH14152_WEB.png',
      Alt:'Front image of Darth Maul Sith Lord Tee - Star Wars',
      ProductName:'DARTH MAUL SITH LORD TEE - STAR WARS',
      Description:'Celebra el 4 de mayo con un estilo estelar con este Darth Maul Pop! Tee. En la parte delantera de esta camiseta de manga corta con cuello redondo, Pop! Darth Maul empuña un sable de luz rojo. Debajo de él, aparecen las palabras "Señor Sith". Es la camiseta perfecta para celebrar tu fanatismo por STAR WARS™ o para convertir las actividades cotidianas en una aventura en una galaxia muy, muy lejana. Adulto unisex tallas SM-3X. 100% algodón.',
      Price:20.00,
      ProductType:'Apparel & Accessories',
      ProductsSubType:'Apparel',
      Category:'Star Wars',
    },

    {
      Id:'A21',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/62255_STRANGER_THINGS_PIZZA_DAISY__WEB.png',
      Alt:'Front image of Surfer Boy Pizza Tee - Stranger Things',
      ProductName:'SURFER BOY PIZZA TEE - STRANGER THINGS',
      Description:'¡Una entrega especial muy caliente está en orden! Súbete a la ola de la temporada 4 de Stranger Things con esta camiseta Surfer Boy Pizza Funko. ¡En el frente de esta cómoda camiseta color margarita, encontrarás el Pop! versión del logotipo de Surfer Boy Pizza, que presenta a un surfista atrapando una ola en una porción de pizza. Esta camiseta de manga corta y cuello redondo es perfecta para descubrir misterios sobrenaturales o para usar todos los días. Tamaño unisex adulto: SM-4X. 100% algodón.',
      Price:20.00,
      ProductType:'Apparel & Accessories',
      ProductsSubType:'Apparel',
      Category:'Action & Adventure',
    },

    {
      Id:'A22',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/63718_RUI_VS_TANJIRO_FRONT_WEB.png',
      Alt:'Front image of Rui vs Tanjiro Tee - Demon Slayer',
      ProductName:'RUI VS TANJIRO TEE - DEMON SLAYER',
      Description:'¡Algunos lazos nunca se pueden romper! El vínculo entre Tanjiro y su hermana Nezuko es indestructible, incluso cuando Rui teje una red entre ellos. ¡Capture esta escena y manténgala cerca como un Pop! Tees Demon Slayer Rui vs Tanjiro momento. En la parte delantera de esta camiseta gris deportiva con cuello redondo, aparece el logotipo de Demon Slayer: Kimetsu No Yaiba. ¡En la parte de atrás, papá! ¡Rui y papá! Tanjiro, cuyos nombres aparecen en katakana, luchan su batalla. Esta camiseta es perfecta para enfrentar cualquier desafío que se presente el día. Tamaño unisex adulto: SM-3X. 100% algodón.',
      Price:20.00,
      ProductType:'Apparel & Accessories',
      ProductsSubType:'Apparel',
      Category:'Anime',
    },

    {
      Id:'A23',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/63073_TANJIRO__FIRE_FLASH_FH14314_WEB_05312bda-f7a0-4b15-9235-c87d000378ed.png',
      Alt:'Front image of Tanjiro Tee - Demon Slayer',
      ProductName:'TANJIRO TEE - DEMON SLAYER',
      Description:'Enciende tu pasión por la serie Demon Slayer Kimetsu No Yaiba con este Tanjiro Pop! negro con cuello redondo Tee. Ayuda a Tanjiro a derrotar al Rey Demonio con comodidad y estilo. Tamaño unisex adulto: SM-4X. 100% algodón.',
      Price:20.00,
      ProductType:'Apparel & Accessories',
      ProductsSubType:'Apparel',
      Category:'Anime',
    },

    {
      Id:'A24',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/63351_JOKER_HA_HA_WEB.png',
      Alt:'Front image of The Joker Boxed Tee - DC Comics',
      ProductName:'THE JOKER BOXED TEE - DC COMICS',
      Description:'Apila la baraja con muchas risas con esta camiseta en caja de DC Comics Joker™. En la parte delantera de esta camiseta negra con cuello redondo, Joker muestra su sonrisa y la tarjeta de comodín. Sus hienas, Bud y Lou, están a su lado, para reírse un poco más. En el fondo, el texto Ha Ha Ha brota en púrpura alrededor de Pop! Bufón. Tamaño unisex adulto: SM-3X. 100% algodón.',
      Price:20.00,
      ProductType:'Apparel & Accessories',
      ProductsSubType:'Apparel',
      Category:'DC Comics',
    },

    {
      Id:'A25',
      Img:'https://cdn.shopify.com/s/files/1/1052/2158/products/WDPP0031_LF_FUNKO_POP_LPP_DISNEY_PIXAR_UP_RUSSEL_glam_front-WEB.png',
      Alt:'Front image of Russell - Up pop pin',
      ProductName:'RUSSELL - UP',
      Description:'Tu explorador de la naturaleza, Russell, está listo para ayudarte en tus aventuras como Loungefly Pixar Pop! Pin. Dale la bienvenida en tus viajes, dondequiera que te lleven. ¡Estallido! El pin cuenta con herrajes de metal dorado brillante y un soporte integrado. El pasador de esmalte mide aproximadamente 4 pulgadas de alto.',
      Price:15.00,
      ProductType:'Apparel & Accessories',
      ProductsSubType:'Pins',
      Category:'Pixar',
    },
  ]




const Content = () => {
  return (
    <Card cardData={CARDCONTENT}/>
  )
}

export default Content