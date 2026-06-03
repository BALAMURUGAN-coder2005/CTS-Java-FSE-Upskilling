import java.lang.reflect.*;

class Student{
public void display(){
System.out.println("Student Method");
}
}

public class ReflectionDemo{
public static void main(String[] args)throws Exception{

Class<?> c=Class.forName("Student");

Method[] methods=
c.getDeclaredMethods();

for(Method m:methods){
System.out.println(m.getName());
}

Object obj=
c.getDeclaredConstructor()
.newInstance();

Method m=
c.getDeclaredMethod("display");

m.invoke(obj);
}
}