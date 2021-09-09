import { LightningElement, track } from 'lwc';

export default class Bike_Info extends LightningElement {



    @track bShowModal = false;
 

    companyName;
    Founded;
    Headquarters;
    CEO;
    Founders;
    handleDucatiEvent(event){
        //access object parameters and assign the value
        this.companyName= event.detail.CompanyName;
        this.Founded= event.detail.Founded;
        this.Headquarters= event.detail.Headquarters;
        this.CEO= event.detail.CEO;
        this.Founders= event.detail.Founders;
        this.bShowModal = true;
    }

    handleBmwEvent(event){
        //access object parameters and assign the value
        this.companyName= event.detail.CompanyName;
        this.Founded= event.detail.Founded;
        this.Headquarters= event.detail.Headquarters;
        this.CEO= event.detail.CEO;
        this.Founders= event.detail.Founders;
        this.bShowModal = true;
    }

    handleTriumphEvent(event){
        //access object parameters and assign the value
        this.companyName= event.detail.CompanyName;
        this.Founded= event.detail.Founded;
        this.Headquarters= event.detail.Headquarters;
        this.CEO= event.detail.CEO;
        this.Founders= event.detail.Founders;
        this.bShowModal = true;
    }


    /* javaScipt functions start */ 
    openModal() {    
        // to open modal window set 'bShowModal' tarck value as true
        this.bShowModal = true;
    }
 
    closeModal() {    
        // to close modal window set 'bShowModal' tarck value as false
        this.bShowModal = false;
    }
    /* javaScipt functions end */ 

}