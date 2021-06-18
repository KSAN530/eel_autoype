import eel
import pyautogui
import time
import threading

eel.init('web')

isstop = False
isstart = False

@eel.expose
def start(text, sec, loop):
    global isstart
    print(text+' start')
    t = threading.Thread(target=auto(text, sec, loop))
    t.start()

@eel.expose
def auto(text, sec, loop):
    global isstop
    global isstart
    isstart = True
    cooldown = sec
    count = 1
    while count < sec:
        if isstop == True:
            eel.sleep(1)
            isstop = False
            isstart = False
            print('stop')
            break
        count += 1
        cooldown -= 1
        print(text, cooldown, loop)
        eel.sleep(1)
        if count == sec:
            pyautogui.typewrite(text, interval=0.05)
            pyautogui.press('enter')
            isstart = False
            if loop == True:
                count = 1
                cooldown = sec
                isstart = True

@eel.expose
def stops():
    global isstop
    if isstart == True:
        isstop = True

eel.start('main.html', size=(519,245))
