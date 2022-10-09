from itertools import count
from operator import is_
import random
import json
from xml.etree.ElementTree import tostring
import datetime

def get_data():
    with open("words.json", "r") as f:
        return json.load(f)

def is_pangram(string):
    if len(set(list(string))) == 7:
        return True
    return False

def get_words_letter(pangram_set):
    todays_letters = list(random.choice(list(pangram_set)))
    # todays_letters = [ "B", "N", "A", "X", "M", "İ", "R" ]
    return todays_letters

def get_words(day):
    pangram_set = set()
    for k in worddict:
        if is_pangram(k):
            letterset = frozenset(k)
            pangram_set.add(letterset)

    res = []

    while len(res) < 15:
        todays_letters = get_words_letter(pangram_set)
        center_letter = todays_letters[3]
        word_dict_result = []
        res = []
        
        for w in worddict:
            explanation = worddict[w]
            flag = True
            for c in w:
                if c not in todays_letters:
                    flag = False
            if center_letter not in w:
                flag = False
            if flag == True:
                if w not in res:
                    res.append(w)
                    word_dict_result.append({
                        "word": w,
                        "explanation": explanation,
                        "isPanagram": is_pangram(w),
                        "score": calculate_word_score(w),
                        "length": len(w)
                    })

    return create_json(
        day,
        calculate_expiration_date(day),
        [letter.upper() for letter in todays_letters],
        center_letter,
        word_list_info(word_dict_result),
        sort_word_dict_result(word_dict_result)
    )

def word_list_info(word_dict_result):
    sum_score = 0
    panagram_count = 0
    word_length = {}
    for i in word_dict_result:
        if i["isPanagram"]==True:
            panagram_count+=1
        sum_score+=i["score"]
        word_length[i["length"]] = 1 + int(word_length.get(i["length"], 0))
    return {
        "word_count": len(word_dict_result),
        "sum_score": sum_score,
        "panagram_count": panagram_count,
        "word_length": word_length
    }

def sort_word_dict_result(word_dict_result):
    result = sorted(word_dict_result, key=lambda d: d['score']) 
    count = 1
    for i in result:
        i["id"] = count
        count+=1
    return result

def calculate_word_score(word):
    score = 0
    if is_pangram(word):
        score += 17
    else:
        if len(word) == 4:
            score += 1
        elif len(word) > 4:
            score += len(word)
    return score

def create_explanation(word, explanation, score_list, isPanagram):
    result = []
    for idx, w in enumerate(word):
        result.append({
            "word": word[idx],
            "score": score_list[idx],
            "explanation": explanation[idx],
            "length": len(w),
            "isPanagram": isPanagram[idx]
        })
    return result

def create_json(
    day, expiration, outer_letters, center_letter, words_info, words
):
    outer_letters.remove(center_letter)
    return {
        "gameData": {
            "day": day,
            "expiration": expiration,
            "centerLetter": center_letter,
            "outerLetters": outer_letters,
            "words_info": words_info,
            "words": words,
        }
    }

def calculate_expiration_date(day):
    year = day[0:4]
    month = day[4:6]
    day = day[6:8]
    return datetime.datetime(int(year), int(month), int(day), 23, 59).strftime("%s")

def store_day(full_day):
    json_data = get_words(full_day)
    print(full_day)
    with open("../static/words/" + full_day + ".json", "w") as f:
        json.dump(json_data, f, ensure_ascii=False, indent=4)

worddict = get_data()

def main():

    print("Enter 20220801 to get new value or just click enter to skip")
    custom_day = input()
    # custom_day = '20221011'
    if(len(custom_day)==8):
        store_day(custom_day)
        return

    first_day = 1
    for i in range(first_day, 32):
        year = "2022"
        month = "10"
        day = str(i)
        if int(day) < 10:
            day = "0" + day
        full_day = year + month + day
        store_day(full_day)
       
main()