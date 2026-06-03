import java.util.*;

public class ArrayListDemo{
public static void main(String[] args){
Scanner sc=new Scanner(System.in);
ArrayList<String> names=new ArrayList<>();
int n=sc.nextInt();
sc.nextLine();
for(int i=0;i<n;i++){
names.add(sc.nextLine());
}
for(String name:names){
System.out.println(name);
}
}
}