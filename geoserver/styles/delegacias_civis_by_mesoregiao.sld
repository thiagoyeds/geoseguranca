<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor version="1.0.0"
                       xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd"
                       xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"
                       xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">

  <NamedLayer>
    <Name>delegacias_civis_by_mesoregiao</Name>
    <UserStyle>
      <Title>A yellow polygon style</Title>
      <FeatureTypeStyle>
        <Rule>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nm_meso</ogc:PropertyName>
            </Label>
            <Halo>
              <Radius>3</Radius>
              <Fill>
                <CssParameter name="fill">#FFFFFF</CssParameter>
              </Fill>
            </Halo>
            <LabelPlacement>
              <PointPlacement>
                <AnchorPoint>
                  <AnchorPointX>0.5</AnchorPointX>
                  <AnchorPointY>0.5</AnchorPointY>
                </AnchorPoint>
              </PointPlacement>
            </LabelPlacement>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Title>menos que 10</Title>
          <Font>
            <CssParameter name="font-family">Arial</CssParameter>
          </Font>
          <Filter>
            <PropertyIsLessThan>
              <PropertyName>count</PropertyName>
              <Literal>10</Literal>
            </PropertyIsLessThan>
          </Filter>
          <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">#ff0000</CssParameter>
            </Fill>
            <Stroke>
              <CssParameter name="stroke">#000000</CssParameter>
              <CssParameter name="stroke-width">0.5</CssParameter>
            </Stroke>
          </PolygonSymbolizer>
        </Rule>
        <Rule>
          <Title>entre 10 a 15</Title>
          <Filter>
            <PropertyIsGreaterThanOrEqualTo>
              <PropertyName>count</PropertyName>
              <Literal>10</Literal>
            </PropertyIsGreaterThanOrEqualTo>
            <PropertyIsLessThanOrEqualTo>
              <PropertyName>count</PropertyName>
              <Literal>15</Literal>
            </PropertyIsLessThanOrEqualTo>
          </Filter>
          <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">#ffa500
              </CssParameter>
            </Fill>
            <Stroke>
              <CssParameter name="stroke">#000000</CssParameter>
              <CssParameter name="stroke-width">0.5</CssParameter>
            </Stroke>
          </PolygonSymbolizer>
        </Rule>
        <Rule>
          <Title>mais que 15</Title>
          <Filter>
            <PropertyIsGreaterThan>
              <PropertyName>count</PropertyName>
              <Literal>15</Literal>
            </PropertyIsGreaterThan>
          </Filter>
          <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">#ffff00
              </CssParameter>
            </Fill>
            <Stroke>
              <CssParameter name="stroke">#000000</CssParameter>
              <CssParameter name="stroke-width">0.5</CssParameter>
            </Stroke>
          </PolygonSymbolizer>
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>