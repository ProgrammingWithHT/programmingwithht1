import kivy
from kivy.app import App
from kivy.uix.button import Button
from kivy.uix.label import Label

class MyApp(App):

    def build(self):
        # Create a button widget
        button = Button(text='Click Me!')
        button.bind(on_press=self.on_button_click)

        # Create a label widget
        self.label = Label(text='Hello, World!')
        return self.label
        

if __name__ == '__main__':
    MyApp().run()
