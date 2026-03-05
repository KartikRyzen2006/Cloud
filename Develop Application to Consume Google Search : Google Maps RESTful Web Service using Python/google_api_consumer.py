import requests

# Enter your Google API key
GOOGLE_API_KEY = "YOUR_GOOGLE_API_KEY"

def search_places(query):
    endpoint = "https://maps.googleapis.com/maps/api/place/textsearch/json"

    params = {
        "query": query,
        "key": GOOGLE_API_KEY
    }

    response = requests.get(endpoint, params=params)
    data = response.json()

    if response.status_code == 200:
        return data['results']
    else:
        print("Error")
        return None


def get_place_details(place_id):
    endpoint = "https://maps.googleapis.com/maps/api/place/details/json"

    params = {
        "place_id": place_id,
        "key": GOOGLE_API_KEY
    }

    response = requests.get(endpoint, params=params)
    data = response.json()

    if response.status_code == 200:
        return data['result']
    else:
        print("Error")
        return None


def main():

    search_query = input("Enter a place to search: ")

    places = search_places(search_query)

    if places:
        print("\nSearch Results:")

        for index, place in enumerate(places, start=1):
            print(f"{index}. {place['name']}")

        selected_index = int(input("\nEnter the number of the place: "))

        selected_place = places[selected_index - 1]

        place_details = get_place_details(selected_place['place_id'])

        if place_details:
            print("\nPlace Details:")
            print("Name:", place_details['name'])
            print("Address:", place_details.get('formatted_address'))
            print("Rating:", place_details.get('rating', 'N/A'))


if __name__ == "__main__":
    main()