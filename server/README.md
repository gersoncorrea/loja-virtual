# Instruções de Execução

## Requisitos

Antes de executar, é necessário que os seguintes programas estejam instalados no sistema.

> Java 8

> Maven

> MySql


## Passos para execução

1. Crie um banco na sua base de dados com o nome __products_app__
 
2. Abra o arquivo __application.properties__ localizado em __src/main/resources__

3. Modifique as variável __<user>__ e __<password>__ de acordo com as configurações de sua base de dados.

4. Dentro do diretório __server__, execute o comando  `$ mvn package`

5. Finalizado o processo anterior, execute o comando `$ java -jar target\server-0.0.1-SNAPSHOT.jar`