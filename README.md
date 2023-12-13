# fullcycle-nginx-docker

Desafio de projeto docker para criar uma imagem utilizando Nginx e Node

# COMANDOS

- Build da Imagem:
sudo docker build . --no-cache -t fullcycle-nginx-node

- Executar container
sudo docker run -p 8080:8080 fullcycle-nginx-node

- Criar Tag da imagem para publicação
docker tag fullcycle-nginx-node dennisw07/fullcycle:1.0

- Publicar imagem no dockerhub
docker push dennisw07/fullcycle:1.0

# DESAFIO

- Acessar o NodeJs pelo Nginx passando um nome na rota /set que será salvo na base de dados e retornado quando acessar a rota /get

![Imagem com menos de 2MB](docker_go.png)

Foi necessário criar uma imagem scratch para conseguir diminuir o tamanho da imagem drasticamente, esse tipo de imagem não tem um sistema operacional base e um shell, assim a imagem é gerada apenas com o binário do aplicação executável.

- Publicar no DockerHub a imagem

![Imagem com menos de 2MB](docker_hub.png)

Link: docker pull dennisw07/fullcycle:1.0

