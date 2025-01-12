// Conteúdo CSV como texto
const csvContent = `
1,2021,29/11/2020,09/05/2021,F2,Obras,Colaborador Voluntario,Casa n°1 Reinos e hospedagem,CLF
2,2021,28/05/2021,04/06/2021,NCS,Energia,Stemac,Gerador Stemac Diesel ,CLF
3,2021,01/06/2021,30/06/2021,F2,Obras,Reginaldo / Fausto,Semteira estrutura metalica Horta F2,CLF
4,2021,01/08/2021,28/08/2021,NCS,Obras,Lucio,Internet e iluminação Labirinto,CLF
5,2021,01/04/2021,31/08/2021,TDOSOL,Aguas,Fausto,Sistemas de Irrigação Tanque Australiano Solar,CLF
6,2021,01/08/2021,31/08/2021,NCS,Energia,Lucio,Base concreto e Bastidor e rede Gerador,CLF
7,2021,06/09/2021,31/10/2021,FG,Obras,Edilson,Gruta Santa entrada FG Aluz,CLF
8,2021,15/10/2021,31/10/2021,ALUZ,Obras,Retroescavadeira,Terraplanagem area deposito materiais,CLF
9,2021,06/09/2021,08/11/2021,VC,Obras,Empreiteira Reginaldo,Telhado e pintura Modulo,CLF
10,2021,23/10/2021,30/11/2021,F1 Sede OGM,Obras OGM,Edilson,Reforma espaço de trabalho,OGM
11,2021,13/05/2021,25/12/2021,F2,Obras,Colaborador Voluntario,Casa n°2 Hospedagem,CLF
12,2021,26/08/2021,26/12/2021,NCS,Obras,Antonio Jose,Patamar Mirante,CLF
13,2021,01/11/2021,21/01/2022,ALUZ,Obras,Empreiteira Gleison,Reforma Costura Comunidade,CLF
14,2022,01/02/2022,03/03/2022,F3,Obras OGM,Antonio Jose,Grades Casa MMSM,OGM
15,2022,01/03/2022,31/03/2022,F2,Aguas,Jose Ricardo / Lucio,Barragem represa e troca bomba Roda Dagua,CLF
16,2021,01/06/2021,10/05/2022,TDOSOL,Obras,Fausto,Vivero Modular,CLF
17,2022,01/03/2022,19/05/2022,VC,Obras,Reginaldo Empreitera,Manutenção Telhado Galpão,CLF
18,2021,01/04/2021,30/06/2022,TDOSOL,Obras,Fausto,Area de Hospedagem Trailers,CLF
19,2021,01/05/2021,30/06/2022,TDOSOL,Obras,Fausto,Sala de Oração,CLF
20,2021,01/08/2021,30/06/2022,TDOSOL,Obras,Fausto,Galpão dos Trabalhadores,CLF
21,2022,29/06/2022,02/07/2022,Projetos Agua,Aguas,Fausto,Dreno lago VC,CLF
22,2022,07/06/2022,31/07/2022,Transubstanciação,Obras OGM,Antonio Jose,Alambra Monasterio,OGM
23,2021,01/09/2022,31/07/2022,F3,Obras OGM,Fermunck BH / Antonio Jose,Troca Telhado Casa Dormitorio Grupal,OGM
24,2022,15/08/2022,31/08/2022,CM,Obras,Fausto,Casa I.Paz Manutenção e Pintura,CLF
25,2021,01/06/2021,30/09/2022,Transubstanciação,Obras OGM,,Reforma 3° Andar e troca telhado,OGM
26,2022,16/05/2022,30/09/2022,NCS,Obras,Construtora Estrutual,Hospedagem 9 Suites NCS,CLF
27,2022,15/06/2022,30/09/2022,ALUZ,Obras,Gleison Drywall / Fausto,Reforma Eucaliptal Aluz,CLF
28,2022,05/07/2022,30/09/2022,VC,Obras,Gelison Drywall,Galpão 4 quartos Fechamento Drywall VC,CLF
29,2022,16/08/2022,30/09/2022,Projetos Agua,Aguas,Fausto / Lucio,Barragem Represa F3,CLF
30,2022,08/09/2022,30/09/2022,CM,Obras,Fausto,Escada Casa do Peregrino Confesionarios,CLF
31,2022,15/09/2022,21/10/2022,F3,Obras OGM,Jose Ricardo / Lucio / Edilson,Reforma Casa I Lucia,OGM
32,2021,01/06/2021,31/10/2022,ALUZ,Obras,Fausto,Obra Reforma Eucaliptal 1° Etapa,CLF
33,2022,01/05/2022,31/10/2022,F2,Aguas,Francisco,Reservatorio F2 Base concreto e reforma rede,CLF
34,2022,16/07/2022,31/10/2022,Projetos Agua,Aguas,Lucio / Jose Ricardo,Troca Filtro ETE 10m3 melhoras rede NCS,CLF
35,2022,25/07/2022,31/10/2022,Projetos Agua,Aguas,Lucio / Jose Ricardo,ETE 5m3 nova M Feminino F3,CLF
36,2022,03/08/2022,03/11/2022,Projetos Agua,Aguas,Lucio / Jose Ricardo,ETE 10m3 Casa Prinicpal e 2m3 Trabalhadores,CLF
37,2022,17/11/2022,19/11/2022,NCS,Energia,Lucio / Stemac,Ativação Gerador Diesel,CLF
38,2022,18/07/2022,30/11/2022,Projetos Agua,Aguas,Lucio,Sistema Agua Não potavel Agrofloresta F3,CLF
39,2022,26/07/2022,30/11/2022,Projetos Agua,Aguas,Lucio / Sul Minas Bombas,Reativação Poço Profundo NCS,CLF
40,2022,13/09/2022,30/11/2022,Projetos Agua,Aguas,Lucio / Jose Ricardo,ETE 5m3 nova Trailers Casa do Pomar,CLF
41,2022,15/09/2022,30/11/2022,Projetos Agua,Aguas,Lucio,Sistema Não Potavel Horto medicinal NCS,CLF
42,2022,17/11/2022,30/11/2022,Projetos Agua,Aguas,Jose Ricardo,Casa alvenaria bomba Não Potavel TIRM,CLF
43,2022,29/11/2022,15/12/2022,FFHI,Obras,Jose Ricardo,Manutenção Casa Missionaria Feminina,FFHI
44,2022,22/03/2022,20/12/2022,NCS,Obras,Lucio,Gerador Instalação base quadro e eletrica,CLF
45,2022,01/10/2022,31/12/2022,ALUZ,Obras,Fausto,Ampliação Varanda DST sala Misso Aluz,CLF
46,2022,23/10/2022,31/12/2022,Transubstanciação,Obras OGM,Edilson,Canil,OGM
47,2023,08/02/2023,09/02/2023,CM,Obras,Leonardo / Francisco,Manutenção Sino,AM
48,2023,13/01/2023,17/02/2023,Projetos Agua,Aguas,Lucio,Rede Esgoto TIRM,CLF
49,2023,13/01/2023,20/05/2023,F2,Obras,Fausto,Reforma Galpão Grãos,CLF
50,2022,18/12/2022,26/05/2023,Projetos Agua,Aguas,Lucio,Reservatorio e Rede VC,CLF
51,2023,04/06/2023,06/06/2023,CM,Obras,Leonardo / Francisco,Manutenção Cruz Azul,AM
52,2023,30/05/2023,26/06/2023,VC,Obras,Jose Ricardo / Lucio,Trailer cercado e canil ,CLF
53,2023,22/02/2023,06/07/2023,Projetos Agua,Energia,Lucio,Rede Eletrica Galpão F2,CLF
54,2022,01/10/2022,30/08/2023,Transubstanciação,Obras OGM,Antonio Jose,Reforma 1° e 2° Andar etapa final,OGM
55,2023,01/08/2023,31/08/2023,SCIPIO,Obras,Frei Santiago,Reforma Anexo ADM,AM
56,2023,31/07/2023,07/09/2023,Projetos Agua,Aguas,Lucio,Roda de Agua ALUZ,CLF
57,2023,10/07/2023,09/09/2023,VC,Obras,Francisco / Lucio,Padaria 1° etapa,CLF
58,2023,06/07/2023,15/09/2023,VC,Obras,Francisco,Canil Monasterio,CLF
59,2023,04/08/2023,28/09/2023,F3,Obras OGM,Antonio Jose,Estudio ,OGM
60,2023,01/09/2023,30/09/2023,Transubstanciação,Obras OGM,Gilberto / AJ / Lucio,Gerador Solar Transubstanciação,OGM
61,2023,01/10/2023,12/10/2023,CM,Obras,Dani Avanzi / Lucio,Container Repetidora,CLF
62,2023,28/08/2023,17/10/2023,ALUZ,Obras,Jose Ricardo / Lucio,Telhado GSC,CLF
63,2023,16/10/2023,19/10/2023,F3,Obras OGM,Lucio,Casa MMSM telhado e solar,OGM
64,2023,16/03/2023,04/11/2023,Projetos Agua,Aguas,Lucio,Poço Artesiano F2,CLF
65,2023,01/06/2023,08/11/2023,TIRM,Obras,Fausto / Jose Ricardo,OCAs ,CLF
66,2023,24/10/2023,09/11/2023,VC,Obras,Gleison,Resguardo Trailers x2,CLF
67,2023,19/09/2023,10/11/2023,F3,Obras OGM,Antonio Jose,Telhado Monasterio Masculino,OGM
68,2023,28/08/2023,11/11/2023,ALUZ,Obras,Athos,Garagem Onibus,CLF
69,2023,04/09/2023,22/11/2023,VC,Obras,Francisco,Padaria 2° Etapa Escada e Tofu,CLF
70,2023,08/11/2023,04/12/2023,Projetos Agua,Aguas,Lucio,Rede Hidraulica nova F3-TIRM,CLF
71,2023,16/10/2023,16/12/2023,FG,Obras,Agape Varginha,Vazias infiltração e obras aguas,CLF
72,2023,27/11/2023,16/12/2023,VC,Obras,Gleyson,Sala das velas 1° Etapa,CLF
73,2023,25/10/2023,26/12/2023,NCS,Obras,Josimar,Fisioterapia consultorio e forro,CLF
74,2023,30/10/2023,26/12/2023,NCS,Obras,Josimar,Cozinha Experimental / DML,CLF
75,2023,06/11/2023,26/12/2023,NCS,Obras,Josimar,Armario de Lenha sem portas,CLF
76,2023,27/11/2023,12/01/2024,ALUZ,Obras,Fausto / Gleyson,Costura: Sala Suprimentos OGM ,CLF
77,2023,04/12/2023,12/01/2024,TIRM,Obras,Fausto,Banheiros Iglus e OCAs,CLF
78,2023,26/12/2023,20/01/2024,NCS,Obras,Josimar,Cura Sala Preparo e DML ,CLF
79,2024,22/01/2024,02/02/2024,FFHI,Obras,Fausto,Reparo Muro vizinho e manutenções,FFHI
80,2024,15/02/2024,03/02/2024,NCS,Obras,Josimar,Reforma Captação Represa Portal Reservatorio,CLF
81,2024,12/02/2024,28/02/2024,CM,Obras,Lucio,Rede Eletrica e hidraulica CIPaz,AM
82,2024,15/01/2024,29/02/2024,VC,Obras,Jose Ricardo / Fausto,Sala das velas 2° Etapa Final,CLF
83,2023,13/11/2023,03/03/2024,Projetos Agua,Energia,Lucio,Gerador Diesel VC,CLF
84,2024,08/01/2024,04/03/2024,VC,Obras,Jose Ricardo / Fausto,Obra Varanda Cozinha Central,CLF
85,2023,25/10/2023,11/03/2024,Projetos Agua,Energia,Lucio,Usina Solar VC,CLF
86,2023,10/11/2023,14/03/2024,F3,Obras OGM,Antonio Jose,Reforma Casa5 Casa I.Lucia MMSM,OGM
87,2023,28/06/2023,17/03/2024,TIRM,Obras,Fausto / Jose Ricardo,Celea 1° Etapa Telhado,CLF
88,2023,02/10/2023,23/03/2024,Projetos Agua,Aguas,Lucio,Rede Esgoto Novo Auditorio F2,CLF
89,2024,01/03/2024,31/03/2024,F3,Obras OGM,Gilberto / AJ / Lucio,Gerador Solar e Sistema Segurança MF F3,OGM
90,2024,01/03/2024,31/03/2024,F3,Obras OGM,Gilberto / AJ / Lucio,Gerador Solar MM F3,OGM
91,2024,26/03/2024,08/04/2024,SCIPIO,Obras,Jose Ricardo ,Obra novo financeiro claraboias,AM
92,2024,02/04/2024,10/04/2024,CLC,Obras,Fausto,Reparo base concreto Caixa de agua ,CLC
93,2023,15/11/2023,12/04/2024,Projetos Agua,Energia,Lucio,Usina Solar Bombas TIRM,CLF
94,2024,17/04/2024,01/05/2024,SCIPIO,Obras,Fausto / Jose Ricardo / Lucio,Reforma e melhora casa 3 e 8 (7 casas),OGM
95,2024,16/02/2024,03/05/2024,VC,Obras,Fausto / Jose Ricardo,Reforma e Ampliação Canil,CLF
96,2024,12/04/2024,04/05/2024,ALUZ,Obras,Fausto / Jose Ricardo,Sala Obras e quarto hospedagem,CLF
97,2024,08/04/2024,15/05/2024,TIRM,Obras,Josimar,Reforma Interna Celea Familias,CLF
98,2024,13/04/2024,30/05/2024,EPT,Internet,Lucio / Kevinson,Mudança Fibra Otica EPT Area Jardim,CLC
99,2024,03/06/2024,08/06/2024,ALUZ,Obras,Fausto,Praça da Misericordia ,CLF
100,2024,06/03/2024,21/06/2024,SCIPIO,Obras,Jose Ricardo / Lucio,ADM Frei Santiago - nova sede financeiro,AM
101,2024,16/01/2024,10/07/2024,NCS,Obras,Josimar,Reforma Cozinha Central,CLF
102,2024,10/06/2024,20/07/2024,Projetos Agua,Aguas,Lucio,Manutenção e melhoras Represa2 F3,CLF
103,2024,23/07/2024,04/09/2024,TIRM,Obras,Josimar,Reforma e ampliação Casa Trator,CLF
104,2024,10/06/2024,09/09/2024,TIRM,Obras,Josimar,Celea 2° Etapa fechamento e pintura,CLF
105,2024,11/04/2024,17/09/2024,Projetos Agua,Energia,Fausto / Lucio,Casa Gerador Diesel VC,CLF
106,2024,09/09/2024,23/09/2024,TDOSOL,Obras,Fausto / Lucio / Jose Ricardo,Reforma Casa para Monasterio TDOSOL,CLF
107,2024,23/09/2024,27/09/2024,F2,Obras,Josimar,Manutençã telhados casas,CLF
108,2024,01/09/2024,30/09/2024,SCIPIO,Obras OGM,Gilberto / AJ / Lucio,Gerador Solar SCIPIO,OGM
109,2024,01/09/2024,30/09/2024,SCIPIO,Obras OGM,Antonio Jose,Sistema Aquecimento Agua Solar,OGM
110,2024,22/05/2024,11/10/2024,SCIPIO,Obras OGM,Antonio Jose,Obra Manutenção Telhado SCIPIO,OGM
111,2024,15/10/2024,18/10/2024,NCS,Obras,Josimar,Cura Colocação Forro Sala expurgo,CLF
112,2024,28/06/2024,01/11/2024,CM,Obras,Fausto / Reginaldo,Obra Corrimão Colina e Ermida CM,AM
113,2024,07/10/2024,02/11/2024,Projetos Agua,Energia,Lucio / Josimar,Patio solar poço Transubstanciação,CLF
114,2024,25/09/2024,07/11/2024,VC,Obras,Gleisinho Carmo / Fausto,Bosque do Pendulo,CLF
115,2024,10/07/2024,27/11/2024,Projetos Agua,Aguas,Lucio / Josimar,Obra Ampliação Reservatorio TDOSOL,CLF
116,2024,24/05/2024,30/11/2024,Projetos Agua,Aguas,Fausto,Obra Barragem Represa1 ALUZ,CLF
117,2024,24/05/2024,30/11/2024,Projetos Agua,Aguas,Fausto,Obra Barragem Represa1 ALUZ,CLF
118,2024,25/09/2024,05/12/2024,TDOSOL,Obras,Jose Ricardo,Obra Galpão 1 - Cozinha e Despensa TDOSOL,CLF
119,2024,03/12/2024,05/12/2024,F2,Energia,Lucio,Antena Internet F2 Gerador Solar,AM
120,2023,10/11/2023,31/12/2024,F3,Obras OGM,Antonio Jose,Obra Monasterio Masculino F3,OGM
121,2024,21/05/2024,31/12/2024,Projetos Agua,Aguas,Jose Ricardo / Lucio,Obra nova ETE F2,CLF
122,2024,21/05/2024,31/12/2024,F3,Obras OGM,Antonio Jose,Obra Atelier MM F3,OGM
123,2024,07/06/2024,31/12/2024,Projetos Agua,Aguas,Jose Ricardo / Lucio,Obra Reservatorio VP,CLF
124,2024,28/06/2024,31/12/2024,CM,Obras,Fausto / Reginaldo,Obra Corrimão Colina e Ermida CM,AM
125,2024,01/12/2024,31/12/2024,CLC,Aguas,Fausto,Concreto base Reservatorio Agua,CLC
126,2024,10/12/2024,31/12/2024,F3,Energia,Lucio,Finalização infraestrutura Gerador Solar F3 MF,OGM
`;

function generateTableBody(csv) {
    
    const tbody = document.getElementById('tableBody');

    const rows = csv.trim().split('\n').map(row => row.split(','));

    rows.forEach(row => {
        const tr = document.createElement('tr'); 
        row.forEach(cell => {
            const td = document.createElement('td'); 
            td.textContent = cell.trim(); 
            tr.appendChild(td); 
        });
        tbody.appendChild(tr); 
    });
}

generateTableBody(csvContent);