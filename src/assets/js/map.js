function initMap() {
  var hauteville = { lat: 48.4258474, lng: -0.3985334 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    mapTypeControl: false,
    center: hauteville,
    styles: [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#1d2c4d"
          }
        ]
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#8ec3b9"
          }
        ]
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#1a3646"
          }
        ]
      },
      {
        featureType: "administrative.country",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#4b6878"
          }
        ]
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#64779e"
          }
        ]
      },
      {
        featureType: "administrative.province",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#4b6878"
          }
        ]
      },
      {
        featureType: "landscape.man_made",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#334e87"
          }
        ]
      },
      {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [
          {
            color: "#023e58"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#283d6a"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#6f9ba5"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#1d2c4d"
          }
        ]
      },
      {
        featureType: "poi.business",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#023e58"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#3C7680"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#304a7d"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#98a5be"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#1d2c4d"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "labels",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#2c6675"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#255763"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "labels",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#b0d5ce"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#023e58"
          }
        ]
      },
      {
        featureType: "road.local",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road.local",
        elementType: "labels",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "transit",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#98a5be"
          }
        ]
      },
      {
        featureType: "transit",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#1d2c4d"
          }
        ]
      },
      {
        featureType: "transit.line",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#283d6a"
          }
        ]
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
          {
            color: "#3a4762"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#0e1626"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#4e6d70"
          }
        ]
      }
    ]
  });
  var home = new google.maps.Marker({
    position: hauteville,
    map: map,
    icon: '/images/home-pin.png'
  });

  var distributors = [
    // FRANCE
    {
      position: { lat: 47.3680556, lng: 0.8872843},
      title: "Bouquet de loire",
      address: "Distribution aux professionnels<br/> 32 route de Montlouis-la taille loiseau 37270 Saint Martin Le Beau",
      phone: "0247508769",
      email: "contact@bouquetdeloire.com"
    },
    // GERMANY
    {
      position: { lat: 50.0288887, lng: 7.8230785 },
      title: "WeinArt Grand Cru Select",
      url: "http://www.grand-cru-select.de",
      description: "",
      email: "info@weinart.de"
    },
    {
      position: { lat: 52.505564, lng: 13.4328131 },
      title: "Vin sur vin diffusion",
      url: "http://www.weine-visenvin.de",
      description: "",
      email: "info@weine-visenvin.de"
    },
    {
      position: { lat: 48.7766825, lng: 9.176349 },
      title: "Weinhandlung Kreis",
      url: "http://www.wein-kreis.de",
      description: "",
      email: "info@wein-kreis.de"
    },

    // AUSTRIA
    {
      position: { lat: 47.813499, lng: 13.548114 },
      title: "Kate & Kon",
      url: "http://www.kateandkon.com",
      email: "hallo@kateandkon.com"
    },

    // UK
    {
      position: { lat: 51.2192077, lng: -0.5794526 },
      title: "Les caves de Pyrene",
      url: "http://www.lescaves.co.uk",
      email: "sales@lescaves.co.uk"
    },

    // SPAIN
    {
      position: { lat: 42.3874657, lng: -2.5355985 },
      title: "La cava de Pyrene",
      url: "http://www.lacavadepyrene.com",
      email: "info@lacavadepyrene.com"
    },
    {
      position: { lat: 41.398649, lng: 2.18414 },
      title: "Cuvée 3000",
      url: "http://www.cuvee3000.com",
      email: "web@cuvee3000.com"
    },

    // IRELAND
    {
      position: { lat: 52.6536831, lng: -7.2555129 },
      title: "Le caveau",
      url: "http://www.lecaveau.ie",
      email: "orders@lecaveau.ie"
    },

    // SWEDEN
    {
      position: { lat: 59.3157278, lng: 17.771294 },
      title: "SFAR",
      url: "http://www.riktigcider.se",
      email: "info@riktigcider.se"
    },

    // NORWAY
    {
      position: { lat: 59.9220678, lng: 10.7272696 },
      title: "Moestue Grape Selections",
      url: "http://www.moestue.com",
      email: "moestue@moestue.com"
    },

    // DENMARK
    {
      position: { lat: 55.6742547, lng: 12.5876068 },
      title: "Rosforth & Rosforth",
      url: "http://www.rosforth.dk",
      email: "rosforth@rosforth.dk"
    },

    // NETHERLANDS
    {
      position: { lat: 52.8885389, lng: 5.3653316 },
      title: "De Vier Heemskinderen",
      url: "http://www.vierheemskinderen.nl",
      email: "wijnen@vierheemskinderen.nl"
    },

    // FINLAND
    {
      position: { lat: 60.2757454, lng: 24.2566765 },
      title: "Vin nature",
      url: "http://www.vinnature.fi",
      email: "vinnature@vinnature.fi"
    },
    {
      position: { lat: 61.5126475, lng: 23.9278739 },
      title: "AOC51",
      url: "http://www.aoc51.fi"
    },

    // BELGIUM
    {
      position: { lat: 50.305435, lng: 4.1535818 },
      title: "Mostade-Gobert",
      url: "http://www.vins-mostade-gobert.be",
      email: "etsmostade@hotmail.com"
    },
    {
      position: { lat: 50.6193662, lng: 5.4285808 },
      title: "TG Vins",
      url: "http://www.tgvins.be",
      email: "info@tgvins.be"
    },
    {
      position: { lat: 50.8508235, lng: 4.3261103 },
      title: "Fine wine and spirits",
      email: "info@godaert-vanbeneden.be"
    },
    {
      position: { lat: 50.7323709, lng: 4.6461252 },
      title: "Etre gourmet sprl",
      url: "http://www.bieresgourmet.be"
    },
    {
      position: { lat: 50.7336548, lng: 4.6440095 },
      title: "AME BVBA",
      url: "http://www.dewijnwinkel.be"
    },

    // PORTUGAL
    {
      position: { lat: 38.729078, lng: -9.164761 },
      title: "Os Goliardos Vinhos",
      url: "http://www.osgoliardos.com"
    },

    // ITALIA
    {
      position: { lat: 44.6290425, lng: 8.0743105 },
      title: "Les caves de Pyrene",
      url: "http://www.lescaves.it",
      email: "info@lescaves.it"
    },
    {
      position: { lat: 45.7078472, lng: 9.676777 },
      title: "Degusto Birra e Cucina",
      email: "degustobirraecucina@gmail.com"
    },

    // CANADA
    {
      position: { lat: 45.585457, lng: -73.520885 },
      title: "La cuvée",
      url: "http://www.saq.com",
      email: "info@lagv.ca"
    },
    {
      position: { lat: 45.4114473, lng: -75.6948286 },
      title: "Wild vines hand crafted",
      url: "http://www.lcbo.com",
      email: "twitter@thelivingvine.ca"
    },
    {
      position: { lat: 49.279582, lng: -123.130161 },
      title: "Marquis Wine Cellars",
      url: "http://www.marquis-wines.com"
    },
    {
      position: { lat: 49.8920596, lng: -97.1986999 },
      title: "Manitiba Liquors & Lotteries",
      url: "http://www.mbll.ca"
    },

    // AUSTRALIA
    {
      position: { lat: -33.8040051, lng: 151.1466877 },
      title: "Vintage and vine",
      url: "http://www.vintageandvine.com",
      email: "orders@vintageandvine.com"
    },

    // NEW ZEALAND
    {
      position: { lat: -41.5143706, lng: 173.8159966 },
      title: "Wine diamonds",
      url: "http://www.winediamonds.co.nz",
      email: "dan@winediamonds.co.nz"
    },

    // JAPAN
    {
      position: { lat: 35.676773, lng: 139.7348462 },
      title: "Terra vert",
      url: "http://www.terravert.co.jp",
      email: "info@terravert.co.jp"
    },

    // CHINA
    {
      position: { lat: 32.0695148, lng: 107.0906273 },
      title: "BD 500",
      url: "http://www.bd500wine.com"
    },

    // SOUTH KOREA
    {
      position: { lat: 35.7982098, lng: 125.6301418 },
      title: "Wine N",
      email: "dongykwak@gmail.com"
    },

    // THAILAND
    {
      position: { lat: 13.0003352, lng: 96.9943047 },
      title: "Perfect Aroma Co",
      email: "pierre@levin.asia"
    },

    // TAIWAN
    {
      position: { lat: 24.1538224, lng: 120.6651331 },
      title: "Le cellier des poètes",
      url: "http://www.cellierdespoetes.com",
      email: "cellierdespoetes@gmail.com"
    },

    // HONG KONG
    {
      position: { lat: 22.282917, lng: 114.152752 },
      title: "La cabane",
      url: "http://www.lacabane.hk"
    },

    // SWITZERLAND
    {
      position: { lat: 46.1912008, lng: 6.1282955 },
      title: "Le passeur de vin",
      url: "http://www.lepasseurdevin.ch",
      email: "info@lepasseurdevin.ch"
    },
    {
      position: { lat: 46.4151832, lng: 6.2725667 },
      title: "Cave SA",
      url: "http://www.cavesa.ch",
      email: "info@cavesa.ch"
    },

    // RUSSIA
    {
      position: { lat: 55.721449, lng: 37.645734 },
      title: "Wine and only",
      url: "http://www.wineandonly.ru",
      email: "075l@wineandonly.ru"
    },

    // BRAZIL
    {
      position: { lat: -20.1701878, lng: -40.2351076 },
      title: "Wine.com BR",
      url: "http://www.wine.com.br"
    },

    // CHILE
    {
      position: { lat: -33.4533624, lng: -70.714213 },
      title: "Edwards Fine Wines Limitada Commercial",
      email: "dedward@uc.cl"
    },

    // USA
    {
      position: { lat: 37.8475623, lng: -122.2941855 },
      title: "Beaune imports",
      url: "http://www.beauneimports.com",
      email: "orders@beauneimports.com"
    },
    {
      position: { lat: 41.2090052, lng: -73.7274883 },
      title: "Polaner Selections",
      url: "http://www.polanerselections.com",
      email: "info@polanerselections.com"
    },
    {
      position: { lat: 32.6581646, lng: -85.4216177 },
      title: "Authentique Vin",
      url: "http://www.authentiquevin.com"
    },
    {
      position: { lat: 38.7173106, lng: -77.1982389 },
      title: "Elite Wines",
      url: "http://www.elitewines.net"
    },
    {
      position: { lat: 41.8470999, lng: -87.6751333 },
      title: "Cream Wine",
      url: "http://www.creamwine.com",
      email: "services@creamwine.com"
    },
    {
      position: { lat: 42.4248069, lng: -71.1459202 },
      title: "Ideal Wines and spirits",
      url: "http://www.idealwine.us",
      email: "info@idealwine.us"
    },
    {
      position: { lat: 44.9635005, lng: -93.1179379 },
      title: "New France Wine",
      url: "http://www.newfrancewine.net"
    },
    {
      position: { lat: 39.7901385, lng: -86.1037996 },
      title: "Vanguard Wines",
      url: "http://www.vanguardwines.com",
      email: "info@vanguardwines.com"
    },
    {
      position: { lat: 39.1439091, lng: -75.9470746 },
      title: "Robert Panzer Selection",
      email: "robertpanzer@hotmail.com"
    },
    {
      position: { lat: 42.2733151, lng: -83.7727088 },
      title: "First Tier Import",
      url: "http://www.firsttierimports.com"
    },
    {
      position: { lat: 40.7087364, lng: -73.9292268 },
      title: "PM Spiritz",
      description: "For Calvados",
      url: "http://www.pmspirits.com",
      email: "info@pmspirits.com"
    }
  ];

  distributors.map(function(d) {
    var marker = new google.maps.Marker({
      position: d.position,
      map: map,
      title: d.title,
      animation: google.maps.Animation.DROP,
      icon: '/images/pin.png'
      // label: d.title
    });

    var infowindow = new google.maps.InfoWindow({
      content:
        '<div id="infoWindow">' +
        "<h4>" +
        d.title +
        "</h4>" +
        "<p>" +
        (d.description ? "<span>" + d.description + "</span>" : "") +
        (d.address 
          ? '<dl><dt><strong>Addresse</strong></dt><dd>' + d.address + '</dd></dl>' 
          : '') + 
        (d.phone
          ? '<dl><dt><strong>Téléphone</strong></dt><dd><a href="tel://' + d.phone+ '">' + d.phone+'</a></dd></dl>' 
          : '') +
        (d.email
          ? '<dl><dt><strong>Email</strong></dt><dd><a href="mailto://' + d.email+ '">' + d.email+'</a></dd></dl>' 
          : '') +
        (d.url
          ? '<dl><dt><strong>Site internet</strong></dt><dd><a href="' + d.url+ '">' + d.url+'</a></dd></dl>' 
          : '') +
          "</p>" +
        "</div>"
    });
    marker.addListener("click", function() {
      infowindow.open(map, marker);
    });

    map.addListener("click", function() {
      infowindow.close(marker);
    });
  });
}
