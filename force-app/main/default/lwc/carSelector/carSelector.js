import { LightningElement } from 'lwc';
import brandLogo from '@salesforce/resourceUrl/Logo';
export default class CarSelector extends LightningElement {
    Ducati = brandLogo + '/DucatiLogo.png';
    husqvarna = brandLogo + '/bmwLogo.png';
    triumph = brandLogo + '/TriumphLogo.png';

    DucatiInfo = {
        CompanyName : " Ducati",
        ParentOrganization: "Lamborghini",
        Founded: " 1926 " ,
        Headquarters: "Borgo Panigale, Italy",
        CEO: "Claudio Domenicali",
        Founders: "Antonio Cavalieri Ducati" };
    
    BMWInfo = {
        CompanyName:"Bayerische Motoren Werke AG",
        Founded: " 1916 ",
        Headquarters: "Munich, Germany",
        CEO: "	Oliver Zipse",
        Founders: "Karl Rapp"

    };

    TriumphInfo = {
        CompanyName:"Triumph Motorcycles Ltd",
        Founded: " 1984 ",
        Headquarters: "Hinckley, United Kingdom",
        CEO: "Nick Bloor",
        Founders: "John Bloor"

    };
    handleClickDucati(){
        // Creates the event
        const selectedEvent = new CustomEvent('ducatievent', { detail : this.DucatiInfo });
        //dispatching the custom event
        this.dispatchEvent(selectedEvent);
    }
    handleClickBMW(){
        // Creates the event
        const selectedEvent = new CustomEvent('bmwevent', { detail : this.BMWInfo });
        //dispatching the custom event
        this.dispatchEvent(selectedEvent);
    }
    handleClickTriumph(){
        // Creates the event
        const selectedEvent = new CustomEvent('triumphevent', { detail : this.TriumphInfo });
        //dispatching the custom event
        this.dispatchEvent(selectedEvent);
    }


}