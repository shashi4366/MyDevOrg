import { LightningElement,wire } from 'lwc';
import Cars from '@salesforce/resourceUrl/car';
import { CurrentPageReference } from 'lightning/navigation';
import pubsub from 'c/pubsub' ; 
export default class SsCarSelector extends LightningElement {
    @wire(CurrentPageReference) pageRef;
    Porche_911 = Cars + '/porsche/911.jpg';
    Porche_cayamen = Cars + '/porsche/porsche-cayenne-gts.jpg';

    Porche_911Info = {  
                        Title  :"Porche 911",
                        Manufacturer :"Porsche AG",
                        Production   :"1963–present",
                        Assembly	 :"Germany: Baden-Württemberg, Stuttgart",
                        Designer	 :"Ferdinand Butzi Porsche (original design)" 
                    };
    
    Porche_CayenneInfo = {
                            Title  :"Porche Cayenne",
                            Manufacturer :"Porsche AG",
                            Production   :"2002–present",
                            Assembly	 :"Germany: Baden-Württemberg, Stuttgart",
                            Designer	 :"Michael Mauer (original design)" 
        
                         };              



    handlePorche_911Click(){
        window.console.log('Event Firing from 911..... ');

        pubsub.fireEvent(this.pageRef,'simplevt', this.Porche_911Info );

        window.console.log('Event Fired ');
    }

    handlePorche_Cayenne(){
        window.console.log('Event Firing from Cayenne..... ');

        pubsub.fireEvent(this.pageRef,'simplevt', this.Porche_CayenneInfo );

        window.console.log('Event Fired ');

    }

}