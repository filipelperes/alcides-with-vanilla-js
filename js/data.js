export const dataRestaurante = () => {
    return {
        "title-page": "Alcide's Restaurante e Pizzaria – Desde 1979 é um dos mais tradicionais restaurantes do Guarujá.",
        "nav-menu": ["menu", "sobre", "Chefs"],
        "tel": "(13) 3387-6323",
        "history": [{
            "title": "História",
            "desc": "Inaugurado em 1979, o Alcide’s Restaurante é um dos mais tradicionais restaurantes do Guarujá, litoral de São Paulo. Possui um cardápio variado, indo de Peixes & Frutos do Mar, passando por Carnes e Aves, até Massas, o que agrada aos mais seletos e requintados paladares.",
            "desc2": "Seu ambiente rústico, próprio das cidades litorâneas, aliado ao atendimento exclusivo e personalizado, proporciona aconchego, segurança e descontração. Contudo, o que lhe confere fama, credibilidade e fidelidade de seus clientes, é a qualidade de seus pratos, cada um se compara a iguarias capazes de seduzir todos os sentidos gustativos."
        },
        {
            "title": "Venha experimentar!",
            "desc": "o Alcide’s convida os amantes da boa gastronomia caiçara para conhecer e experimentar o verdadeiro sabor do Guarujá.",
            "desc2": "Aqui você pode conhecer um pouco das variadas alternativas de alimentação que oferecemos em nosso restaurante."
        },
        ],
        "contentEven": {
            "str": "Buffet",
            "str2": "de feijoada",
            "str3": "Todos os Sábados",
        },
        "cardapio": dataMenuRestaurante(),
    };
};

const dataMenuRestaurante = () => {
    return {
        "pratos-da-casa": [{
            "title": "Camoranga",
            "desc": "Camarões Rosa cozidos no molho de tomates e temperos especiais. Servido em moranga recheada e coberta com catupiry. Acompanha arroz ao coco. Sugerido p/ 3 pessoas."
        },
        {
            "title": "Bacalhau á moda",
            "desc": "Bacalhau cozido com ervas finas, batatas, cebola, ovos e pimentão. Acompanha arroz. Sugerido p/ 2 pessoas."
        },
        {
            "title": "Risoto Alcide's",
            "desc": "Suculento risoto gratinado, com camarões Rosa e frutos do mar (Camarões 7 Barbas, marisco, polvo e lula). Sugerido p/ 3 pessoas."
        },
        {
            "title": "Moqueca Mista",
            "desc": "Camarões Rosa (3 unid.) e posta de peixe, cozidos no molho de tomates e temperos especiais, c/ leve toque de azeite de dendê e leite-de-coco. Acompanha arroz ao coco e farofa de dendê. Sugerido p/2 pessoas."
        },
        {
            "title": "Filé de peixe á catarina",
            "desc": "Filé de peixe à dorê coberto c/ uma fina fatia de beringela à dorê, molho de camarão 7 barbas, gratinado c/ catupiry. Acompanha arroz. Sugerido p/ 2 pessoas."
        },
        {
            "title": "Caldeirada",
            "desc": "Posta de peixe e camarões rosa (3 unid.) cozidos com polvo, lula, marisco, camarões sete barbas e condimentos especiais. Acompanha arroz. Sugerido p/ 2 pessoas."
        },
        {
            "title": "Peixada no barro",
            "desc": "Posta de peixe cozida no molho de frutos do mar (Camarões 7 barbas, marisco, polvo e lula). Acompanha arroz e pirão. Sugerido p/ 2 pessoas."
        },
        {
            "title": "Filé á moda",
            "desc": "Filé de peixe grelhado, coberto c/ lascas de azeitonas verde, champignon e alcaparras. Acompanha batatas coradas e arroz ao alho. Sugerido p/ 3 pessoas."
        },
        ],
        "camaroes": [{
            "title": "Á Grega",
            "desc": "Camarões rosa e queijo à milanesa. Acompanha batatas fritas e arroz à grega."
        },
        {
            "title": "Ao grill (Pastoreia)",
            "desc": "Camarões rosa à milanesa, recheado com catupiry. Acompanha fritas, arroz à grega e banana à milanesa."
        },
        {
            "title": "Á José Novaes",
            "desc": "Camarões rosa grelhados s/ casca, com cebola e pimentão verde coberto c/ palmitos. Acompanha batatas soutê e arroz à grega."
        },
        {
            "title": "Camarão á Africana",
            "desc": "Camarões rosa grelhados com casca. Acompanha batatas fritas e arroz à grega."
        },
        ],
        "peixes": [{
            "title": "Filé à Belle Meunière",
            "desc": "Filé de peixe grelhado cobertos com camarões 7 barbas, champignon e alcaparras. Acompanha batata soutê."
        },
        {
            "title": "Filé à Fiorentina",
            "desc": "Filé grelhado, coberto com molho de espinafre, gratinado com queijo parmesão. Acompanha arroz."
        },
        {
            "title": "Filé ao Molho de Camarão",
            "desc": "Filé de peixe a dorê ou grelhado ao molho de camarões 7 barbas. Acompanha arroz."
        },
        {
            "title": "Filé Grelhado",
            "desc": "Acompanha batatas soutê ou fritas ou legumes."
        },
        {
            "title": "Filé da Mama",
            "desc": "Filé de abadejo à milanesa, recheado com catupiry e espinafre. Acompanha salada de batata."
        },
        {
            "title": "Pescada Grelhada",
            "desc": "Acompanha arroz à grega."
        },
        {
            "title": "Salmão Divino",
            "desc": "Salmão grelhado ao molho de agrião e creme de leite. Acompanha arroz ao creme de agrião."
        },
        {
            "title": "Pescada Verão",
            "desc": ""
        },
        ],
        "carnes": [{
            "title": "Mignon Alcide's",
            "desc": "Filé mignon à milanesa recheado c/ catupiry. Acompanha arroz à grega."
        },
        {
            "title": "Mignon à Chateaubriend",
            "desc": "Filé mignon alto, grelhado mal passado, c/ molho especial tipo madeira e champignons. Acompanha arroz e fritas."
        },
        {
            "title": "Mignon à Parmegiana",
            "desc": "Filé mignon à milanesa c/ molho de tomates coberto c/ queijo gratinado. Acompanha arroz."
        },
        {
            "title": "Mignon à Cubana",
            "desc": "Filé mignon e banana à milanesa, acompanhado por ervilhas, palmitos na manteiga e batatas fritas."
        },
        {
            "title": "Mignon à Gaucha",
            "desc": "Filé mignon grelhado. Acompanha fritas e farofa."
        },
        {
            "title": "Mignon com Fritas",
            "desc": "Filé mignon grelhado acompanhado por batatas fritas."
        },
        ],
        "frango": [{
            "title": "Supremo à Cubana",
            "desc": "Supremo de frango e banana à milanesa, acompanhado por ervilhas e palmitos na manteiga e batatas fritas."
        },
        {
            "title": "À Passarinho",
            "desc": "Frango em pedaços frito ao alho e óleo. Acompanha fritas e arroz."
        },
        ],
        "E mais...": "Entradas, Saladas, Massas, Pratos para as crianças, Porções, Sobremesas, Bebidas, Coquetéis, Caipirinhas e Batidas, Bebidas Quentes e Licores.",
    };
};

export const dataPizzaria = () => {
    return {
        "title-page": "Alcide’s Pizzaria",
        "nav-menu": ["menu", "sobre"],
        "tel": "(13) 3355-9885",
        "history": [{
            "title": "",
            "desc": "Inaugurada em 2006, a Alcide’s Pizzaria sempre se destacou pela qualidade de suas pizzas assadas em forno a lenha, pelo atendimento personalizado e pelo ambiente bem decorado e aconchegante.",
            "desc2": "A adega climatizada oferece mais de 50 rótulos de vinhos especialmente selecionados que se harmonizam perfeitamente com os diversos sabores.",
            "desc3": "Ambiente familiar e descontraído aliado ao conforto e ao atendimento diferenciado oferece momentos de pura descontração, além da tradição e da qualidade das nossas pizzas são fatores que atraem sempre mais clientes amantes da boa pizza."
        },],
        "contentEven": {
            "str": "Preparados",
            "str2": "em forno a lenha",
            "str3": "Fica uma delícia!",
        },
        "cardapio": dataMenuPizzaria(),
    };
};

const dataMenuPizzaria = () => {
    return {
        "entradas": [{
            "title": "Salada Caesar Alcides",
            "desc": "Pedaços pequenos de frango grelhado, alface americana, lisa, crespa, cebola roxa, tomate cereja, parmesão ralado, palmito em pedaços e croutons. Molho Caesar Alcides."
        },
        {
            "title": "Brusqueta de Tomate Seco",
            "desc": "Fatias de pão italiano assadas com molho de tomates temperados, mussarela e tomate seco."
        },
        {
            "title": "Brusqueta de Calabresa",
            "desc": "Fatias de pão italiano assadas com molho de tomates temperados, mussarela, lingüiça calabresa moída, salpicada com queijo parmesão."
        },
        {
            "title": "Crostine",
            "desc": "Fina massa de pizza assada com azeite, alecrim, parmesão e orégano."
        },
        {
            "title": "Crostine de Calabresa",
            "desc": "Fina massa de pizza assada com azeite, calabresa moída, parmesão e orégano."
        },
        {
            "title": "Crostine Choppinho",
            "desc": "Fina massa de pizza assado com azeite, gorgonzola, parmesão e orégano."
        },
        {
            "title": "Provoleta",
            "desc": "Pequenos pedaços de provolone derretidos, com azeite e orégano, servido com pão italiano."
        },
        {
            "title": "Pão de Calabreza (Fatia)",
            "desc": ""
        }
        ],
        "pizzas-especiais": [{
            "title": "Alemã",
            "desc": "Molho de tomate temperado, mussarela, um leve toque de gorgonzola, cebolas à moda da casa (cebola assada com condimentos especiais) azeitona e orégano."
        },
        {
            "title": "Alho Negro",
            "desc": "Molho de tomates temperado, mussarela de búfala, alho poró, tomates confitados, parmesão, azeitonas e alho negro."
        },
        {
            "title": "Baiana",
            "desc": "Molho de tomate temperado, camarão 7 barbas refogado com dende e leite de coco, coberto c/ catupiry."
        },
        {
            "title": "Biquinho Doce",
            "desc": "Molho de tomate temperado, mussarela de búfala, manjericão, rúcula, pimenta biquinho e azeitonas."
        },
        {
            "title": "Calsone",
            "desc": "Molho de tomate temperado, ricota, mussarela, presunto, ovos, cebola e azeitonas."
        },
        {
            "title": "Calsone Fratelli",
            "desc": "Molho de tomate temperado, mussarela, catupiry, champignon, escarola, bacon, cebola e orégano."
        },
        {
            "title": "Javali",
            "desc": "Molho de tomate temperado, mussarela búfala, linguiça de javali defumada, alho porro, orégano e azeitonas."
        },
        {
            "title": "Light",
            "desc": "Molho de tomate temperado, queijo cottage, peito de peru defumado, rúcula e orégano."
        },
        {
            "title": "Mafiosa",
            "desc": "Molho de tomate temperado, mussarela, atum, aliche, gorgonzola e azeitonas."
        },
        {
            "title": "Pesto de azeitona",
            "desc": "Molho de tomate temperado, mussarela, tiras de mussarela de búfala, rodelas de tomate, manjericão, pesto de azeitona preta, orégano e azeitonas."
        },
        {
            "title": "Moda do Pizzaiolo",
            "desc": "Molho de tomate temperado, mussarela, iscas de pimentão vermelho temperada, berinjela ao alho e óleo, filés de anchova, azeitonas e orégano."
        },
        {
            "title": "Parma",
            "desc": "Molho de tomate temperado, mussarela, fatias de tomate, presunto parma, azeitonas e orégano."
        },
        {
            "title": "Piemonteza",
            "desc": "Molho de tomate temperado, fatias de tomate, gorgonzola, alcaparras, queijo parmesão e orégano."
        },
        {
            "title": "Pomodoro",
            "desc": "Molho de tomate tempeardo, mussarela de búfala, tomate seco, alho dourado no azeite, rúcula e azeitonas."
        },
        {
            "title": "Zuchinni",
            "desc": "Molho de tomate temperado, abobrinha refogada, salpicada com mussarela e parmesão."
        },
        {
            "title": "Cogumelos Especiais",
            "desc": "Molho de tomate, mussarela de búfala,cogumelos shitake, shimeji e funghi refogados na manteiga e shoyu, orégano e azeitonas."
        },
        ],
        "pizzas-tradicionais": [{
            "title": "Alcachofra",
            "desc": "Molho de tomate temperado, mussarela, coração de alcachofra fatiado, filés de anchova e azeitonas."
        },
        {
            "title": "Alho e óleo",
            "desc": "Molho de tomate temperado, mussarela, alho crocante e orégano."
        },
        {
            "title": "Aliche",
            "desc": "Molho de tomate temperado e filés de aliche."
        },
        {
            "title": "Atum",
            "desc": "Molho de tomate temperado, atum, cebolas e azeitonas e orégano."
        },
        {
            "title": "Atum Especial",
            "desc": "Molho de tomate temperado, atum sólido, cebola, tomate, mussarela e azeitonas."
        },
        {
            "title": "Brócolis",
            "desc": "Molho de tomate temperado, brócolis a alho e óleo, cobertos com mussarela, azeitonas e orégano."
        },
        {
            "title": "Brócolis Especial",
            "desc": "Molho de tomate temperado, mussarela, brócolis temperado, palmito, catupiry, batata palha e azeitonas."
        },
        {
            "title": "Caipira",
            "desc": "Molho de tomate temperado, filé de frango desfiado temperado, milho verde, catupiry , azeitonas e orégano."
        },
        {
            "title": "Calabresa",
            "desc": "Molho de tomate temperado, calabresa fatiada, cebola, azeitonas e orégano."
        },
        {
            "title": "Canadense",
            "desc": "Molho de tomate temperado, lombo canadense, cebolas, azeitonas e orégano."
        },
        {
            "title": "Catupiry",
            "desc": "Molho de tomate temperado, catupiry, azeitonas e orégano."
        },
        {
            "title": "Cerati",
            "desc": "Molho de tomate temperado, mussarela, finas tiras de mortadela cerati e azeitonas."
        },
        {
            "title": "Escarola",
            "desc": "Molho de tomate temperado, escarola refogada, filés de anchova, cebola, coberta com mussarela, azeitonas e orégano."
        },
        {
            "title": "Frangolino",
            "desc": "Molho de tomate temperado, frango desfiado, catupiry, batata palha e azeitonas."
        },
        {
            "title": "Jabá",
            "desc": "Molho de tomate, carne seca desfiada, cebola e mussarela."
        },
        {
            "title": "Gorgonzola",
            "desc": "Molho de tomate temperado, gorgonzola e orégano."
        },
        {
            "title": "Calabresa Catupiry",
            "desc": "Molho de tomate temperado, calabresa, coberta com catupiry e orégano."
        },
        {
            "title": "Marguerita",
            "desc": "Molho de tomate temperado, mussarela, manjericão, salpicada e orégano."
        },
        {
            "title": "Mussarela",
            "desc": "Molho de tomate temperado, mussarela, azeitonas e orégano."
        },
        {
            "title": "Napolitana",
            "desc": "Molho de tomate temperado, mussarela, rodelas de tomate, parmesão, azeitonas e orégano."
        },
        {
            "title": "Palmito",
            "desc": "Molho de tomate temperado, palmito, catupiry, azeitonas e orégano."
        },
        {
            "title": "Pepperoni",
            "desc": "Molho de tomate temperado, mussarela e fatias de salame pepperoni."
        },
        {
            "title": "Portuguesa",
            "desc": "Molho de tomate temperado, mussarela, presunto, palmito, ovos, ervilhas, cebolas, azeitonas e orégano."
        },
        {
            "title": "Quatro Queijos",
            "desc": "Molho de tomate temperado, mussarela, catupiry, gorgonzola, provolone e orégano."
        },
        {
            "title": "Romana",
            "desc": "Molho de tomate temperado, mussarela,fatias de tomate, filés de anchova, parmesão e orégano."
        },
        {
            "title": "Rúcula com tomate seco",
            "desc": "Molho de tomate temperado, mussarela, rúcula crua e tomates secos e orégano."
        },
        {
            "title": "Siciliana",
            "desc": "Molho de tomate temperado, bacon, champignon, cebola, mussarela e orégano."
        },
        {
            "title": "Toscana",
            "desc": "Molho de tomate temperado, mussarela, calabresa moída e orégano."
        },
        {
            "title": "Tradicional",
            "desc": "Molho de tomate temperado, mussarela, fatias de calabresa pré assadas e orégano."
        }
        ],
        "E mais...": "Pizzas Doces, Coberturas extras, Sobremesas, Bebidas, Coquetéis, Caipirinhas e Batidas, Bebidas Quentes e Licores.",
    };
};