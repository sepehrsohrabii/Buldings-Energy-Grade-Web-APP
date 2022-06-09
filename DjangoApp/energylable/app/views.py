from django.shortcuts import render
from rest_framework import viewsets
from .serializers import LableSerializer
from .models import Lable


class LableView(viewsets.ModelViewSet):
    serializer_class = LableSerializer
    queryset = Lable.objects.all()
