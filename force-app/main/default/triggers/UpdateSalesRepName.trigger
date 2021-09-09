trigger UpdateSalesRepName on Account (before insert,before update){ 
    
    
    set<Id> setAccowner = new set<Id>();// afteted records owner id
    
    for(Account Acc : trigger.New)
    { 
        setAccowner.add(Acc.ownerId);
    }
    
    
    Map<Id, user> usermap = new Map<Id, user>([SELECT Name FROM user WHERE Id IN: setAccowner]);
    System.debug('usermap==>'+usermap);
    
    for(Account Acc : Trigger.New)//5 records
    {  
        Acc.sales_rep__c = usermap.get(Acc.ownerId).Name;
    }
    
    
    
}