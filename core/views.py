import os 
from django.shortcuts import render

from .helper import get_bestsellers_by_genre


def home(request):
    bestsellers = get_bestsellers_by_genre()
    context = {'bestsellers':bestsellers}
    return render(request, 'core/main.html',context)


    
    