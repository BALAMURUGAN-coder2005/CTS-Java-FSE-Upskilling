public class PatternMatchingDemo{

static void check(Object obj){
switch(obj){
case Integer i->System.out.println("Integer: "+i);
case String s->System.out.println("String: "+s);
case Double d->System.out.println("Double: "+d);
default->System.out.println("Unknown Type");
}
}

public static void main(String[] args){
check(10);
check("Bala");
check(12.5);
}
}