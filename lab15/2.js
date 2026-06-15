public class Task2 {
    public static void main(String[] args) {
        
        int i = 0;
        
        do {
            if (i == 0) {
                System.out.println(i + " – це нуль");
            } else if (i % 2 == 0) {
                System.out.println(i + " – парне число");
            } else {
                System.out.println(i + " – непарне число");
            }
            i++;
        } while (i <= 10);
    }
}