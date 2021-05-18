/**
 * Configurações do mapa.
 * Para adicionar uma nova camada no mapa: 
 * 	- coloque o nome da camada no "arrayCamadas" 
 *  - informe o nome geoserver da camada no array layersWMS. 
 */

/*var URL_WMS = window.location.protocol + "//" + 
			  window.location.host + 
			  "/geoserver/geoseguranca/wms";*/

var scroll = document.getElementById('scroll');

function show() {
	if (scroll.style.display === "none") {
		scroll.style.display = "block"
	} else {
		scroll.style.display = "none"
	}
}

var URL_WMS = "http://localhost:8081/geoserver/geoseguranca/wms";

var WGS84_LATLONG = 'EPSG:4326';
var WGS84_UTM = 'EPSG:3857';

/*Criando e configurando o View do mapa*/
/*
var view = new ol.View({
  maxZoom: 19,
  center:[-3998162.549982199,-811610.4523404423],
  zoom: 11
});*/

var mousePos = document.getElementById('mouse-position');
mousePos.style.position = "absolute";
mousePos.style.left = ((document.getElementById('map').clientWidth/2) - 40) + "px";
mousePos.style.top = "0px";
mousePos.style.fontWeight = "bold";
mousePos.style.fontSize = "14px";


/*Variavel que trata a exibicao das coordenadas do mouse*/
var mousePositionControl = new ol.control.MousePosition({
  coordinateFormat: ol.coordinate.createStringXY(4),
  projection: WGS84_LATLONG,
  className: 'custom-mouse-position',
  target: mousePos,
  undefinedHTML: '&nbsp;'
});

//Ajustando a escala
var scale = document.getElementById('scale-line');
scale.style.position = "absolute";
scale.style.left = (document.getElementById('map').clientWidth/2 - 50) + "px";
var scaleLineControl = new ol.control.ScaleLine({target: scale});

//Camada municipios de CG
var municipios = new ol.layer.Image(
		  {source: new ol.source.ImageWMS({
				url: URL_WMS,
				params:{
					LAYERS: 'geoseguranca:municipios', 
					STYLES: ''
					},
			}),
			visible:false,
			opacity:0.5
		}
);

var mesoregiao = new ol.layer.Image(
		  {
			  source: new ol.source.ImageWMS({
				url: URL_WMS,
				params:{
					LAYERS: 'geoseguranca:mesoregiao', 
					STYLES: ''
					},
			}),
			visible:false,
			opacity: 0.7
		}
);

var rodovias = new ol.layer.Image(
	{
		source: new ol.source.ImageWMS({
		  url: URL_WMS,
		  params:{
			  LAYERS: 'geoseguranca:rodovias', 
			  STYLES: ''
			  },
	  }),
	  visible:false
  }
);

var delegacias_civis = new ol.layer.Image(
		{
			source: new ol.source.ImageWMS({
				url: URL_WMS,
				params:{
					LAYERS: 'geoseguranca:delegacias_civis', 
					STYLES: ''
					},
			}),
			visible:true
		}
);

var delegacias_federais = new ol.layer.Image(
	{
		source: new ol.source.ImageWMS({
			url: URL_WMS,
			params:{
				LAYERS: 'geoseguranca:delegacias_federais', 
				STYLES: ''
				},
		}),
		visible:true
	}
);

var postos_federais = new ol.layer.Image(
	{
		source: new ol.source.ImageWMS({
			url: URL_WMS,
			params:{
				LAYERS: 'geoseguranca:postos_federais', 
				STYLES: ''
				},
		}),
		visible:true
	}
);

var delegacias_civis_buffer = new ol.layer.Image({
	source: new ol.source.ImageWMS({
		url: URL_WMS,
		params:{
			LAYERS: 'geoseguranca:delegacias_civis_buffer', 
			STYLES: '',
			VIEWPARAMS: 'km:1'
			},
	}),
	visible:false,
	opacity: 0.25
})

var delegacias_federais_buffer = new ol.layer.Image({
	source: new ol.source.ImageWMS({
		url: URL_WMS,
		params:{
			LAYERS: 'geoseguranca:delegacias_federais_buffer', 
			STYLES: '',
			VIEWPARAMS: 'km:1'
			},
	}),
	visible:false,
	opacity: 0.25
})

var postos_federais_buffer = new ol.layer.Image({
	source: new ol.source.ImageWMS({
		url: URL_WMS,
		params:{
			LAYERS: 'geoseguranca:postos_federais_buffer', 
			STYLES: '',
			VIEWPARAMS: 'km:1'
			},
	}),
	visible:false,
	opacity: 0.25
})

var delegacias_civis_by_mesoregiao = new ol.layer.Image({
	source: new ol.source.ImageWMS({
		url: URL_WMS,
		params:{
			LAYERS: 'geoseguranca:delegacias_civis_by_mesoregiao', 
			STYLES: '',
			},
	}),
	visible:false,
	opacity: 0.7
})

var delegacias_civis_by_municipios = new ol.layer.Image({
	source: new ol.source.ImageWMS({
		url: URL_WMS,
		params:{
			LAYERS: 'geoseguranca:delegacias_civis_by_municipios', 
			STYLES: '',
			},
	}),
	visible:false,
	opacity: 0.7
})

var postos_federais_by_mesoregiao = new ol.layer.Image({
	source: new ol.source.ImageWMS({
		url: URL_WMS,
		params:{
			LAYERS: 'geoseguranca:postos_federais_by_mesoregiao', 
			STYLES: '',
			},
	}),
	visible:false,
	opacity: 0.7
})

var postos_federais_by_municipios = new ol.layer.Image({
	source: new ol.source.ImageWMS({
		url: URL_WMS,
		params:{
			LAYERS: 'geoseguranca:postos_federais_by_municipios', 
			STYLES: '',
			},
	}),
	visible:false,
	opacity: 0.7
})

var crimes_cvp_por_100_mil_hab = new ol.layer.Image({
	source: new ol.source.ImageWMS({
		url: URL_WMS,
		params:{
			LAYERS: 'geoseguranca:crimes_cvp_por_100_mil_hab', 
			STYLES: '',	
			},
	}),
	visible:false,
	opacity: 0.7
})

var crimes_cvli_por_100_mil_hab = new ol.layer.Image({
	source: new ol.source.ImageWMS({
		url: URL_WMS,
		params:{
			LAYERS: 'geoseguranca:crimes_cvli_por_100_mil_hab', 
			STYLES: '',
			},
	}),
	visible:false,
	opacity: 0.7
})

var pinLayer, pinCoordinate
var delegacias_civis_near, delegacias_federais_near, postos_federais_near

const center = ol.proj.transform([-37.85,-8.40], 'EPSG:4326', 'EPSG:3857');

/*Criando o mapa*/
var map = new ol.Map({
    target: 'map',
    layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          }), 
		  municipios, mesoregiao, rodovias,
		  delegacias_civis, delegacias_federais, postos_federais,
		  delegacias_civis_buffer, delegacias_federais_buffer, postos_federais_buffer,
		  delegacias_civis_by_mesoregiao, delegacias_civis_by_municipios,
		  postos_federais_by_mesoregiao, postos_federais_by_municipios,
		  crimes_cvp_por_100_mil_hab, crimes_cvli_por_100_mil_hab
        ],
    view: new ol.View({
          center: center,
          zoom: 8
        }),
	controls: ol.control.defaults({
		attributionOptions: ({
		  collapsible: false
		})
	  }).extend([mousePositionControl, scaleLineControl]),
});

//information

var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');

var overlay = new ol.Overlay(({
	element: container,
	autoPan: true,
	autoPanAnimation: {
		duration: 250
	}
}));

closer.onclick = function() {
	overlay.setPosition(undefined);
	closer.blur();
	return false;
};

map.addOverlay(overlay);

map.on('singleclick', function(evt) {
    var coordinate = evt.coordinate;
	
	map.removeLayer(pinLayer)
	pinLayer = new ol.layer.Vector ({
		source: new ol.source.Vector ({
			features: [new ol.Feature(new ol.geom.Point(coordinate))]
		}),
		style: new ol.style.Style ({
			image: new ol.style.Icon({
			src: './imgs/my_location.png',
			scale: 0.05
			})
		})
	})
	map.addLayer(pinLayer)
	pinCoordinate = ol.proj.transform(coordinate, 'EPSG:3857','EPSG:4326')

	var viewResolution = map.getView().getResolution();

	var delegCivilUrlInfo = delegacias_civis.getSource().getGetFeatureInfoUrl (
		coordinate, viewResolution, WGS84_UTM,{'INFO_FORMAT': 'text/html'}
	);

	var delegFederalUrlInfo = delegacias_federais.getSource().getGetFeatureInfoUrl (
		coordinate, viewResolution, WGS84_UTM,{'INFO_FORMAT': 'text/html'}
	);

	var postosFederaisUrlInfo = postos_federais.getSource().getGetFeatureInfoUrl (
		coordinate, viewResolution, WGS84_UTM,{'INFO_FORMAT': 'text/html'}
	);

	var rodoviasUrlInfo = rodovias.getSource().getGetFeatureInfoUrl (
		coordinate, viewResolution, WGS84_UTM,{'INFO_FORMAT': 'text/html'}
	);

	var delegaciasCivisByMesoregiaoUrlInfo = delegacias_civis_by_mesoregiao.getSource().getGetFeatureInfoUrl (
		coordinate, viewResolution, WGS84_UTM,{'INFO_FORMAT': 'text/html'}
	);

	var delegaciasCivisByMunicipioUrlInfo = delegacias_civis_by_municipios.getSource().getGetFeatureInfoUrl (
		coordinate, viewResolution, WGS84_UTM,{'INFO_FORMAT': 'text/html'}
	);

	var postosFederaisByMesoregiaoUrlInfo = postos_federais_by_mesoregiao.getSource().getGetFeatureInfoUrl (
		coordinate, viewResolution, WGS84_UTM,{'INFO_FORMAT': 'text/html'}
	);

	var postosFederaisByMunicipioUrlInfo = postos_federais_by_municipios.getSource().getGetFeatureInfoUrl (
		coordinate, viewResolution, WGS84_UTM,{'INFO_FORMAT': 'text/html'}
	);
	
	var crimesCvpUrlInfo = crimes_cvp_por_100_mil_hab.getSource().getGetFeatureInfoUrl (
		coordinate, viewResolution, WGS84_UTM,{'INFO_FORMAT': 'text/html'}
	);

	var crimesCvliUrlInfo = crimes_cvli_por_100_mil_hab.getSource().getGetFeatureInfoUrl (
		coordinate, viewResolution, WGS84_UTM,{'INFO_FORMAT': 'text/html'}
	);
	
	if (delegacias_civis.getVisible()) getAjaxResult(delegCivilUrlInfo, coordinate);
	if (delegacias_federais.getVisible()) getAjaxResult(delegFederalUrlInfo, coordinate);
	if (postos_federais.getVisible()) getAjaxResult(postosFederaisUrlInfo, coordinate);
	if (rodovias.getVisible()) getAjaxResult(rodoviasUrlInfo, coordinate);
	if (delegacias_civis_by_mesoregiao.getVisible()) getAjaxResult(delegaciasCivisByMesoregiaoUrlInfo, coordinate);
	if (delegacias_civis_by_municipios.getVisible()) getAjaxResult(delegaciasCivisByMunicipioUrlInfo, coordinate);
	if (postos_federais_by_mesoregiao.getVisible()) getAjaxResult(postosFederaisByMesoregiaoUrlInfo, coordinate);
	if (postos_federais_by_municipios.getVisible()) getAjaxResult(postosFederaisByMunicipioUrlInfo, coordinate);
	if (crimes_cvp_por_100_mil_hab.getVisible()) getAjaxResult(crimesCvpUrlInfo, coordinate);
	if (crimes_cvli_por_100_mil_hab.getVisible()) getAjaxResult(crimesCvliUrlInfo, coordinate);
});

function getAjaxResult(urlParam, coordinate) {
	if (urlParam) {
    	 $.ajax({
			 url: urlParam, 
			 success: function(result) {
				 handleResult(result,coordinate);
			 },
			 error: function (jqXHR, textStatus, errorThrown ){
	        	 alert('erro: ' + errorThrown);
	         }
    	 }); 
	  }
}

function handleResult(result,coordinate) {
	 var html = subStringBody(result);
	 content.innerHTML = result;
	 overlay.setPosition(coordinate);
}

function subStringBody(html) {
	var i = html.indexOf("<body>");
	var f = html.indexOf("</body>");
	if(i >= 0 && f >= 0) {
		i += 6;
		return html.substring(i, f);
	}
}

function activeLayer(camada, ck) {
	var olCamada;
	if(camada == 'municipios') {
		olCamada = municipios
	} else if (camada == 'mesoregiao') {
		olCamada = mesoregiao
	} else if (camada == 'rodovias') {
		olCamada = rodovias
	} else if (camada == 'delegacias_civis') {
		olCamada = delegacias_civis
	} else if (camada == 'delegacias_federais') {
		olCamada = delegacias_federais
	} else if (camada == 'postos_federais') {
		olCamada = postos_federais
	} else if (camada == 'delegacias_civis_by_mesoregiao') {
		olCamada = delegacias_civis_by_mesoregiao
	} else if (camada == 'delegacias_civis_by_municipios') {
		olCamada = delegacias_civis_by_municipios
	} else if (camada == 'postos_federais_by_mesoregiao') {
		olCamada = postos_federais_by_mesoregiao
	} else if (camada == 'postos_federais_by_municipios') {
		olCamada = postos_federais_by_municipios
	} else if (camada == 'crimes_cvp_por_100_mil_hab') {
		olCamada = crimes_cvp_por_100_mil_hab
	} else if (camada == 'crimes_cvli_por_100_mil_hab') {
		olCamada = crimes_cvli_por_100_mil_hab
	} 

	olCamada.setVisible(ck);
}

function clear_delegacias_civis_near() {
	map.removeLayer(delegacias_civis_near)
}

function clear_delegacias_federais_near() {
	map.removeLayer(delegacias_federais_near)
}

function clear_postos_federais_near() {
	map.removeLayer(postos_federais_near)
}

function near(camada) {
	var olCamada = new ol.layer.Image(
		{
			source: new ol.source.ImageWMS({
				url: URL_WMS,
				params:{
					LAYERS: 'geoseguranca:'+camada+'_near', 
					STYLES: '',
					VIEWPARAMS: 'long:'+pinCoordinate[0]+';lat:'+pinCoordinate[1]
					},
			}),
			visible:true
		})
	map.addLayer(olCamada)

	if (camada == 'delegacias_civis') {
		clear_delegacias_civis_near()
		delegacias_civis_near = olCamada
	} else if (camada == 'delegacias_federais') {
		clear_delegacias_federais_near()
		delegacias_federais_near = olCamada
	} else if (camada == 'postos_federais') {
		clear_postos_federais_near()
		postos_federais_near = olCamada
	}
}

function clear_delegacias_civis_buffer() {
	map.removeLayer(delegacias_civis_buffer)
}

function clear_delegacias_federais_buffer() {
	map.removeLayer(delegacias_federais_buffer)
}

function clear_postos_federais_buffer() {
	map.removeLayer(postos_federais_buffer)
}

function buffer(camada) {
	var km = document.getElementById('km_'+camada+'_buffer').value;
	var olCamada = new ol.layer.Image({
		source: new ol.source.ImageWMS({
			url: URL_WMS,
			params:{
				LAYERS: 'geoseguranca:'+camada+'_buffer', 
				STYLES: '',
				VIEWPARAMS: 'km:'+km
				},
		}),
		visible:true,
		opacity: 0.25
	})
	map.addLayer(olCamada)

	if (camada == 'delegacias_civis') {
		clear_delegacias_civis_buffer()
		delegacias_civis_buffer = olCamada
	} else if (camada == 'delegacias_federais') {
		clear_delegacias_federais_buffer()
		delegacias_federais_buffer = olCamada
	} else if (camada == 'postos_federais') {
		clear_postos_federais_buffer()
		postos_federais_buffer = olCamada
	}	
}