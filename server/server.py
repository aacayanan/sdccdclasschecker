from flask import Flask
import requests

app = Flask(__name__)

courses = [3398, 3400, 3127, 3121]

def get_data():
    url = 'https://mws-api.sdccd.edu/?term=2253career=ugrd&_=1730965648722'
    data = None
    try:
        response = requests.get(url, verify=False)
        if response.status_code == 200:
            data = response.json()
            return data
        else:
            print(f"Error: {response.status_code}")
            return "Error, try again later"
    except requests.RequestException as e:
        print(e)


def get_class_info(course_list):
    data = get_data()
    watchlist = []
    for course_num in course_list:
        list_item = {
            data['data']['query']['rows'][course_num]['COURSENAME']: {
                'DAYS': data['data']['query']['rows'][course_num]['DAYS'],
                'OPEN_SEATS': data['data']['query']['rows'][course_num]['TRUEOPEN'],
                'WAITLIST': data['data']['query']['rows'][course_num]['WAIT_TOT']
            }
        }
        watchlist.append(list_item)
    return watchlist


@app.route("/")
def retrieve_classes():
    return get_class_info(courses)


if __name__ == "__main__":
    app.run(debug=True)

