import java.util.Random;
import java.util.Scanner;

class GuessNumber{

public static void main(String args[]){

Scanner sc=new Scanner(System.in);

Random r=new Random();

int target=r.nextInt(100)+1;

int guess=0;

while(guess!=target){

System.out.print("Enter Guess : ");

guess=sc.nextInt();

if(guess>target){

System.out.println("Too High");

}

else if(guess<target){

System.out.println("Too Low");

}

else{

System.out.println("Correct Guess");

}

}

}

}