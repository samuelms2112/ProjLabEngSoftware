### Rodar mysql em uma imagem docker para teste

```sh
docker container run -d --rm --name mysql5 -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=teste_scripts_lab -e MYSQL_USER=teste -e MYSQL_PASSWORD=123456 mysql:5.7
```