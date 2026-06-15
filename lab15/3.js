public class Task3 {
    public static void main(String[] args) {

        
        int numb = 10000;
        int counter = 0;
        
        while (numb >= 50) {
            numb /= 2;     
            counter++;      
        }
        
        int result = numb;
        
        System.out.println("Результат (число, яке стало менше 50): " + result);
        System.out.println("Кількість ітерацій (скільки разів ділили): " + counter);
    }
}