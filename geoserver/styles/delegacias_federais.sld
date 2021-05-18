<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor version="1.0.0"
  xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd"
  xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"
  xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">

  <NamedLayer>
    <Name>delegacias_federais</Name>
    <UserStyle>
      <Title>dark yellow square point style</Title>
      <FeatureTypeStyle>
        <Rule>
          <Title>Generic</Title>
          <MaxScaleDenominator>1000000</MaxScaleDenominator>
          <PointSymbolizer>
            <Graphic>
              <ExternalGraphic xmlns="http://www.opengis.net/sld" xmlns:xlink="http://www.w3.org/1999/xlink">
                <OnlineResource xlink:type="simple" xlink:href="delegacias_federais.png" />
                <Format>image/png</Format>
              </ExternalGraphic>
              <Size>30</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>

      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>