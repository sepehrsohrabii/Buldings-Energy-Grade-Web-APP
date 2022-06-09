from django.contrib import admin
from .models import Lable

class LableAdmin(admin.ModelAdmin):
    list_display = ('title', 'address', 'bargh', 'gaz', 'gazoil', 'mazot', 'eghlim',
                    'karbari', 'zirbana', 'e_actual', 'e_ideal', 'r', 'grade')

admin.site.register(Lable, LableAdmin)
