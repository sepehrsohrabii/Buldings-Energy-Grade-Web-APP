bargh = input("masrafe salianeye bargh (kWh): ")
bargh = int(bargh)

gaz = input("masrafe salianeye gaz (m3): ")
gaz = int(gaz)

gazoil = input("masrafe salianeye gazoil (lit): ")
gazoil = int(gazoil)

mazot = input("masrafe salianeye mazot (lit): ")
mazot = int(mazot)

eghlim = input("ba tavajoh be jadvale eghlim az 1 ta 8 ra vared konid: ")
eghlim = int(eghlim)

karbari = input("karbari 1-maskuni kuchak  2-maskuni bozorg  3-dolati  4-khosusi (1 ta 4): ")
karbari = int(karbari)

zirbana = input("zirbanaye mofid (m2): ")
zirbana = int(zirbana)

E_actual = ( (gaz * 37.68 * 0.278) + (gazoil * 37.3 * 0.278) + (mazot * 41 * 0.278) + (bargh * 3.7) ) / zirbana

E_ideal_koochak = [111, 111, 156, 156, 83, 86, 150, 130]
E_ideal_bozorg = [102, 102, 106, 106, 87, 75, 138, 118]

E_ideal_dolati = [80, 80, 64, 64, 74, 64, 86, 91]
E_ideal_khosusi = [120, 120, 152, 152, 124, 117, 121, 197]


if karbari == 1:
    E_ideal = E_ideal_koochak[eghlim - 1]

elif karbari == 2:
    E_ideal = E_ideal_bozorg[eghlim - 1]

elif karbari == 3:
    E_ideal = E_ideal_dolati[eghlim - 1]

elif karbari == 4:
    E_ideal = E_ideal_khosusi[eghlim - 1]

R = E_actual / E_ideal

print (f'bargh = {bargh}')
print (f'gaz = {gaz}')
print (f'gazoil = {gazoil}')
print (f'mazot = {mazot}')
print (f'eghlim = {eghlim}')
print (f'karbari = {karbari}')
print (f'zirbana = {zirbana}')
print (f'E_actual = {E_actual}')
print (f'E_ideal = {E_ideal}')
print (f'bargh = {bargh}')

if E_ideal == 156:
    C = (1.7 * R) - 0.7
    Rc = C * R
    R = Rc
    print(f'R = {Rc}')
else:
    print(f'R = {R}')
    

### ENERGY GRADE ###

if karbari == 1: #MASKOONI KOOCHAK
    if R < 1:
        print(f'Energy Grade: A')
    elif R >= 1 and R < 1.9:
        print(f'Energy Grade: B')
    elif R >= 1.9 and R < 2.7:
        print(f'Energy Grade: C')
    elif R >= 2.7 and R < 3.4:
        print(f'Energy Grade: D')
    elif R >= 3.4 and R < 4:
        print(f'Energy Grade: E')
    elif R >= 4 and R < 4.5:
        print(f'Energy Grade: F')
    elif R >= 4.5 and R < 5:
        print(f'Energy Grade: G')
    elif R >= 5:
        print(f'Energy Grade: **NO LABLE**')

elif karbari == 2: #MASKOONI BOZORG
    if R < 1:
        print(f'Energy Grade: A')
    elif R >= 1 and R < 2:
        print(f'Energy Grade: B')
    elif R >= 2 and R < 2.9:
        print(f'Energy Grade: C')
    elif R >= 2.9 and R < 3.7:
        print(f'Energy Grade: D')
    elif R >= 3.7 and R < 4.4:
        print(f'Energy Grade: E')
    elif R >= 4.4 and R < 5:
        print(f'Energy Grade: F')
    elif R >= 5 and R < 5.4:
        print(f'Energy Grade: G')
    elif R >= 5.4:
        print(f'Energy Grade: **NO LABLE**')

elif karbari == 3: #DOLATI
    if R < 1:
        print(f'Energy Grade: A')
    elif R >= 1 and R < 2:
        print(f'Energy Grade: B')
    elif R >= 2 and R < 3:
        print(f'Energy Grade: C')
    elif R >= 3 and R < 4:
        print(f'Energy Grade: D')
    elif R >= 4 and R < 5:
        print(f'Energy Grade: E')
    elif R >= 5 and R < 6:
        print(f'Energy Grade: F')
    elif R >= 6 and R < 7:
        print(f'Energy Grade: G')
    elif R >= 7:
        print(f'Energy Grade: **NO LABLE**')


elif karbari == 4: #KHOSUSI
    if R < 1:
        print(f'Energy Grade: A')
    elif R >= 1 and R < 2.2:
        print(f'Energy Grade: B')
    elif R >= 2.2 and R < 3.2:
        print(f'Energy Grade: C')
    elif R >= 3.2 and R < 4:
        print(f'Energy Grade: D')
    elif R >= 4 and R < 4.6:
        print(f'Energy Grade: E')
    elif R >= 4.6 and R < 5.2:
        print(f'Energy Grade: F')
    elif R >= 5.2 and R < 5.5:
        print(f'Energy Grade: G')
    elif R >= 5.5:
        print(f'Energy Grade: **NO LABLE**')




