ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31370").setExtent([96936.171331, 189696.146875, 114788.785468, 200491.012547]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 0.667000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KruispuntenSamenvatting_1 = new ol.format.GeoJSON();
var features_KruispuntenSamenvatting_1 = format_KruispuntenSamenvatting_1.readFeatures(json_KruispuntenSamenvatting_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31370'});
var jsonSource_KruispuntenSamenvatting_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KruispuntenSamenvatting_1.addFeatures(features_KruispuntenSamenvatting_1);
var lyr_KruispuntenSamenvatting_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KruispuntenSamenvatting_1, 
                style: style_KruispuntenSamenvatting_1,
                popuplayertitle: 'Kruispunten Samenvatting',
                interactive: true,
                title: '<img src="styles/legend/KruispuntenSamenvatting_1.png" /> Kruispunten Samenvatting'
            });
var group_Kruispuntennetwerk = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Kruispunten netwerk'});
var group_Stijlitems = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Stijlitems'});
var group_OSMitems = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'OSM items'});

lyr_OpenStreetMap_0.setVisible(true);lyr_KruispuntenSamenvatting_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_KruispuntenSamenvatting_1];
lyr_KruispuntenSamenvatting_1.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'fid': 'fid', 'objectid': 'objectid', 'kruispuntsamenvatting': 'kruispuntsamenvatting', });
lyr_KruispuntenSamenvatting_1.set('fieldImages', {'ogc_fid': 'TextEdit', 'fid': 'TextEdit', 'objectid': 'TextEdit', 'kruispuntsamenvatting': 'TextEdit', });
lyr_KruispuntenSamenvatting_1.set('fieldLabels', {'ogc_fid': 'hidden field', 'fid': 'hidden field', 'objectid': 'hidden field', 'kruispuntsamenvatting': 'no label', });
lyr_KruispuntenSamenvatting_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});