const getApparelObj = (sunnyClothes, overcastClothes, rainyClothes, freezingRainyClothes, snowyClothes, heavySnowyClothes) => (
    {
        "sunny": sunnyClothes,
        "partly cloudy": overcastClothes,
        "cloudy": overcastClothes,
        "overcast": overcastClothes,
        "mist": overcastClothes,
        "patchy rain possible": rainyClothes,
        "patchy snow possible": snowyClothes,
        "patchy sleet possible": freezingRainyClothes,
        "patchy freezing drizzle possible": freezingRainyClothes,
        "thundery outbreaks possible": freezingRainyClothes,
        "blowing snow": heavySnowyClothes,
        "blizzard": heavySnowyClothes,
        "fog": overcastClothes,
        "freezing fog": overcastClothes,
        "patchy light drizzle": rainyClothes,
        "light drizzle": rainyClothes,
        "freezing drizzle": freezingRainyClothes,
        "heavy freezing drizzle": freezingRainyClothes,
        "patchy light rain": rainyClothes,
        "light rain": rainyClothes,
        "moderate rain at times": rainyClothes,
        "moderate rain": rainyClothes,
        "heavy rain at times": freezingRainyClothes,
        "heavy rain": freezingRainyClothes,
        "light freezing rain": freezingRainyClothes,
        "moderate or heavy freezing rain": freezingRainyClothes,
        "light sleet": freezingRainyClothes,
        "moderate or heavy sleet": snowyClothes,
        "patchy light snow": snowyClothes,
        "light snow": snowyClothes,
        "patchy moderate snow": snowyClothes,
        "moderate snow": snowyClothes,
        "patchy heavy snow": heavySnowyClothes,
        "heavy snow": heavySnowyClothes,
        "Ice pellets": freezingRainyClothes,
        "light rain shower": rainyClothes,
        "moderate or heavy rain shower": freezingRainyClothes,
        "torrential rain shower": freezingRainyClothes,
        "light sleet showers": freezingRainyClothes,
        "moderate or heavy sleet showers": freezingRainyClothes,
        "light snow showers": snowyClothes,
        "moderate or heavy snow showers": heavySnowyClothes,
        "light showers of ice pellets": freezingRainyClothes,
        "moderate or heavy showers of ice pellets": freezingRainyClothes,
        "patchy light rain with thunder": rainyClothes,
        "moderate or heavy rain with thunder": freezingRainyClothes,
        "patchy light snow with thunder": snowyClothes,
        "moderate or heavy snow with thunder": heavySnowyClothes
    }
)
const apparels = {
    "-100 - 0": getApparelObj("pack a light jacket and wear some warm clothes", 
                            "pack a light jacket and wear some warm clothes", 
                            "wear some warm clothes and have an umbrella or raincoat to hand",
                            "wear some heavy clothes and have an umbrella or raincoat to hand",
                            "wear heavy layers of clothes and heavy boots",
                            "wear heavy layers of clothes and heavy boots"),
    "0 - 10": getApparelObj("pack a light jacket and wear some warm clothes", 
                            "pack a light jacket and wear some warm clothes", 
                            "wear some warm clothes and have an umbrella or raincoat to hand",
                            "wear some heavy clothes and have an umbrella or raincoat to hand",
                            "wear heavy layers of clothes and heavy boots",
                            "wear heavy layers of clothes and heavy boots"),
    "10 - 20": getApparelObj("pack a light jacket and wear some warm clothes", 
                            "pack a light jacket and wear some warm clothes", 
                            "wear some warm clothes and have an umbrella or raincoat to hand",
                            "wear some heavy clothes and have an umbrella or raincoat to hand",
                            "wear heavy layers of clothes and heavy boots",
                            "wear heavy layers of clothes and heavy boots"),
    "20 - 30": getApparelObj("pack a light jacket and wear some warm clothes", 
                            "pack a light jacket and wear some warm clothes", 
                            "wear some warm clothes and have an umbrella or raincoat to hand",
                            "wear some heavy clothes and have an umbrella or raincoat to hand",
                            "wear heavy layers of clothes and heavy boots",
                            "wear heavy layers of clothes and heavy boots"),
    "30 - 40": getApparelObj("pack a light jacket and wear some warm clothes", 
                            "pack a light jacket and wear some warm clothes", 
                            "wear some warm clothes and have an umbrella or raincoat to hand",
                            "wear some heavy clothes and have an umbrella or raincoat to hand",
                            "wear heavy layers of clothes and heavy boots",
                            "wear heavy layers of clothes and heavy boots"),
    "40 - 60": getApparelObj("pack a light jacket and wear some warm clothes", 
                            "pack a light jacket and wear some warm clothes", 
                            "wear some warm clothes and have an umbrella or raincoat to hand",
                            "wear some heavy clothes and have an umbrella or raincoat to hand",
                            "wear heavy layers of clothes and heavy boots",
                            "wear heavy layers of clothes and heavy boots")
}

export default apparels
