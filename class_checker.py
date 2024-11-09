import requests
import time

get_url = 'https://mws-api.sdccd.edu/?term=2253career=ugrd&_=1730965648722'
data = None

course_num = [3398, 3400, 3127, 3121]
watchlist = []


def get_data():
    try:
        response = requests.get(get_url, verify=False)
        if response.status_code == 200:
            global data
            data = response.json()
            print('Success')
        else:
            print(f"Error: {response.status_code}")
    except requests.RequestException as e:
        print(f"Error: {e}")


def get_class_info():
    for i in course_num:
        watchlist.append((data["data"]['query']['rows'][i]['COURSENAME'], data["data"]['query']['rows'][i]['DAYS'],
                          data["data"]['query']['rows'][i]['TRUEOPEN'], "Waitlist",
                          data["data"]['query']['rows'][i]['WAIT_TOT']))
    print(watchlist)


while True:
    get_data()
    get_class_info()
    time.sleep(3600)
