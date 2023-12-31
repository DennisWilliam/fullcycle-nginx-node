# fullcycle-nginx-docker

Desafio de projeto docker para criar uma imagem utilizando Nginx e Node

# COMANDOS

- Build da Imagem com Dockerfile especifico:
```bash
sudo docker build . -t fullcycle-node -f ./Dockerfile.node
```

```bash
sudo docker build . -t fullcycle-nginx -f ./Dockerfile.nginx
```

```bash
sudo docker build . -t fullcycle-postgres -f ./Dockerfile.postgres
```
 
- Criar uma network

```bash
docker network create fullcycle
```


- Executar container

```bash
sudo docker run --name node --network fullcycle -d -p 3000:3000 fullcycle-node
```

```bash
sudo docker run --name nginx --network fullcycle -d -p 8080:80 fullcycle-nginx
```

```bash
sudo docker run --name postgres --network fullcycle -d -p 5432:5432 fullcycle-postgres
```

-Acessar base de dados

```bash
docker exec -it postgres bash
psql -U pg -d database
```

```sql
SELECT * FROM people;
```

-Exibir logs do container
```bash
docker logs <ID ou nome-do-container>
```


# DESAFIO

- Acessar o NodeJs pelo Nginx como proxy reverso passando um nome no body da requisição que será salvo na base de dados e retornado quando acessar pelo browser

1 - Executar no terminar o comando do docker compose para subir os containers

```bash
docker compose up
```


2 - Enviar a seguinte request com o método PUT e no body passar o atributo name:

![Imagem com menos de 2MB](imagens/enviar_request.png)

```json
curl -X PUT -H "Content-Type: application/json" -d "{\"name\":\"SEU_NOME\"}" http://localhost:8080/service
```


3 - Acessar a url pelo browser:

![Imagem com menos de 2MB](imagens/acesso.png)

```json
http://localhost:8080/service
```

4 - Acesso via cURL:

```json
curl -i http://localhost:8080/service
```
