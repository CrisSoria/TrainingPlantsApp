import { LightningElement, wire } from "lwc";
import getFilteredSpecies from "@salesforce/apex/SpeciesService.getFilteredSpecies";

export default class SpeciesList extends LightningElement {
  /*species = [
    {
      Name: "Jazmin",
      Description__c: "Olorosa y bonita planta trepadora",
      Image_URL__c:
        "https://i.pinimg.com/originals/88/a4/9f/88a49f73cb34bb49ea799087ad2fba15.jpg",
      Location__c: "Indoors,Outdoors"
    },
    {
      Name: "Aloe Vera",
      Description__c:
        "Conocida por sus propiedades medicinales y aplicaciones para la piel",
      Image_URL__c:
        "https://www.farmaceuticonline.com/wp-content/uploads/2019/03/aloevera-1024x768.jpg",
      Location__c: "Outdoors"
    },
    {
      Name: "Hierbabuena",
      Description__c:
        "Arómatica que huele de maravilla, muy usada en la gastronomía, en la medicina popular y para hacer te",
      Image_URL__c:
        "https://decoracionyjardines.com/wp-content/uploads/2017/02/cuidados-de-la-hierbabuena.jpg",
      Location__c: "Outdoors"
    }
  ];*/

  searchText = "";

  @wire(getFilteredSpecies, { searchText: "$searchText" }) //el simbolo del dolar delante de la variable es para que cada vez que cambie traiga nuevos valores
  species;

  handleInputChange(event) {
    const searchTextAux = event.target.value;
    if (searchTextAux.length >= 3 || searchTextAux === "") {
      this.searchText = searchTextAux;
    }
  }
}
