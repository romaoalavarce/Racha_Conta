import pyautogui
import time
import keyboard


time.sleep(5)  

while True:
    if keyboard.is_pressed('esc'):
        print("Programa encerrado.")
        break
    pyautogui.write('aa')
    