from flask import Flask
import requests

app = Flask(__name__)

courses = [81851, 82243, 81294, 81299]

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


def get_row_number(data, class_num):
    rows = data['data']['query']['rows']
    for entry in rows:
        if entry.get('CLASS_NBR') == class_num:
            return entry.get('attr:rownumber')
    return None


def get_class_info(course_list):
    data = get_data()
    watchlist = []
    for course_num in course_list:
        row = get_row_number(data, course_num) - 1  # -1 to account for 0-based index
        list_item = {
            data['data']['query']['rows'][row]['COURSENAME']: {
                'DAYS': data['data']['query']['rows'][row]['DAYS'],
                'OPEN_SEATS': data['data']['query']['rows'][row]['TRUEOPEN'],
                'WAITLIST': data['data']['query']['rows'][row]['WAIT_TOT']
            }
        }
        watchlist.append(list_item)
    return watchlist

@app.route("/")
def retrieve_classes():
    return get_class_info(courses)


if __name__ == "__main__":
    app.run(debug=True)

