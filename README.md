# Projeto SIG (Tema: Geoseguranca) (Estado: Pernambuco)
Projeto SIG usando Openlayers, Geoserver and Postgis, Tomcat para levantar os serviços do geoserver e Openstreetmaps como camada base para o mapa.

## Grupo (Numero 2)
- Gabriel Felipe Cardoso Gomes
- João Marcelo Fernandes da Silva Junior
- Paulo Felipe Feitosa da Silva
- Paulo Vitor Souto Dantas
- Thiago Yuri Evaristo de Souza

## Sobre a pasta geoseguranca
É o frontend do projeto, utiliza Ajax, Jquery, Javascript, HTML, CSS e Openlayers

## Sobre a pasta geoserver
É o backend do projeto, utiliza o geoserver que obdece aos padrões OGC e dispõe dos servicos de WMS, WFS, ...
O atual conteudo da pasta é o do workspace criado no geoserver, ou seja, em <caminho_para_pasta_do_tomcat>/webapps/geoserver/data/workspaces/geoseguranca (o nome real dessa pasta no projeto é `geoseguranca`, mas para fins de facilitação na separação do projeto foi nomeado de `geoserver` aqui no GitHub)

## Sobre os sqls
Os sqls utilizados no projeto para popular o BD estão localizados [aqui](https://drive.google.com/file/d/1i51danuYH5vbh3HLz3xdmTSI3IxE5bPA/view?usp=sharing), alguns sqls sofreram ajustes manuais, mas o resultado final foi utilizado os sqls contidos nesse arquivo

Demo aqui: https://drive.google.com/file/d/1GcF7PiF6vmvQD0srF79tUh8G5-Cfkkpd/view?usp=sharing
