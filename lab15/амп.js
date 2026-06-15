public class Task1 {
    public static void main(String[] args) {
        
        System.out.println("Прості числа від 0 до 100:");
        
        int number = 2; 
        
        while (number <= 100) {
            boolean isPrime = true;
            int divisor = 2;
            

            while (divisor <= Math.sqrt(number)) {
                if (number % divisor == 0) {
                    isPrime = false; 
                    break;
                }
                divisor++;
            }
            
            if (isPrime) {
                System.out.print(number + " ");
            }
            number++;
        }
    }
}