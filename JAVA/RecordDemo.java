import java.util.*;

record Person(String name,int age){}

public class RecordDemo{
public static void main(String[] args){
List<Person> list=List.of(
new Person("Bala",21),
new Person("Arun",17),
new Person("Kumar",25)
);

list.stream()
.filter(p->p.age()>=18)
.forEach(System.out::println);
}
}