import eel
import pyautogui

eel.init('web')
class Autotype:
    #建構式 初始化
    def __init__(self, text, value, loop):
        self.text = text
        self.value = value
        self.loop = loop

    #方法(Mehod) 開始
    def start(self):
        global is_stop
        sec = int(self.value)
        cooldown = sec
        count = 0
        while count < sec:
            count += 1
            cooldown -= 1
            eel.sleep(1)
            print(f"{self.text} 冷卻中 {cooldown} 循環 {self.loop}")

            if is_stop == True:
                eel.sleep(1)
                is_stop = False
                print("已停止")
                break #強制跳出迴圈

            if count == sec:
                print("冷卻完成")
                pyautogui.typewrite(self.text, interval=0.1)
                pyautogui.press('enter')
                if self.loop == True:
                    print("執行循環")
                    cooldown = sec
                    count = 0

#執行開始 from js
@eel.expose
def auto(text, value, loop):
    if text == "" or value =="":
        #print("未設定")
        return
    cmd = Autotype(text, value, loop)
    cmd.start()

#停止執行 from js
is_stop = False
@eel.expose
def stop():
    global is_stop
    is_stop = True

eel.start('main.html', size=(519,245))
