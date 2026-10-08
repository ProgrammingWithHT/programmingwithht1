import tkinter as tk
import customtkinter as ctk

def open_new_window():
    # Create a new top-level window
    new_window = ctk.CTkToplevel(app)
    
    new_window.title("New Window")
    

    # Create a button in the new window
    button_in_window = ctk.CTkButton(new_window, text="Close Window", command=new_window.destroy)
    button_in_window.pack(padx=20, pady=10)

    # Raise the new window to the top
    new_window.lift()

# Create the main application window
app = tk.Tk()
app.title("Main Application")

# Custom style for buttons
# button_style = ctk.CTkStyles(background='#4CAF50', foreground='white', font=('Helvetica', 12), padding=10, borderwidth=2)
# Create a button to open a new window
open_button = ctk.CTkButton(app, text="Open New Window",command=open_new_window)
open_button.pack(padx=20, pady=20)

# Run the main event loop
app.mainloop()



# import os
# import tkinter

# def rename():

#     folderpath = r''+path.get()
#     counter = 1

#     for filename in os.listdir(folderpath):
#         os.rename(folderpath+'\\'+filename , folderpath+'\\'+word.get()+str(counter)+exe.get())
#         counter = counter+1

#     ent.delete(0,tkinter.END)
#     ent2.delete(0,tkinter.END)
#     ent3.delete(0,tkinter.END)
    


# root = tkinter.Tk()
# root.title('ProgrammingWithHT')
# root.geometry('300x300')

# path = tkinter.StringVar()

# tkinter.Label(root, text = 'PASTE FILE PATH', font=('TIMES NEW ROMAN', 12)).pack()
# ent = tkinter.Entry(root, textvariable = path, font=('TIMES NEW ROMAN', 12))
# ent.pack()

# word = tkinter.StringVar()

# tkinter.Label(root, text = 'New Name', font=('TIMES NEW ROMAN', 12)).pack()
# ent2 = tkinter.Entry(root, textvariable = word, font=('TIMES NEW ROMAN', 12))
# ent2.pack()

# exe = tkinter.StringVar()

# tkinter.Label(root, text = 'ENTER EXTENSION', font=('TIMES NEW ROMAN', 12)).pack()
# ent3 = tkinter.Entry(root, textvariable = exe, font=('TIMES NEW ROMAN', 12))
# ent3.pack()

# # Create a label widget

# tkinter.Button(root, text = 'Rename', command = rename).pack()

# label=tkinter.Label(root, text="\nGroup Member\n4301 Hamza Tahir\n4323 Ahsan Ali\nFurqan", font=('Arial 12 bold')).pack()

# root.mainloop()