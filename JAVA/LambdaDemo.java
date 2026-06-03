import java.util.*;

public class LambdaDemo{
public static void main(String[] args){
List<String> list=new ArrayList<>();
list.add("Bala");
list.add("Arun");
list.add("Kumar");
list.add("Zara");
Collections.sort(list,(a,b)->a.compareTo(b));
System.out.println(list);
}
}