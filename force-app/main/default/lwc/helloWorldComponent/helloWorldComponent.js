import { LightningElement,api} from 'lwc';

export default class HelloWorldComponent extends LightningElement {
    @api message;
}