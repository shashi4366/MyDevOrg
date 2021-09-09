// Batch Job for Processing the Records
global  virtual class CustomerProessingBatch implements Database.Batchable<sobject> {
   global String [] email = new String[] {'test@test.com'};
   // Add here your email address here
  
   // Start Method
   global Database.Querylocator start (Database.BatchableContext BC) {
      String query = 'SELECT Id, Name FROM Account';
        return Database.getQueryLocator(query);
   }
   
    
   // Execute method
   global void execute (Database.BatchableContext BC, List<Account> accList) {
     
      
       // process each batch of records default size is 200
        for(Account acc : accList) {        
            // Update the Account Name 
            acc.Name = acc.Name + 'sfdc';
        }
       
            // Update the Account Record
            update accList;
         
        
        }
   
   // Finish Method
   global void finish(Database.BatchableContext BC) {
       
      Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
      
      // Below code will fetch the job Id
      AsyncApexJob a = [Select a.TotalJobItems, a.Status, a.NumberOfErrors,
      a.JobType, a.JobItemsProcessed, a.ExtendedStatus, a.CreatedById,
      a.CompletedDate From AsyncApexJob a WHERE id = :BC.getJobId()];
      
      // get the job Id
      System.debug('$$$ Jobid is'+BC.getJobId());
      
      // below code will send an email to User about the status
      mail.setToAddresses(email);
      mail.setReplyTo('test@test.com'); // Add here your email address
      mail.setSenderDisplayName('Apex Batch Processing Module');
      mail.setSubject('Batch Processing '+a.Status);
      mail.setPlainTextBody('The Batch Apex job processed'+ a.TotalJobItems+'batches with '+a.NumberOfErrors+'failures'+'Job Item processed are'+a.JobItemsProcessed);
      Messaging.sendEmail(new Messaging.Singleemailmessage [] {mail});
   }
}