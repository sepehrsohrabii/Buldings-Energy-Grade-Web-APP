from django.db import models

class Lable(models.Model):
    title = models.TextField(default='home', verbose_name='نام برچسب')
    address = models.TextField(verbose_name='آدرس ساختمان')
    bargh = models.IntegerField(verbose_name='مصرف سالیانه برق (kWh)')
    gaz = models.IntegerField(verbose_name='مصرف سالیانه گاز (m3)')
    gazoil = models.IntegerField(verbose_name='مصرف سالیانه گازوییل (lit)')
    mazot = models.IntegerField(verbose_name='مصرف سالیانه مازوت (lit)')
    eghlim = models.IntegerField(verbose_name='اقلیم (بر اساس جدول)')
    karbari = models.IntegerField(verbose_name='کاربری ساختمان')
    zirbana = models.IntegerField(verbose_name='زیربنای مفید ساختمان (m2)')

    @property
    def e_actual(self):
        E_actual = ( (self.gaz * 37.68 * 0.278) + (self.gazoil * 37.3 * 0.278) + (self.mazot * 41 * 0.278) + (self.bargh * 3.7) ) / self.zirbana
        return E_actual

    @property
    def e_ideal(self):
        E_ideal_koochak = [111, 111, 156, 156, 83, 86, 150, 130]
        E_ideal_bozorg = [102, 102, 106, 106, 87, 75, 138, 118]
        E_ideal_dolati = [80, 80, 64, 64, 74, 64, 86, 91]
        E_ideal_khosusi = [120, 120, 152, 152, 124, 117, 121, 197]

        if self.karbari == 1:
            E_ideal = E_ideal_koochak[self.eghlim - 1]

        elif self.karbari == 2:
            E_ideal = E_ideal_bozorg[self.eghlim - 1]

        elif self.karbari == 3:
            E_ideal = E_ideal_dolati[self.eghlim - 1]

        elif self.karbari == 4:
            E_ideal = E_ideal_khosusi[self.eghlim - 1]

        return E_ideal

    @property
    def r(self):
        if self.e_ideal == 156:
            R = self.e_actual / self.e_ideal
            C = (1.7 * R) - 0.7
            Rc = C * R
            R = Rc
        else:
            R = self.e_actual / self.e_ideal
        return R

    @property
    def grade(self):
        R = self.r
        if self.karbari == 1:  # MASKOONI KOOCHAK
            if R < 1:
                Grade = 'A'
            elif R >= 1 and R < 1.9:
                Grade = 'B'
            elif R >= 1.9 and R < 2.7:
                Grade = 'C'
            elif R >= 2.7 and R < 3.4:
                Grade = 'D'
            elif R >= 3.4 and R < 4:
                Grade = 'E'
            elif R >= 4 and R < 4.5:
                Grade = 'F'
            elif R >= 4.5 and R < 5:
                Grade = 'G'
            elif R >= 5:
                Grade = 'NO LABLE'

        elif self.karbari == 2:  # MASKOONI BOZORG
            if R < 1:
                Grade = 'A'
            elif R >= 1 and R < 2:
                Grade = 'B'
            elif R >= 2 and R < 2.9:
                Grade = 'C'
            elif R >= 2.9 and R < 3.7:
                Grade = 'D'
            elif R >= 3.7 and R < 4.4:
                Grade = 'E'
            elif R >= 4.4 and R < 5:
                Grade = 'F'
            elif R >= 5 and R < 5.4:
                Grade = 'G'
            elif R >= 5.4:
                Grade = 'NO LABLE'

        elif self.karbari == 3:  # DOLATI
            if R < 1:
                Grade = 'A'
            elif R >= 1 and R < 2:
                Grade = 'B'
            elif R >= 2 and R < 3:
                Grade = 'C'
            elif R >= 3 and R < 4:
                Grade = 'D'
            elif R >= 4 and R < 5:
                Grade = 'E'
            elif R >= 5 and R < 6:
                Grade = 'F'
            elif R >= 6 and R < 7:
                Grade = 'G'
            elif R >= 7:
                Grade = 'NO LABLE'


        elif self.karbari == 4:  # KHOSUSI
            if R < 1:
                Grade = 'A'
            elif R >= 1 and R < 2.2:
                Grade = 'B'
            elif R >= 2.2 and R < 3.2:
                Grade = 'C'
            elif R >= 3.2 and R < 4:
                Grade = 'D'
            elif R >= 4 and R < 4.6:
                Grade = 'E'
            elif R >= 4.6 and R < 5.2:
                Grade = 'F'
            elif R >= 5.2 and R < 5.5:
                Grade = 'G'
            elif R >= 5.5:
                Grade = 'NO LABLE'

        return str(Grade)

