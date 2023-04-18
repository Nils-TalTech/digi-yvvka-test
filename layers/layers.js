var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 0.375000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_asustusyksus_20230301_1 = new ol.format.GeoJSON();
var features_asustusyksus_20230301_1 = format_asustusyksus_20230301_1.readFeatures(json_asustusyksus_20230301_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_asustusyksus_20230301_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_asustusyksus_20230301_1.addFeatures(features_asustusyksus_20230301_1);
var lyr_asustusyksus_20230301_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_asustusyksus_20230301_1, 
                style: style_asustusyksus_20230301_1,
                interactive: true,
                title: '<img src="styles/legend/asustusyksus_20230301_1.png" /> asustusyksus_20230301'
            });
var format_SHP_KATASTRIYKSUS_2 = new ol.format.GeoJSON();
var features_SHP_KATASTRIYKSUS_2 = format_SHP_KATASTRIYKSUS_2.readFeatures(json_SHP_KATASTRIYKSUS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SHP_KATASTRIYKSUS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHP_KATASTRIYKSUS_2.addFeatures(features_SHP_KATASTRIYKSUS_2);
var lyr_SHP_KATASTRIYKSUS_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SHP_KATASTRIYKSUS_2, 
                style: style_SHP_KATASTRIYKSUS_2,
                interactive: true,
                title: '<img src="styles/legend/SHP_KATASTRIYKSUS_2.png" /> SHP_KATASTRIYKSUS'
            });
var format_vesi_torud_invest_3 = new ol.format.GeoJSON();
var features_vesi_torud_invest_3 = format_vesi_torud_invest_3.readFeatures(json_vesi_torud_invest_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vesi_torud_invest_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vesi_torud_invest_3.addFeatures(features_vesi_torud_invest_3);
var lyr_vesi_torud_invest_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_vesi_torud_invest_3, 
                style: style_vesi_torud_invest_3,
                interactive: true,
    title: 'vesi_torud_invest<br />\
    <img src="styles/legend/vesi_torud_invest_3_0.png" /> perspektiivne<br />\
    <img src="styles/legend/vesi_torud_invest_3_1.png" /> rekonstrueeritav<br />'
        });
var format_vesi_torud_olemasolev_4 = new ol.format.GeoJSON();
var features_vesi_torud_olemasolev_4 = format_vesi_torud_olemasolev_4.readFeatures(json_vesi_torud_olemasolev_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vesi_torud_olemasolev_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vesi_torud_olemasolev_4.addFeatures(features_vesi_torud_olemasolev_4);
var lyr_vesi_torud_olemasolev_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_vesi_torud_olemasolev_4, 
                style: style_vesi_torud_olemasolev_4,
                interactive: true,
                title: '<img src="styles/legend/vesi_torud_olemasolev_4.png" /> vesi_torud_olemasolev'
            });
var format_vesi_objektid_invest_5 = new ol.format.GeoJSON();
var features_vesi_objektid_invest_5 = format_vesi_objektid_invest_5.readFeatures(json_vesi_objektid_invest_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vesi_objektid_invest_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vesi_objektid_invest_5.addFeatures(features_vesi_objektid_invest_5);
var lyr_vesi_objektid_invest_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_vesi_objektid_invest_5, 
                style: style_vesi_objektid_invest_5,
                interactive: true,
                title: '<img src="styles/legend/vesi_objektid_invest_5.png" /> vesi_objektid_invest'
            });
var format_vesi_objektid_olemasolev_6 = new ol.format.GeoJSON();
var features_vesi_objektid_olemasolev_6 = format_vesi_objektid_olemasolev_6.readFeatures(json_vesi_objektid_olemasolev_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vesi_objektid_olemasolev_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vesi_objektid_olemasolev_6.addFeatures(features_vesi_objektid_olemasolev_6);
var lyr_vesi_objektid_olemasolev_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_vesi_objektid_olemasolev_6, 
                style: style_vesi_objektid_olemasolev_6,
                interactive: true,
                title: '<img src="styles/legend/vesi_objektid_olemasolev_6.png" /> vesi_objektid_olemasolev'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_asustusyksus_20230301_1.setVisible(true);lyr_SHP_KATASTRIYKSUS_2.setVisible(true);lyr_vesi_torud_invest_3.setVisible(true);lyr_vesi_torud_olemasolev_4.setVisible(true);lyr_vesi_objektid_invest_5.setVisible(true);lyr_vesi_objektid_olemasolev_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_asustusyksus_20230301_1,lyr_SHP_KATASTRIYKSUS_2,lyr_vesi_torud_invest_3,lyr_vesi_torud_olemasolev_4,lyr_vesi_objektid_invest_5,lyr_vesi_objektid_olemasolev_6];
lyr_asustusyksus_20230301_1.set('fieldAliases', {'ANIMI': 'ANIMI', });
lyr_SHP_KATASTRIYKSUS_2.set('fieldAliases', {'TUNNUS': 'TUNNUS', 'L_AADRESS': 'L_AADRESS', });
lyr_vesi_torud_invest_3.set('fieldAliases', {'Id': 'Id', 'cNetworks': 'cNetworks', 'YvvkaTyyp': 'YvvkaTyyp', 'YvvkaEtapp': 'YvvkaEtapp', 'Diameter': 'Diameter', 'YvvkaObj': 'YvvkaObj', 'Length': 'Length', 'Maksumus': 'Maksumus', 'YvvkaOlek': 'YvvkaOlek', 'YvvkaOlekA': 'YvvkaOlekA', });
lyr_vesi_torud_olemasolev_4.set('fieldAliases', {'Diameter': 'Diameter', 'Year': 'Year', 'cNetworks': 'cNetworks', });
lyr_vesi_objektid_invest_5.set('fieldAliases', {'Id': 'Id', 'cNetworks': 'cNetworks', 'YvvkaTyyp': 'YvvkaTyyp', 'YvvkaEtapp': 'YvvkaEtapp', 'YvvkaObj': 'YvvkaObj', 'Maksumus': 'Maksumus', 'YvvkaOlek': 'YvvkaOlek', 'YvvkaOlekA': 'YvvkaOlekA', });
lyr_vesi_objektid_olemasolev_6.set('fieldAliases', {'YvvkaObj': 'YvvkaObj', 'cNetworks': 'cNetworks', 'YvvkaTyyp': 'YvvkaTyyp', 'YvvkaEtapp': 'YvvkaEtapp', 'YvvkaOlek': 'YvvkaOlek', 'YvvkaOlekA': 'YvvkaOlekA', 'MuutKuup': 'MuutKuup', 'Muutja': 'Muutja', });
lyr_asustusyksus_20230301_1.set('fieldImages', {'ANIMI': 'TextEdit', });
lyr_SHP_KATASTRIYKSUS_2.set('fieldImages', {'TUNNUS': 'TextEdit', 'L_AADRESS': 'TextEdit', });
lyr_vesi_torud_invest_3.set('fieldImages', {'Id': 'TextEdit', 'cNetworks': 'TextEdit', 'YvvkaTyyp': 'TextEdit', 'YvvkaEtapp': 'TextEdit', 'Diameter': 'TextEdit', 'YvvkaObj': 'TextEdit', 'Length': 'TextEdit', 'Maksumus': 'TextEdit', 'YvvkaOlek': 'TextEdit', 'YvvkaOlekA': 'TextEdit', });
lyr_vesi_torud_olemasolev_4.set('fieldImages', {'Diameter': 'TextEdit', 'Year': 'TextEdit', 'cNetworks': 'TextEdit', });
lyr_vesi_objektid_invest_5.set('fieldImages', {'Id': 'TextEdit', 'cNetworks': 'TextEdit', 'YvvkaTyyp': 'TextEdit', 'YvvkaEtapp': 'TextEdit', 'YvvkaObj': 'TextEdit', 'Maksumus': 'TextEdit', 'YvvkaOlek': 'TextEdit', 'YvvkaOlekA': 'TextEdit', });
lyr_vesi_objektid_olemasolev_6.set('fieldImages', {'YvvkaObj': 'TextEdit', 'cNetworks': 'TextEdit', 'YvvkaTyyp': 'TextEdit', 'YvvkaEtapp': 'Range', 'YvvkaOlek': 'TextEdit', 'YvvkaOlekA': 'Range', 'MuutKuup': 'DateTime', 'Muutja': 'TextEdit', });
lyr_asustusyksus_20230301_1.set('fieldLabels', {'ANIMI': 'header label', });
lyr_SHP_KATASTRIYKSUS_2.set('fieldLabels', {'TUNNUS': 'header label', 'L_AADRESS': 'header label', });
lyr_vesi_torud_invest_3.set('fieldLabels', {'Id': 'header label', 'cNetworks': 'header label', 'YvvkaTyyp': 'header label', 'YvvkaEtapp': 'header label', 'Diameter': 'header label', 'YvvkaObj': 'header label', 'Length': 'header label', 'Maksumus': 'header label', 'YvvkaOlek': 'header label', 'YvvkaOlekA': 'header label', });
lyr_vesi_torud_olemasolev_4.set('fieldLabels', {'Diameter': 'header label', 'Year': 'header label', 'cNetworks': 'header label', });
lyr_vesi_objektid_invest_5.set('fieldLabels', {'Id': 'header label', 'cNetworks': 'header label', 'YvvkaTyyp': 'header label', 'YvvkaEtapp': 'header label', 'YvvkaObj': 'header label', 'Maksumus': 'header label', 'YvvkaOlek': 'header label', 'YvvkaOlekA': 'header label', });
lyr_vesi_objektid_olemasolev_6.set('fieldLabels', {'YvvkaObj': 'header label', 'cNetworks': 'header label', 'YvvkaTyyp': 'header label', 'YvvkaEtapp': 'header label', 'YvvkaOlek': 'header label', 'YvvkaOlekA': 'header label', 'MuutKuup': 'header label', 'Muutja': 'header label', });
lyr_vesi_objektid_olemasolev_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});