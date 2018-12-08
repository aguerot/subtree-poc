function initProducts() {
  var products = [
    {
      title: "Perlant jus de pommes à Sydre",
      category: "Produit de soif - 330ml ou 750ml",
      caption: "Douceur développant les arômes primaires et doux épices des fruits à cidre. Au plaisir dès le petit déjeuner (viennoiserie etc...) mais surtout mis en valeur sur bon nombre de desserts recherchés par exemple la tarte mandarine façon Alex Croquets à Wattignies...<br/>A vous de voir et boire",
      smallImage: "images/produits/pomme-perlant.jpg",
      detailsImage: "images/produits/pomme-perlant-details.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "Sidre nouvelle vague",
      category: "Produit de soif - 330ml, fût 5L ou 20L",
      caption: "Sidre de \"soif\" en fût de 5L (1.5bar) et en 20L slimline (3 à 4 bars, derrière le comptoir).<br/>Au verre pétillant léger de table, au bar, au buffet, au picnic, en terrasse etc...<br/>Equilibre entre le brut et demi-sec accompagnant une multitiude de mets - <small>(5%/vol)</small>",
      smallImage: "images/produits/sidre-nouvelle-vague.jpg",
      detailsImage: "images/produits/sidre-nouvelle-vague-details.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    // {
    //   title: "Poiré 33cl",
    //   category: "Produit de soif - 330ml",
    //   caption: "Poiré de soif demi-sec acidulé, robe pâle selon le millésime tout en fruit et fraîcheur - <small>(4%/vol)</small><br/>En apéritif, avec les produits de la mer et les fromages.",
    //   smallImage: "images/produits/poire-33.jpg",
    //   detailsImage: "images/produits/sidre-nouvelle-vague-details.jpg",
    //   seeMoreUrl: "",
    //   seeMoreTitle: ""
    // },
    {
      title: "Sidre tendre",
      category: "Produit de soif - 750ml",
      caption: "Cidre doux fruité acidulé aux arômes de pommes sauvages de l'automne. Peu alcoolisé - <small>(3.5%/vol)</small>. <br/>S'accompagne parfaitement sur les desserts et viennoiserie",
      smallImage: "images/produits/sidre-tendre.jpg",
      detailsImage: "images/produits/sidre-tendre-details.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "Sidre brut tendre",
      category: "Produit de soif - 750ml",
      caption: "Cidre demi-sec de bel équilibre, fruit et matière, bon compromis entre le brut et le tendre avec un peu de sucre résiduel - 5%/vol<br/>Sur une cuisine simple pouvant accompagner tout le repas.",
      smallImage: "images/produits/sidre-brut-tendre.jpg",
      detailsImage: "images/produits/sidre-brut-tendre-details.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "Sidre brut",
      category: "Produit de soif - 750ml",
      caption: "Cidre classique extra brut, sec... - <small>(7%/vol)</small>Idéal avec de la charcuterie",
      smallImage: "images/produits/sidre-brut.jpg",
      detailsImage: "images/produits/sidre-brut-details.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "Poiré authentique",
      category: "Produit de soif - 750ml et magnum 1500ml",
      caption: "Poiré de soif demi-sec acidulé, robe pâle selon le millésime tout en fruit et fraîcheur - <small>(4%/vol)</small><br/>En apéritif, avec les produits de la mer et les fromages.",
      smallImage: "images/produits/poire-authentique.jpg",
      detailsImage: "images/produits/poire-authentique-details.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    // {
    //   title: "Poiré",
    //   category: "Produit de soif - 330ml",
    //   caption: "",
    //   smallImage: "images/produits/poire-authentique.jpg",
    //   detailsImage: "images/produits/poire-authentique-details.jpg",
    //   seeMoreUrl: "",
    //   seeMoreTitle: ""
    // },
    {
      title: "Sydre Argelette",
      category: "Gastronomie - 750ml et magnum 1500ml",
      caption: "L'Argelette, désignant le cailloux schisteux, est une cuvée complexe composée du maximum de variétés issues de vieux arbres dans le soucis de respecter le millésime.<br/>Sydre vineux de très bonne garde grâce à son équilibre entre matière, acidité, rondeur, ampleur et minéralité. - <small>(5%/vol)</small> selon millésime",
      smallImage: "images/produits/sydre-argelette-grand-cru.jpg",
      detailsImage: "images/produits/sydre-argelette-grand-cru-details.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "Poiré Granit",
      category: "Gastronomie - 750ml et magnum 1500ml",
      caption: "\"Granit\" définit la roche où les racines du poirier plongent dans les failles de granit. Le système racinaire en profondeur du poirier marque sa minéralité. Cet aspect est davantage présent sur cette cuvée issue d'arbres très anciens. Assemblage d'un maximum de variétés dans le respect du millésime - <small>(4%/vol)</small><br/>S'accompagne de la grande cuisine des produits nobles, en apéritif avant de grands vins blancs ou en fin de repas.",
      smallImage: "images/produits/poire-granit-grand-cru.jpg",
      detailsImage: "images/produ-its/poire-granit-grand-cru-details.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    },
    {
      title: "Cormé",
      category: "Gastronomie - 500ml",
      caption: "Boisson du Maine du 15ème siècle produite familialement jusqu'aux années 50 et remis à la \"technique du jour\" du Domaine Eric Bordelet avec 10 variétés de Cormes",
      smallImage: "images/produits/corme-banner.jpg",
      detailsImage: "images/produits/corme-details.jpg",
      seeMoreUrl: "/corme.html",
      seeMoreTitle: ""
    },
    // {
    //   title: "Sydre Glace",
    //   category: "Gastronomie",
    //   caption: "En vieillissement",
    //   smallImage: "images/produits/poire-granit-grand-cru.jpg",
    //   detailsImage: "images/produits/poire-granit-grand-cru.jpg",
    //   seeMoreUrl: "",
    //   seeMoreTitle: ""
    // },
    // {
    //   title: "Poiré Glace",
    //   category: "Gastronomie",
    //   caption: "En vieillissement",
    //   smallImage: "images/produits/sydre-argelette-grand-cru.jpg",
    //   detailsImage: "images/produits/sydre-argelette-grand-cru.jpg",
    //   seeMoreUrl: "",
    //   seeMoreTitle: ""
    // },
    {
      title: "Calvados",
      category: "Gastronomie",
      caption: "En vieillissement en fûts, \"réduction naturelle en cave sous-terrainne\"",
      smallImage: "images/produits/calvados.jpg",
      detailsImage: "images/produits/calvados-details.jpg",
      seeMoreUrl: "",
      seeMoreTitle: ""
    }
  ];

  var root = $("#products");
  products.forEach(function(p) {
      root.append(toBrick(p));
  })
}

function toBrick(item) {
  return [
      '<div class="masonry__brick" data-aos="fade-up">',
      '  <div class="item-folio" itemscope itemtype="http://schema.org/Product">',
      '      <div class="item-folio__thumb">',
      '          <a href="' + item.detailsImage + '" class="thumb-link" title="' + item.title + '" data-size="800x1200">',
      '              <img src="' + item.smallImage + '" alt="" itemprop="image">',
      '          </a>',
      '      </div>',
      '      <div class="item-folio__text">',
      '          <h3 class="item-folio__title" itemprop="name">',
      '              ' + item.title + '',
      '          </h3>',
      '          <p class="item-folio__cat">',
      '              ' + item.category + '',
      '          </p>',
      '      </div>',
      '      <a href="' + item.seeMoreUrl +'" class="item-folio__project-link" title="' + item.seeMoreTitle + '">',
      '          <i class="icon-link"></i>',
      '      </a>',
      '      <div class="item-folio__caption">',
      '          <p itemprop="description">' + item.caption + '</p>',
      '      </div>',
      '  </div>',
      '</div>'
    ].join('');
}
