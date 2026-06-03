import java.sql.*;

public class StudentDAO{

public static void insertStudent(int id,String name){
try{
Connection con=DriverManager.getConnection(
"jdbc:mysql://localhost:3306/studentdb",
"root",
"password"
);

PreparedStatement ps=con.prepareStatement(
"insert into students values(?,?)"
);

ps.setInt(1,id);
ps.setString(2,name);

ps.executeUpdate();

con.close();
}
catch(Exception e){
System.out.println(e);
}
}

public static void updateStudent(int id,String name){
try{
Connection con=DriverManager.getConnection(
"jdbc:mysql://localhost:3306/studentdb",
"root",
"password"
);

PreparedStatement ps=con.prepareStatement(
"update students set name=? where id=?"
);

ps.setString(1,name);
ps.setInt(2,id);

ps.executeUpdate();

con.close();
}
catch(Exception e){
System.out.println(e);
}
}
}