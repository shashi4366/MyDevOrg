import { LightningElement,api } from 'lwc';

export default class GenericRecordForm extends LightningElement {
@api recordId;
@api objectApiName;
@api layoutRows;

    fields = [];
    get FieldApiNames(){
        for(let ke of this.layoutRows){
            for(let kee of ke.layoutItems){
                for (let kees of kee.layoutComponents){
                    if(kees.apiName!=null){
                    this.fields.push(kees.apiName);
                    }
                }
            }
        };
            return this.fields;
    }
}