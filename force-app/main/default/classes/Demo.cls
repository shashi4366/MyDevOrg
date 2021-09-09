public  inherited sharing class Demo {
 
    // Property declaration
   public string name1 {
      get { 
          name1=name1+'sha';
          return name1;
      }
       set { 
          name1 = value; 
      }
   } 
  public  static void display(sobject so){
      
      
      system.debug('==>'+so);
  
      
   
      
      
      
  }
     
    public  void fetchAccount(){
      // some logic
      
      list<account> acc=[select id from account];
      
  }

     
    
    
}