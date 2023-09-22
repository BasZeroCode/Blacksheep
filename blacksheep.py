import random

def generate_choices():
    options = ["apple", "banana", "cherry", "date", "fig", "grape", "kiwi", "lemon", "mango", "orange", "pear"]
    # Shuffle the options randomly
    random.shuffle(options)
    # Choose the black sheep
    black_sheep = random.choice(options)
    return options, black_sheep

def print_choices(options):
    for i, option in enumerate(options):
        print(f"{i + 1}. {option}")

def main():
    print("Welcome to the Black Sheep Game!")
    score = 0

    while True:
        options, black_sheep = generate_choices()
        print_choices(options)
        
        # Ask the player to choose the black sheep
        try:
            choice = int(input("Which one is the black sheep? Enter the number: "))
            chosen_option = options[choice - 1]

            if chosen_option == black_sheep:
                print("Correct! That's the black sheep.")
                score += 1
            else:
                print(f"Wrong choice. The black sheep was {black_sheep}.")

            print(f"Your score: {score}")
            play_again = input("Do you want to play again? (yes/no): ").lower()
            if play_again != "yes":
                print("Thanks for playing!")
                break
        except (ValueError, IndexError):
            print("Invalid input. Please enter a valid number.")

if __name__ == "__main__":
    main()
