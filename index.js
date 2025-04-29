import java.util.Scanner;

public class ValidadorBandeiraCartao {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite o número do cartão de crédito: ");
        String numeroCartao = scanner.nextLine().replaceAll("\\s+", ""); // remove espaços

        String bandeira = identificarBandeira(numeroCartao);
        System.out.println("Bandeira identificada: " + bandeira);
    }

    public static String identificarBandeira(String numero) {
        if (numero.matches("^4[0-9]{12}(?:[0-9]{3})?$")) {
            return "Visa";
        } else if (numero.matches("^5[1-5][0-9]{14}$") || numero.matches("^2(2[2-9][0-9]{12}|[3-6][0-9]{13}|7[01][0-9]{12}|720[0-9]{12})$")) {
            return "MasterCard";
        } else if (numero.matches("^3[47][0-9]{13}$")) {
            return "American Express";
        } else if (numero.matches("^3(?:0[0-5]|[68][0-9])[0-9]{11}$")) {
            return "Diners Club";
        } else if (numero.matches("^6(?:011|5[0-9]{2})[0-9]{12}$")) {
            return "Discover";
        } else if (numero.matches("^(?:2131|1800|35\\d{3})\\d{11}$")) {
            return "JCB";
        } else {
            return "Bandeira desconhecida";
        }
    }
}
