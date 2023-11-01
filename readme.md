# Bot de Discord - Sistema de bater ponto

Bot simples, feito em Javascript e com o MySQL como banco de dados.

## Como instalar

1. Clone o repositório
2. Instale o [Node V16.16](https://nodejs.org/dist/v16.16.0/node-v16.16.0-x64.msi)
3. Instale o [XAMPP](https://sourceforge.net/projects/xampp/files/latest/download)
4. Abra o XAMPP e inicie o Apache e o MySQL
5. Abra o phpMyAdmin e crie um banco de dados com o script no arquivo [sql.sql](https://github.com/KAYOKG/BOT-SISTEMA-DE-PONTO-DISCORD/blob/main/sql.sql)
6. Abra o arquivo [config.json](https://github.com/KAYOKG/BOT-SISTEMA-DE-PONTO-DISCORD/blob/main/config.json)
7. E na linha 3 coloque o token do seu [bot](https://discord.com/developers/applications)
8. Na linha 4 coloque o id de quem vai ser o dono do bot
9. Na linha 5 coloque o id do grupo que vai ser o staff
10. Na linha 9 coloque o id do chat que irá receber o log dos usuarios que usarem o bot
11. Depois de permitir os 'Privileged Gateway Intents' do bot, adicione o bot ao seu servidor depois de colocar o id do seu bot aqui e clicar no link de convite do seu [bot](https://discordapi.com/permissions.html)

Depois de fazer isso, abra o terminal e digite `npm init` e depois do processo do comando anterior, execute o bot com `node .`

## Comandos

- `.ponto` - Abre o painel de ponto
- `.adduser id_do_usuario` - Registra o usuário no banco de dados

## Observações

- O bot só funciona com o servidor ligado localhost em uma maquina
- Para um usuário poder interagir com o painel, primeiro ele deve estar registrado no banco de dados através do comando `.adduser id_do_usuario`

## Melhorias futuras

- Registrar automaticamente os usuários no banco de dados quando eles interagirem com o bot
- Transferir o banco de dados e o node para um servidor online