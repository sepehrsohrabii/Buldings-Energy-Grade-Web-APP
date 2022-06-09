from rest_framework import serializers
from .models import Lable

class LableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lable
        fields = ('id', 'title', 'address', 'bargh', 'gaz', 'gazoil', 'mazot', 'eghlim',
                    'karbari', 'zirbana', 'e_actual', 'e_ideal', 'r', 'grade')