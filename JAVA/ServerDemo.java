import java.io.*;
import java.net.*;

public class ServerDemo{
public static void main(String[] args)throws Exception{
ServerSocket ss=new ServerSocket(5000);
Socket s=ss.accept();

BufferedReader br=new BufferedReader(
new InputStreamReader(
s.getInputStream()
)
);

System.out.println(br.readLine());

ss.close();
}
}