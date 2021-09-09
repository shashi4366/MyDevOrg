public class sharingClass  {
    
    
    public static void method1(){
        
        
        List<Contact> conList = [Select Department , Description from Contact];
        
        
        for(Contact badCon : conList) {
            
            if (badCon.Department == 'Finance') {
                
                badCon.Description = 'New description';
            }
           

                        update badCon;
        }
   
        
    }
    
    
}