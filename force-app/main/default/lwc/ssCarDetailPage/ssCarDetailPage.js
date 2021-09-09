import { LightningElement,wire } from 'lwc';
import pubsub from 'c/pubsub' ;
import { CurrentPageReference } from 'lightning/navigation';
export default class ssCarDetailPage extends LightningElement {
    @wire(CurrentPageReference) pageRef;

    Title;
    Manufacturer;
    Production;
    Assembly;
    Designer;
    connectedCallback(){
        this.regiser();
    }

    regiser(){
        window.console.log('event registered ');
        pubsub.registerListener('simplevt', this.handleEvent,this);
    }

    handleEvent(messageFromEvt){
        window.console.log('event handled ',messageFromEvt);
        this.Title = messageFromEvt.Title;
        this.Manufacturer=messageFromEvt.Manufacturer;
        this.Production=messageFromEvt.Production;
        this.Assembly=messageFromEvt.Assembly;
        this.Designer=messageFromEvt.Designer;
    }
}