public class StaticProperty  extends CustomerProessingBatch{
   private static integer StaticMember;
   private integer NonStaticMember;
    
  
   public static integer MyGoodStaticProp { 
     get {return StaticMember;} 
     set { StaticMember = value; } 
   }  
   public integer MyGoodNonStaticProp { 
     get {return NonStaticMember;} 
     set { NonStaticMember = value; } 
   } 
}