public class FinancialForecaster {

    public static double forecastValue(double presentValue, double growthRate, int years) {
        if (years == 0) {
            return presentValue;
        }
        return (1 + growthRate) * forecastValue(presentValue, growthRate, years - 1);
    }

    public static void main(String[] args) {
        double presentValue = 10000.0;
        double growthRate = 0.10;
        int years = 5;

        double futureValue = forecastValue(presentValue, growthRate, years);
        System.out.printf("Predicted value after %d years: ₹%.2f\n", years, futureValue);
    }
}