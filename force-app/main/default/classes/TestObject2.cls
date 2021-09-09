public class TestObject2 {
 
private static final Integer DEFAULT_SIZE = 10;
 
Integer size;
 
   
   public TestObject2() {
       this(DEFAULT_SIZE); // Using this(...) calls the one argument constructor    
   }
 
   // Constructor with one argument 
   public TestObject2(Integer ObjectSize) {
     size = ObjectSize;  
   }
     public TestObject2(Integer ObjectSize,String name) {
     size = ObjectSize;  
   }
}