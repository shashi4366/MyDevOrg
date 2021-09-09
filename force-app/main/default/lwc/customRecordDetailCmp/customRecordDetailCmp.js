import { LightningElement,api,wire} from 'lwc';
import { getRecordUi } from 'lightning/uiRecordApi';

export default class CustomRecordDetailCmp extends LightningElement {
    @api recordId;
    @api objectApiName;
    @api variant;
    iconName="utility:toggle_panel_left";
    showPannel =true;
    FieldValue;
    recordTypeId;
    SectionsData;
    layoutInfo;
  
    @wire(getRecordUi, {
        recordIds: "$recordId",
        layoutTypes: "Full",
        modes: "View",
      })
      wiredRecord({ error, data }) {
        if (data) {
        console.log("wiredRecord=>"+JSON.stringify(data));
        
          this.FieldValue = data.records[this.recordId].fields;
          this.recordTypeId = data.records[this.recordId].recordTypeId;
          this.layoutInfo=data.layouts[this.objectApiName];
          this.SectionsData=this.layoutInfo[this.recordTypeId].Full.View.sections;
        } else{
          // TODO: Data handling
          //
        }
      }

    handleClick(event){
      this.showPannel = !this.showPannel; 
      this.iconName = this.iconName==='utility:toggle_panel_left' ? 'utility:toggle_panel_top' : 'utility:toggle_panel_left';

    }

    
   
}