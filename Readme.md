#  Sistema de Consulta Google Sheets (Serverless)

Este projeto transforma uma planilha comum do Google Sheets em um banco de dados dinâmico para uma interface web, sem a necessidade de um servidor backend.

##  Por que este projeto é útil?
Permite que usuários não técnicos atualizem os dados diretamente pelo Google Sheets, e o site reflete essas mudanças instantaneamente. Ideal para listas de preços, inventários ou catálogos.

##  Funcionalidades
- **Fetch API:** Consumo de dados em formato CSV em tempo real.
- **Busca Global:** Filtro instantâneo em todas as colunas via JavaScript.
- **Interface Minimalista:** Focada em performance e facilidade de leitura.

##  Tecnologias
- **HTML5 & CSS3**
- **JavaScript (ES6+)**
- **Google Sheets API (Public CSV)**

##  Como publicar a sua planilha
1. No Google Sheets, vá em **Arquivo > Compartilhar > Publicar na Web**.
2. Escolha **Valores separados por vírgula (.csv)**.
3. Copie o link gerado e substitua na variável `URL_CSV` no arquivo `script.js`.
