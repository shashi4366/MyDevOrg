public class OwnerReassignment implements Database.Batchable<sObject>{
    String query;
    String email;
    Id toUserId;
    Id fromUserId;
    
    public Database.querylocator start(Database.BatchableContext BC){
        return Database.getQueryLocator(query);
    }
    
    public void execute(Database.BatchableContext BC, List<sObject> scope){
        List<Account> accns = new List<Account>();
        
        for(sObject s : scope)
        {
            
            Account a = (Account)s;
            if(a.OwnerId==fromUserId){
                a.OwnerId=toUserId;
                accns.add(a);
                               }
                              }
        
        update accns;
        
    }
    public void finish(Database.BatchableContext BC){
        
    }
}