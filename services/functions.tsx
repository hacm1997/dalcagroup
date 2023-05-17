//Set Format to Number Price's
export const formatNumber = (number: number) => {
    return new Intl.NumberFormat().format(number);
}

/* 
,
    {
      "id": 10,
      "name": "Lote I",
      "location": "Turbaco",
      "area": 95,
      "price": 950000,
      "description": "",
      "images": [{
        "banner": "/images/home/lotes/banner-dev.png",
        "name": "banner-dev",
        "gallery": [
          {"img": ""},
          {"img": ""},
          {"img": ""},
          {"img": ""}
        ]
      }],
      "location_map": ""
    }
*/